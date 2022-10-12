const Web3 = require("web3");

const PROVIDER = "https://goerli.infura.io/v3/6e1cfdf691e144b1a7b06d0721433639";

(async () => {
  const web3 = new Web3(PROVIDER);

  const ethbalance = await web3.eth.getBalance(
    "0x33E0902c65c7f3fe4b33407ec7172f0842fd2d65"
  );

  console.log(web3.utils.fromWei(ethbalance));
  // return web3.utils.fromWei(ethbalance);
})();

// export default getBalance;
