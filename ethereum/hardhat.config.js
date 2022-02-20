require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/hspI2Zy-fhwsgNxheZOHXfOy5_B2db39",
      accounts: [
        `0x5a03502ff4eeddba85a7a7ca35e64c1ad34c78024ccaaa422ee89f7ad3809aac`,
      ],
    },
  },
};