const Web3 = require("web3");
const CONTRACT_ABI = require("../ContractABI.json");
const PROVIDER = "https://data-seed-prebsc-1-s1.binance.org:8545";

const deposit = async (account, amount) => {
  const web3 = new Web3(PROVIDER);
  const ABCContract = new web3.eth.Contract(
    CONTRACT_ABI,
    "0xF0c54801E775D83196b50067103D136682d37e3f"
  );
  web3.eth.accounts.wallet.add(
    "2a9e33616f6220453ee81c8228e45ef5c06f6278997bc9a1ee4e3b4c93087b97" // wallet private key
  );

  const estimateGas = await ABCContract.methods.deposit(amount).estimateGas({
    from: account,
  });

  const rs = await ABCContract.methods.deposit(amount).send({
    from: account,
    gas: estimateGas * 2,
  });
  // .then((value) => {
  //   if (value != null) return true;
  //   else return false;
  // });
  return rs.blockNumber;
};

// (async () => {
//   console.log(
//     await deposit(
//       "0x33E0902c65c7f3fe4b33407ec7172f0842fd2d65",
//       "49983520354686"
//     )
//   );
// })();

export default deposit;
