import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import { developmentChains } from "../helper-hardhat-config"

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /**
   * @dev Read more at https://docs.chain.link/docs/chainlink-vrf/
   */
  const BASE_FEE = "100000000000000000"
  const GAS_PRICE_LINK = "1000000000" // 0.000000001 LINK per gas

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
    log("Mocks deployed!")
    log(`----------------------------------------------------`)
    log(`You are deploying to a local network, you'll need a local network running to interact`)
    log("Please run `yarn hardhat console` to interact with the deployed smart contracts!")
    log(`----------------------------------------------------`)
  }
}
export default func
func.tags = ["all", "mocks"]
