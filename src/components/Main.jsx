import React from "react";
import ApproveButton from "./ApproveButton";
import { useEffect, useState } from "react";
import getBalance from "../test/getBalance.js";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-black";

function Main(props) {
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    (async () => {
      setBalance(await getBalance(props.account));
    })();
  }, []);

  setTimeout(() => {
    console.log("balance: ", balance);
  }, 10000);
  return (
    <div className="flex border-2 m-4 h-full w-full bg-white">
      <div className="flex border-4 border-black m-5 w-1/2 h-full bg-white  ">
        <div className="flex flex-col bg-white w-1/2 m-5">
          <h1 className="truncate text-xl w-1/2">
            Wallet addr: {props.account}
          </h1>
          <h1 className="truncate text-xl w-1/2">
            Token earned: {props.account}
          </h1>
          <button
            type="button"
            onClick={() => {}}
            className="flex flex-row justify-center items-center w-1/2 my-5 mf-5 bg-gray-500 p-3 rounded-xl cursor-pointer hover:bg-gray-400"
          >
            getBalance
          </button>
          <h1 className="truncate text-xl w-1/2">
            Your stake: {props.account}
          </h1>
          <h1 className="truncate text-xl w-1/2">
            Total stake: {props.account}
          </h1>
        </div>
        <div className="flex flex-col bg-white w-1/2 m-5">
          <h1 className="text-xl  w-full">Balance: {balance} ABC</h1>
          <button
            type="button"
            className="bg-gray-400 rounded-full w-1/2 flex justify-center items-center"
          >
            Harvest
          </button>
          <button
            type="button"
            className="flex flex-row justify-center items-center w-1/2 my-5 mf-5 bg-gray-500 p-3 rounded-xl cursor-pointer hover:bg-gray-400"
            onClick={() => {}}
          >
            Connect Metamask
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col border-solid border-3 w-1/2 h-full bg-white ">
        <p1>History of Account</p1>
        <ApproveButton />
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

export default Main;
