import { Address, DeployFunction } from "hardhat-deploy/types"
import { ethers } from "hardhat"
import {
  developmentChains,
  networkConfig,
  VERIFICATION_BLOCK_CONFIRMATIONS,
} from "../helper-hardhat-config"
import { verify } from "../helper-functions"
import { VRFCoordinatorV2Interface, VRFCoordinatorV2Mock } from "../typechain"
import { BigNumber } from "ethers"
import { MetaData, storeImagesInPinata, storeTokenMetadataInPinata } from "../utils/uploadToPinata"

const IMAGES_LOCATION = "./assets/images/randomNft"
const VRF_SUB_FUND_AMOUNT = ethers.utils.parseEther("3000")

const deployFunction: DeployFunction = async ({ getNamedAccounts, deployments, network }) => {
  const { deploy, log } = deployments
  const { name: networkName } = network

  const { deployer } = await getNamedAccounts()
  const chainId: number | undefined = network.config.chainId
  if (!chainId) return

  // get the IPFS hashes of our images
  let tokenUris: string[] = [
    "ipfs://QmNddFsneWThscVTyaTPWoiYAe5X462TSq27Bg2NX6HeWh",
    "ipfs://QmNqYUNjjRDXU4KN1cLA5pUgJ3V4cEVR7VWwDtCh8Awwue",
    "ipfs://Qme7UtrSEuizrnR2wjf2wCmh7YradDvsFicn5ozMrxzc6M",
  ]
  if (process.env.UPLOAD_TO_PANATA === "true") {
    log("Uploading to Pinata")
    tokenUris = await handleTokenUris()
    log("Uploading to Pinata is done!")
    console.log(tokenUris)
  }
  // 1. With our own IPFS node.
  // 2. Pinata
  // 3. NFT.storage - uses fileCoin

  const waitBlockConfirmations: number = developmentChains.includes(network.name)
    ? 1
    : VERIFICATION_BLOCK_CONFIRMATIONS
  log(`----------------------------------------------------`)
  let vrfCoordinatorV2Address: Address
  let subscriptionId: BigNumber
  const { keyHash, callbackGasLimit, mintFee } = networkConfig[chainId]

  if (developmentChains.includes(networkName)) {
    const vrfCoordinatorV2Mock = await ethers.getContract<VRFCoordinatorV2Mock>(
      "VRFCoordinatorV2Mock"
    )
    vrfCoordinatorV2Address = vrfCoordinatorV2Mock.address
    const transactionResponse = await vrfCoordinatorV2Mock.createSubscription()
    const transactionReceipt = await transactionResponse.wait(1)
    subscriptionId = transactionReceipt.events && transactionReceipt.events[0].args?.subId
    // Fund the subscription
    await vrfCoordinatorV2Mock.fundSubscription(subscriptionId, VRF_SUB_FUND_AMOUNT)
  } else {
    if (networkConfig[chainId].subscriptionId !== undefined) {
      subscriptionId = networkConfig[chainId].subscriptionId as BigNumber
    } else {
      log("No Subscription ID found")
      return
    }

    if (networkConfig[chainId].vrfCoordinator !== undefined) {
      vrfCoordinatorV2Address = networkConfig[chainId].vrfCoordinator as Address
    } else {
      log("No VRFCoordinatorV2 found")
      return
    }
  }

  const randomIpfsNft = await deploy("RandomIpfsNft", {
    from: deployer,
    log: true,
    waitConfirmations: waitBlockConfirmations,
    args: [subscriptionId, vrfCoordinatorV2Address, keyHash, callbackGasLimit, tokenUris, mintFee],
  })

  // Verify the deployment
  if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    log("Verifying...")
    await verify(randomIpfsNft.address, [])
  }

  log("RandomIpfsNft Deployed!")
  log("----------------------------------------------------")
}

async function handleTokenUris(): Promise<string[]> {
  const tokenUris: string[] = []
  // store the Images in IPFS
  const { files, responses: imageUploadResponses } = await storeImagesInPinata(IMAGES_LOCATION)
  // Store the metadata in IPFS
  console.log("Saving the metadata....")
  for (const i in imageUploadResponses) {
    const name = files[i].replace(".png", "")
    const description = `An adorable ${name}`
    const imageIpfsHash = `ipfs://${imageUploadResponses[i].IpfsHash}`
    const tokenUriMetadata: MetaData = {
      name,
      description,
      image: imageIpfsHash,
      attributes: [{ trait_type: "Cuteness", value: 100 }],
    }
    const metadataUploadResponse = await storeTokenMetadataInPinata(tokenUriMetadata)
    if (metadataUploadResponse?.IpfsHash)
      tokenUris.push(`ipfs://${metadataUploadResponse?.IpfsHash}`)
  }
  return tokenUris
}

export default deployFunction
deployFunction.tags = [`all`, `randomIpfsNft`]
