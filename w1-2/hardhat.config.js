require("@nomicfoundation/hardhat-toolbox");

const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();


task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.2",
  networks: {
    development: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/a1gKGQT-sc4jGCHmBaKOQhu8_NudKxe5',
      accounts: {
        mnemonic: mnemonic,
      }
    },
    mumbai: {
      url: "https://endpoints.omniatech.io/v1/matic/mumbai/public",
      accounts: {
        mnemonic: mnemonic,
      },
      chainId: 80001,
    },

  },
  etherscan: {
    apiKey: {
      polygonMumbai: "W8CRS9MZFZ66GHTMBTAPPZAI3Z6A9XPQQ1"
    }
},
};
