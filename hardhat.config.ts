import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";
import "@nomicfoundation/hardhat-foundry";

const dotenvConfigPath: string = process.env.DOTENV_CONFIG_PATH || "./.env";
dotenvConfig({ path: resolve(__dirname, dotenvConfigPath) });

const ALCHEMY_API_KEY = "";
const SEPOLIA_PRIVATE_KEY = "";
const config: HardhatUserConfig = {
  solidity: "0.8.18",
  typechain: {
    outDir: "types",
    target: "ethers-v6",
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
      gas: 2100000,
      gasPrice: 8000000000,
    }
  }
};

export default config;
