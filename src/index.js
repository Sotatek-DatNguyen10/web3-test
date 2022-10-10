import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Web3ReactProvider, createWeb3ReactRoot } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider, connector) {
  const library = new Web3Provider(provider);
  return library;
}

const Web3ProviderNetwork = createWeb3ReactRoot("NETWORK");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <App />
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  </React.StrictMode>
);
