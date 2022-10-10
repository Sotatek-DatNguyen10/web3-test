const Web3 = require("web3");
const ERC20_ABI = require("../ERC20.json");
const PROVIDER = "https://goerli.infura.io/v3/6e1cfdf691e144b1a7b06d0721433639";

(async () => {
  const web3 = new Web3(PROVIDER);

  const wethContract = new web3.eth.Contract(
    ERC20_ABI,
    "0x9da687e88b0A807e57f1913bCD31D56c49C872c2"
  );

  const balanceOfAcc = await wethContract.methods.owner().call();
  console.log(balanceOfAcc);
})();
