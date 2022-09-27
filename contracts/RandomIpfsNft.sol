// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

// when we mint an NFT, we will trigger a Chainlink VRF call to get us a random number
// using that number, we will get a random NFT
// Rarity as well

// users have to pay to mint an NFT
// the owner of the contract can withdraw the ETh - paying the artist

error RandomIpfsNft__RangeOutOfBounds();
error RandomIpfsNft__EthNotEnough();
error RandomIpfsNft__TransferFailed();

contract RandomIpfsNft is VRFConsumerBaseV2, ERC721URIStorage {
  // Type Declaration
  enum Breed {
    PUG,
    SHIBA_INU,
    ST_BERNARD
  }

  uint32 internal constant NUM_WORDS = 1;
  uint16 internal constant REQUEST_CONFIRMATIONS = 2;
  uint256 internal constant MAX_CHANCE_VALUE = 100;

  VRFCoordinatorV2Interface immutable i_COORDINATOR;
  address immutable i_owner;
  uint64 immutable i_subscriptionId;
  bytes32 immutable i_keyHash;
  uint32 immutable i_callbackGasLimit;

  uint256[] public s_randomWords;
  uint256 public s_requestId;

  // VRF helper
  // We need to map the request_id to the sender address
  // Since the chainlink nodes are the ones that call
  // fullfillRandomWords, and thus the sender adress
  // will be the chainlink node
  mapping(uint256 => address) public s_requestIdToSender;

  // NFT variables
  uint256 private s_tokenCounter;
  string[3] private s_dogTokenUris;
  uint256 private immutable i_mintFee;

  // Events
  event NftRequest(uint256 indexed requestId, address requester);
  event NftMinted(Breed dogBreed, address minter);

  constructor(
    uint64 subscriptionId,
    address vrfCoordinatorV2,
    bytes32 keyHash,
    uint32 callbackGasLimit,
    string[3] memory dogTokenUris,
    uint256 mintFee
  ) VRFConsumerBaseV2(vrfCoordinatorV2) ERC721("Random IPFS NFT", "RIN") {
    i_COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinatorV2);
    i_owner = payable(msg.sender);
    i_subscriptionId = subscriptionId;
    i_keyHash = keyHash;
    i_callbackGasLimit = callbackGasLimit;
    s_dogTokenUris = dogTokenUris;
    i_mintFee = mintFee;
  }

  // Assumes the subscription is funded sufficiently.
  function requestNft() external payable {
    // we need to pay a fee
    if (msg.value < i_mintFee) {
      revert RandomIpfsNft__EthNotEnough();
    }
    // Will revert if subscription is not set and funded.
    s_requestId = i_COORDINATOR.requestRandomWords(
      i_keyHash,
      i_subscriptionId,
      REQUEST_CONFIRMATIONS,
      i_callbackGasLimit,
      NUM_WORDS
    );

    s_requestIdToSender[s_requestId] = msg.sender;
    emit NftRequest(s_requestId, msg.sender);
  }

  function fulfillRandomWords(uint256 requestId, uint256[] memory randomWords) internal override {
    address dogOwner = s_requestIdToSender[requestId];
    uint256 newTokenId = s_tokenCounter;
    _safeMint(dogOwner, newTokenId);

    // What does this NFT look like like?
    uint256 moddedRng = randomWords[0] % MAX_CHANCE_VALUE;
    // moddedRng will be between 0 - 99
    // 7 -> Pug
    // 88 -> St. Bernard
    // 12 -> Shiba Inu
    Breed breed = getBreedFromModdedRng(moddedRng);
    s_tokenCounter += s_tokenCounter;
    _setTokenURI(newTokenId, s_dogTokenUris[uint256(breed)]);
    emit NftMinted(breed, dogOwner);
  }

  function getBreedFromModdedRng(uint256 moddedRng) private pure returns (Breed) {
    uint256 cumulativeSum = 0;
    uint256[3] memory chanceArray = getChanceArray();
    for (uint256 i = 0; i < chanceArray.length; i++) {
      // Pug = 0 - 9  (10%)
      // Shiba-inu = 10 - 39  (30%)
      // St. Bernard = 40 = 99 (60%)
      if (moddedRng >= cumulativeSum && moddedRng < chanceArray[i]) {
        return Breed(i);
      }
      cumulativeSum = chanceArray[i];
    }
    revert RandomIpfsNft__RangeOutOfBounds();
  }

  function withdraw() public onlyOwner {
    (bool success, ) = i_owner.call{value: address(this).balance}("");
    if (!success) {
      revert RandomIpfsNft__TransferFailed();
    }
  }

  // getters
  function getChanceArray() private pure returns (uint256[3] memory) {
    return [10, 30, MAX_CHANCE_VALUE];
  }

  function getDogTokenUris() public view returns (string[3] memory) {
    return s_dogTokenUris;
  }

  function getTokenCounter() public view returns (uint256) {
    return s_tokenCounter;
  }

  function getMintFee() public view returns (uint256) {
    return i_mintFee;
  }

  function getRequestIdToSender(uint256 index) public view returns (address) {
    return s_requestIdToSender[index];
  }

  modifier onlyOwner() {
    require(msg.sender == i_owner);
    _;
  }
}
