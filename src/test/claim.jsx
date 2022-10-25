const Web3 = require("web3");
const ethereum = require("ethers");
const CONTRACT_ABI = require("../ContractABI.json");
const PROVIDER = "https://data-seed-prebsc-1-s1.binance.org:8545";

const claim = async () => {
  const web3 = new Web3(Web3.givenProvider);
  const ABCContract = await new web3.eth.Contract(
    CONTRACT_ABI,
    "0xF0c54801E775D83196b50067103D136682d37e3f"
  );

  await ABCContract.methods
    .claim()
    .send({
      from: "0x33E0902c65c7f3fe4b33407ec7172f0842fd2d65",
    })
    .then((value) => {
      if (value != null) alert("done");
      else alert("fail");
    });
};

export default claim;
