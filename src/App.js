import "./App.css";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import Main from "./components/Main";
const WALLETCONNECT_BRIDGE_URL = "https://bridge.walletconnect.org";

const INFURA_KEY = "6e1cfdf691e144b1a7b06d0721433639";

const NETWORK_URLS = {
  1: `hhtps://mainnet.infura.io/v3/${INFURA_KEY}`,
  4: `hhtps://mainnet.infura.io/v3/${INFURA_KEY}`,
  5: `hhtps://mainnet.infura.io/v3/${INFURA_KEY}`,
};

const injected = new InjectedConnector({
  supportedChainIds: [1, 4, 5],
});

const wallet = new WalletConnectConnector({
  supportedChainIds: [1, 4, 5],
  rpc: NETWORK_URLS,
  bridge: WALLETCONNECT_BRIDGE_URL,
  qrcode: true,
});

function App() {
  const { account, chainId, connector, activate } = useWeb3React();

  const connectInjectedConnector = () => {
    activate(injected);
  };

  const connectWalletConnector = () => {
    activate(wallet);
  };

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
