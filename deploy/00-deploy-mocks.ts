import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import { developmentChains, DECIMALS, INITIAL_PRICE } from "../helper-hardhat-config"

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /**
   * @dev Read more at https://docs.chain.link/docs/chainlink-vrf/
   */
   const BASE_FEE = "250000000000000000" // 0.25 is this the premium in LINK?
   const GAS_PRICE_LINK = 1e9 // link per gas, is this the gas lane? // 0.000000001 LINK per gas

  const {
    deployments: { deploy, log },
    getNamedAccounts,
    network: { name: networkName },
  } = hre
  const { deployer } = await getNamedAccounts()

  // only deploy if we are running it locally
  if (developmentChains.includes(networkName)) {
    log("Local network detected! Deploying mocks...")
    await deploy("VRFCoordinatorV2Mock", {
      from: deployer,
      log: true,
      args: [BASE_FEE, GAS_PRICE_LINK],
    })
    await deploy("MockV3Aggregator", {
      from: deployer,
      log: true,
      args: [DECIMALS, INITIAL_PRICE],
    })
    log("Mocks deployed!")
    log(`----------------------------------------------------`)
    log(`You are deploying to a local network, you'll need a local network running to interact`)
    log("Please run `yarn hardhat console` to interact with the deployed smart contracts!")
    log(`----------------------------------------------------`)
  }
}
export default func
func.tags = ["all", "mocks"]
