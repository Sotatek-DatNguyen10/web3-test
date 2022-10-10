const Web3 = require("web3");

const PROVIDER = "https://goerli.infura.io/v3/6e1cfdf691e144b1a7b06d0721433639";

(async () => {
  const web3 = new Web3(PROVIDER);

  const transaction = await web3.eth.getTransaction(
    "0x70908c778bb362878cd79d9596643972ea638a113505b9cf35fe75688c46d5d4"
  );
  console.log(transaction);
})();
