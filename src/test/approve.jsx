const Web3 = require("web3");
const ERC20_ABI = require("../ERC20.json");
const PROVIDER = "https://data-seed-prebsc-1-s1.binance.org:8545"; // bsc testnet

const approve = async (account, amount) => {
  const web3 = new Web3(PROVIDER);
  const ABCContract = new web3.eth.Contract(
    ERC20_ABI,
    "0x2518EA4cAee40C54CAfA1c393ae4b56Bcf7cAcBE" //token contract
  );
  const amountOfToken = await ABCContract.methods
    .approve(account, amount)
    .send();
  return amountOfToken;
};

export default approve;
