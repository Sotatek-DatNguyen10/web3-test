const Web3 = require("web3");
const ERC20_ABI = require("../ERC20.json");
const PROVIDER = "https://data-seed-prebsc-1-s1.binance.org:8545"; // bsc testnet

const approve = async (account, spender, amount) => {
  const web3 = new Web3(Web3.givenProvider);
  const ABCContract = new web3.eth.Contract(
    ERC20_ABI,
    "0x2518EA4cAee40C54CAfA1c393ae4b56Bcf7cAcBE" //token contract
  );

  // web3.eth.accounts.wallet.add(
  //   "2a9e33616f6220453ee81c8228e45ef5c06f6278997bc9a1ee4e3b4c93087b97" // wallet private key
  // );

  const estimateGas = await ABCContract.methods
    .approve(spender, amount)
    .estimateGas({
      from: account,
    });

  const rs = await ABCContract.methods
    .approve(spender, amount)
    .send({ from: account, gas: estimateGas })
    .then((value) => {
      if (value != null) alert("done");
      else alert("fail");
    });
  return rs.blockNumber;
};

// (async () => {
//   console.log(
//     await approve(
//       "0x33E0902c65c7f3fe4b33407ec7172f0842fd2d65",
//       "0xF0c54801E775D83196b50067103D136682d37e3f",
//       "862153675376251"
//     )
//   );
// })();

export default approve;
