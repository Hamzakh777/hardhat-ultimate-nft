import { assert, expect } from "chai"
import { deployments, ethers, network } from "hardhat"
import { developmentChains } from "../../helper-hardhat-config"
import { BasicNft } from "../../typechain"

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("BasicNft", () => {
      let basicNft: BasicNft

      beforeEach(async () => {
        await deployments.fixture("all")
        basicNft = await ethers.getContract("BasicNft")
      })

      it("Should initilize the NFT correctly", async () => {
        const name = await basicNft.name()
        const symbol = await basicNft.symbol()
        const tokenCounter = await basicNft.getTokenCounter()

        expect(name).equal("Dogie")
        expect(symbol).equal("DOG")
        expect(tokenCounter.toString()).equal("0")
      })

      it("Should mint an NFT", async () => {
        await basicNft.mintNft()
        const tokenCounter = await basicNft.getTokenCounter()
        expect(tokenCounter.toString()).equal("1")
      })

      it("Should get the tokenURI for the NFT", async () => {
        const tokenURI = await basicNft.tokenURI(0)
        assert(tokenURI)
      })

      it("Should get the tokenCounter", async () => {
        const tokenCounter = await basicNft.getTokenCounter()
        expect(tokenCounter.toString()).equal("0")
      })
    })
