require("dotenv").config();
const { ethers } = require("ethers");

const contract = require("../artifacts/contracts/mabelParrot.sol/mabelParrot.json");
const contractInterface = contract.abi;

// https://docs.ethers.io/v5/api/providers
const provider = ethers.getDefaultProvider("ropsten", {
  alchemy:
    "https://eth-ropsten.alchemyapi.io/v2/hspI2Zy-fhwsgNxheZOHXfOy5_B2db39",
});

// https://docs.ethers.io/v5/api/signer/#Wallet
const wallet = new ethers.Wallet(
  "5a03502ff4eeddba85a7a7ca35e64c1ad34c78024ccaaa422ee89f7ad3809aac",
  provider,
);

//https://docs.ethers.io/v5/api/contract/contract
const mabelParrot = new ethers.Contract(
  "0xb22352e8034c1Ee83Dcd5Ee8f723DA38F49A60e9",
  contractInterface,
  wallet,
);

const main = () => {
  mabelParrot
    .mint("0xb22352e8034c1Ee83Dcd5Ee8f723DA38F49A60e9")
    .then((transaction) => console.log(transaction))
    .catch((e) => console.log("something went wrong", e));
};

main();
