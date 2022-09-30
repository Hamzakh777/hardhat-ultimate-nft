// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "base64-sol/base64.sol";

// mint
// store our SVG information somewhere
// some logic to say "Show X image" or "Show Y image"

error DynamicSvgNft__TransferFailed();
error DynamicSvgNft__URI_QueryFor__NonExistentToken();
error DynamicSvgNft__EthNotEnough();

contract DynamicSvgNft is ERC721URIStorage, Ownable {
  string private constant BASE64_ENCODED_SVG_PREFIX = "data:image/svg_xml;base64,";

  AggregatorV3Interface internal immutable i_priceFeed;

  // NFT variables
  uint256 private s_tokenCounter;
  uint256 private immutable i_mintFee;
  string private i_lowImageURI;
  string private i_highImageURI;
  mapping(uint256 => int256) public s_tokenIdToHighValue;

  // Events
  event NftRequest(uint256 indexed tokenId, address requester);

  constructor(
    uint256 mintFee,
    string memory lowSvg,
    string memory highSvg,
    address priceFeedAddress
  ) ERC721("Dynamic SVG NFT", "DSN") {
    i_mintFee = mintFee;
    i_lowImageURI = svgToImageURI(lowSvg);
    i_highImageURI = svgToImageURI(highSvg);
    i_priceFeed = AggregatorV3Interface(priceFeedAddress);
  }

  function requestNft(int256 highValue) external payable {
    if (msg.value < i_mintFee) {
      revert DynamicSvgNft__EthNotEnough();
    }
    uint256 newTokenId = s_tokenCounter;
    s_tokenIdToHighValue[newTokenId] = highValue;
    // best practices = update the counter before minting the nft
    s_tokenCounter += s_tokenCounter;
    _safeMint(msg.sender, newTokenId);
    // _setTokenURI(newTokenId, s_dogTokenUris[uint256(breed)]);
    // emit NftMinted(breed, dogOwner);
    emit NftRequest(newTokenId, msg.sender);
  }

  function svgToImageURI(string memory svg) public pure returns (string memory) {
    string memory base64EncodedSvg = Base64.encode(bytes(string(abi.encodePacked(svg))));
    return string(abi.encodePacked(BASE64_ENCODED_SVG_PREFIX, base64EncodedSvg));
  }

  function _baseURI() internal pure override returns (string memory) {
    return "data:appplication/json;base64,";
  }

  /**
   * Returns a Base64 version encoded of the JSON NFT Metadata
   */
  function tokenURI(uint256 tokenId) public view override returns (string memory) {
    if (!_exists(tokenId)) {
      revert DynamicSvgNft__URI_QueryFor__NonExistentToken();
    }

    (, int256 price, , , ) = i_priceFeed.latestRoundData();
    string memory imageURI = i_lowImageURI;
    if (price >= s_tokenIdToHighValue[tokenId]) {
      imageURI = i_highImageURI;
    }

    return
      string(
        abi.encodePacked(
          _baseURI(),
          Base64.encode(
            bytes(
              abi.encodePacked(
                '{"name":"',
                name(), // You can add whatever name here
                '", "description":"An NFT that changes based on the Chainlink Feed", ',
                '"attributes": [{"trait_type": "coolness", "value": 100}], "image":"',
                imageURI,
                '"}'
              )
            )
          )
        )
      );
  }

  function withdraw() public onlyOwner {
    (bool success, ) = owner().call{value: address(this).balance}("");
    if (!success) {
      revert DynamicSvgNft__TransferFailed();
    }
  }

  function getTokenCounter() public view returns (uint256) {
    return s_tokenCounter;
  }

  function getMintFee() public view returns (uint256) {
    return i_mintFee;
  }
}
