const Web3 = require("web3");
const CONTRACT_ABI = require("../ContractABI.json");
const PROVIDER = "https://data-seed-prebsc-1-s1.binance.org:8545";

const deposit = async (account, amount) => {
  const web3 = new Web3(Web3.givenProvider);
  const ABCContract = new web3.eth.Contract(
    CONTRACT_ABI,
    "0xF0c54801E775D83196b50067103D136682d37e3f"
  );

  const estimateGas = await ABCContract.methods.deposit(amount).estimateGas({
    from: account,
  });

  const rs = await ABCContract.methods
    .deposit(amount)
    .send({
      from: account,
      gas: estimateGas * 2,
    })
    .then((value) => {
      if (value != null) alert("done");
      else alert("fail");
    });

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
