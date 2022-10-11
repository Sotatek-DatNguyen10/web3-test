const Web3 = require("web3");
const ERC20_ABI = require("../ERC20.json");
const PROVIDER = "https://data-seed-prebsc-1-s1.binance.org:8545";

const getBalance = async (account) => {
  const web3 = new Web3(PROVIDER);
  const ABCContract = new web3.eth.Contract(
    ERC20_ABI,
    "0x2518EA4cAee40C54CAfA1c393ae4b56Bcf7cAcBE"
  );

  const decimals = await ABCContract.methods.decimals().call();
  const balanceOf =
    (await ABCContract.methods.balanceOf(account).call()) / 10 ** decimals;
  return balanceOf;
};

export default getBalance();
