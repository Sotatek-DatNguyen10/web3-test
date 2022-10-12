const Web3 = require("web3");
const ERC20_ABI = require("../ERC20.json");
const PROVIDER = "https://data-seed-prebsc-1-s1.binance.org:8545"; // bsc testnet

const Allowance = async () => {
  const web3 = new Web3(PROVIDER);
  const ABCContract = new web3.eth.Contract(
    ERC20_ABI,
    "0x2518EA4cAee40C54CAfA1c393ae4b56Bcf7cAcBE" //token contract
  );
  const allowance = await ABCContract.methods
    .allowance(
      "0x33e0902c65c7f3fe4b33407ec7172f0842fd2d65",
      "0xf0c54801e775d83196b50067103d136682d37e3f"
    )
    .call();
  return allowance;
};

export default Allowance;
