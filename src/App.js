import "./App.css";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import ApproveButton from "./components/ApproveButton";
import { useEffect, useState } from "react";
import getBalance from "./test/getBalance";
const WALLETCONNECT_BRIDGE_URL = "https://bridge.walletconnect.org";

const INFURA_KEY = "6e1cfdf691e144b1a7b06d0721433639";

const NETWORK_URLS = {
  1: `hhtps://mainnet.infura.io/v3/${INFURA_KEY}`,
  4: `hhtps://mainnet.infura.io/v3/${INFURA_KEY}`,
  5: `hhtps://mainnet.infura.io/v3/${INFURA_KEY}`,
};

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-black";

const injected = new InjectedConnector({
  supportedChainIds: [1, 4, 5],
});

const wallet = new WalletConnectConnector({
  supportedChainIds: [1, 3, 5],
  rpc: NETWORK_URLS,
  bridge: WALLETCONNECT_BRIDGE_URL,
  qrcode: true,
});

function App() {
  const [isConnect, setIsConnect] = useState(true);

  const { account, chainId, connector, activate } = useWeb3React();

  const connectInjectedConnector = () => {
    activate(injected);
  };

  const connectWalletConnector = () => {
    activate(wallet);
  };

  const [ethBalance, setEthBalance] = useState(0);

  const handleGet = async () => {
    const tmp = await getBalance();
    setEthBalance(tmp);
  };

  return (
    <div className="flex border-2 m-4 h-full w-full bg-white">
      <h1>{ethBalance}</h1>
      <div className="flex border-4 border-black m-5 w-1/2 h-full bg-white  ">
        <div className="flex flex-col bg-white w-1/2 m-5">
          <h1 className="truncate text-xl w-1/2">Wallet addr: {account}</h1>
          <h1 className="truncate text-xl w-1/2">Token earned: {account}</h1>
          <button
            type="button"
            onClick={handleGet}
            className="flex flex-row justify-center items-center w-1/2 my-5 mf-5 bg-gray-500 p-3 rounded-xl cursor-pointer hover:bg-gray-400"
          >
            getBalance
          </button>
          <h1 className="truncate text-xl w-1/2">Your stake: {account}</h1>
          <h1 className="truncate text-xl w-1/2">Total stake: {account}</h1>
        </div>
        <div className="flex flex-col bg-white w-1/2 m-5">
          <h1 className="text-xl  w-full">Balance: 5 ETH</h1>
          <button
            type="button"
            className="bg-gray-400 rounded-full w-1/2 flex justify-center items-center"
          >
            Harvest
          </button>
          <button
            type="button"
            className="flex flex-row justify-center items-center w-1/2 my-5 mf-5 bg-gray-500 p-3 rounded-xl cursor-pointer hover:bg-gray-400"
            onClick={connectInjectedConnector}
          >
            Connect Metamask
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col border-solid border-3 w-1/2 h-full bg-white ">
        <p1>History of Account</p1>
        {isConnect && <ApproveButton />}
        <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
          <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
            Reliability
          </div>
          <div className={companyCommonStyles}>Security</div>
          <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
            Ethereum
          </div>
          <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
            Web 3.0
          </div>
          <div className={companyCommonStyles}>Low Fees</div>
          <div className={`rounded-br-2xl ${companyCommonStyles}`}>
            Blockchain
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
