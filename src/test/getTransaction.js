const Web3 = require("web3");

const PROVIDER = "https://goerli.infura.io/v3/6e1cfdf691e144b1a7b06d0721433639";

(async () => {
  const web3 = new Web3(PROVIDER);

  const transaction = await web3.eth.getTransaction(
    "0x5b350fc406df7c5f39dcdf78f5e60cb7a2a5666019466489080fed70c7cb3162"
  );
  console.log(transaction);
})();
