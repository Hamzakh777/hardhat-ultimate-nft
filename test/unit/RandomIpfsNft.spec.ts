import { assert, expect } from "chai"
import { BigNumber } from "ethers"
import { deployments, ethers, getChainId, getNamedAccounts, network } from "hardhat"
import { developmentChains, networkConfig } from "../../helper-hardhat-config"
import { RandomIpfsNft, VRFCoordinatorV2Mock } from "../../typechain"
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs"
import { Address } from "hardhat-deploy/types"
import { before } from "mocha"

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("RandomIpfsNft", () => {
      let randomIpfsNft: RandomIpfsNft
      let vrfCoordinatorV2Mock: VRFCoordinatorV2Mock
      let deployer: Address

      beforeEach(async () => {
        deployer = (await getNamedAccounts()).deployer
        await deployments.fixture(["all"])
        randomIpfsNft = await ethers.getContract("RandomIpfsNft")
        vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock")
      })

      describe("Constructor", () => {
        it("Should initialize the contract correctly", async () => {
          const mintFee = await randomIpfsNft.getMintFee()
          const dogTokenUris = await randomIpfsNft.getDogTokenUris()
          const tokenCounter = await randomIpfsNft.getTokenCounter()
          const chainId = await getChainId()
          assert.equal(mintFee.toString(), networkConfig[chainId].mintFee)
          assert.isArray(dogTokenUris)
          assert.equal(tokenCounter.toString(), "0")
        })
      })

      describe("requestNft", () => {
        it("Should fail if the user doesn't send enough eth", async () => {
          const { deployer } = await getNamedAccounts()
          const chainId = await getChainId()
          const { mintFee } = networkConfig[chainId]
          const tx = randomIpfsNft.requestNft({
            value: BigNumber.from(mintFee).sub(6),
            from: deployer,
          })
          await expect(tx).to.be.revertedWithCustomError(
            randomIpfsNft,
            "RandomIpfsNft__EthNotEnough"
          )
        })

        it("Should emit NftRequest event when called succesfully", async () => {
          const { deployer } = await getNamedAccounts()
          const chainId = await getChainId()
          const { mintFee } = networkConfig[chainId]
          const tx = randomIpfsNft.requestNft({
            value: BigNumber.from(mintFee),
            from: deployer,
          })
          await expect(tx).to.emit(randomIpfsNft, "NftRequest")
        })

        it("Should update the requestId to user address list", async () => {})
      })

      describe("fulfillRandomWords", () => {
        it("Should allow a user to mint a token", async () => {
          const chainId = await getChainId()
          const { mintFee } = networkConfig[chainId]

          // We will have to wait for fulfillRandomWords to be called
          await new Promise(async (res, rej) => {
            randomIpfsNft.once("NftMinted", async () => {
              console.log("Event Found - Nft minted")
              try {
                const tokenCounter = await randomIpfsNft.getTokenCounter()
                const mintedNftUri = await randomIpfsNft.tokenURI(tokenCounter)
                assert.equal(tokenCounter.toString(), "0")
                assert(mintedNftUri)
                res(mintedNftUri)
              } catch (error) {
                rej(error)
              }
            })
            try {
              // emit an event
              const tx = await randomIpfsNft.requestNft({
                value: BigNumber.from(mintFee),
              })
              const txReceipt = await tx.wait(1)
              if (txReceipt.events) {
                const tx = await vrfCoordinatorV2Mock.fulfillRandomWords(
                  txReceipt.events[1].args?.requestId,
                  randomIpfsNft.address
                )
                await tx.wait(1)
              } else {
                rej("No events emitted")
              }
            } catch (error) {
              rej(error)
            }
          })
        })
      })

      describe("withdraw", () => {
        let feeCollector: Address
        let minterRandomIpfsNft: RandomIpfsNft

        beforeEach(async () => {
          feeCollector = (await getNamedAccounts()).feeCollector
          const chainId = await getChainId()
          const { mintFee } = networkConfig[chainId]
          const signer = await ethers.getSigner(feeCollector)
          minterRandomIpfsNft = await randomIpfsNft.connect(signer)
          await minterRandomIpfsNft.requestNft({
            value: BigNumber.from(mintFee),
            from: feeCollector,
          })
        })

        it("Should revert if not called by the contract owner", async () => {
          const withdrawTx = minterRandomIpfsNft.withdraw()
          await expect(withdrawTx).to.be.reverted
        })

        it("Should allow the contract owner to withdraw funds", async () => {
          const initialBalance = await randomIpfsNft.provider.getBalance(randomIpfsNft.address)
          const deployerInitialBalance = await randomIpfsNft.provider.getBalance(deployer)
          const withdrawTx = await randomIpfsNft.withdraw()
          const withdrawTxReceipt = await withdrawTx.wait(1)
          const finalBalance = await randomIpfsNft.provider.getBalance(randomIpfsNft.address)
          const deployerFinalBalance = await randomIpfsNft.provider.getBalance(deployer)
          assert.equal(finalBalance.toString(), "0")
          assert.equal(
            deployerFinalBalance.toString(),
            deployerInitialBalance
              .add(initialBalance)
              .sub(withdrawTxReceipt.gasUsed.mul(withdrawTxReceipt.effectiveGasPrice))
              .toString()
          )
        })
      })
    })
