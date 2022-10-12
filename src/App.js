import "./App.css";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { useEffect, useState } from "react";

import Main from "./components/Main";
const WALLETCONNECT_BRIDGE_URL = "https://bridge.walletconnect.org";

const INFURA_KEY = "6e1cfdf691e144b1a7b06d0721433639";

const NETWORK_URLS = {
  1: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  3: `https://ropsten.infura.io/v3/${INFURA_KEY}`,
  11155111: `https://sepolia.infura.io/v3/${INFURA_KEY}`,
  5: `https://goerli.infura.io/v3/${INFURA_KEY}`,
  97: "https://data-seed-prebsc-1-s1.binance.org:8545",
};

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 11155111, 5, 97],
});

const wallet = new WalletConnectConnector({
  supportedChainIds: [1, 3, 11155111, 5, 97],
  rpc: NETWORK_URLS,
  bridge: WALLETCONNECT_BRIDGE_URL,
  qrcode: true,
});

function App() {
  const { account, chainId, connector, activate } = useWeb3React();
  const [condition, setCondition] = useState(true);

  const connectInjectedConnector = () => {
    activate(injected);
  };

  const connectWalletConnector = () => {
    activate(wallet, undefined, true).catch((e) => console.log("ee: ", e));
  };

  useEffect(() => {
    activate(injected);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      {account == null && (
        <button
          type="button"
          className="flex flex-row justify-center items-center w-1/2 my-5 mf-5 bg-gray-500 p-3 rounded-xl cursor-pointer hover:bg-gray-400"
          onClick={connectInjectedConnector}
        >
          Connect Metamask
        </button>
      )}
      {account == null && (
        <button
          type="button"
          className="flex flex-row justify-center items-center w-1/2 my-5 mf-5 bg-gray-500 p-3 rounded-xl cursor-pointer hover:bg-gray-400"
          onClick={connectWalletConnector}
        >
          Connect Wallet
        </button>
      )}

      {account && (
        <Main
          account={account}
          connectInjectedConnector={connectInjectedConnector}
        ></Main>
      )}
    </div>
  );
}

export default App;
