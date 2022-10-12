const Web3 = require("web3");
const CONTRACT_ABI = require("../ContractABI.json");
const PROVIDER = "https://data-seed-prebsc-1-s1.binance.org:8545";

const getUserInfo = async (account) => {
  const web3 = new Web3(PROVIDER);
  const ABCContract = new web3.eth.Contract(
    CONTRACT_ABI,
    "0xF0c54801E775D83196b50067103D136682d37e3f"
  );

  const userInfo = await ABCContract.methods.userInfo(account).call();

  return userInfo.amount;
};

export default getUserInfo;
