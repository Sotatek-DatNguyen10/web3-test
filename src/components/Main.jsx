import React from "react";
import ApproveButton from "./ApproveButton";
import { useEffect, useState } from "react";
import getBalance from "../test/getBalance.js";
import getPendingReward from "../test/getPendingReward";
import getAllowance from "../test/getAllowance";
import claim from "../test/claim";
import getUserInfo from "../test/getUserInfo";
import PopUpStake from "./PopUpStake";
import PopUpWithdraw from "./PopUpWithdraw";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-black";

function Main(props) {
  const [count, setCount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [allowance, setAllowance] = useState(0);
  const [pendingReward, setPendingReward] = useState(0);
  const [condition, setCondition] = useState(false);
  const [popUpStakeCondition, setPopUpStakeCondition] = useState(false);
  const [popUpWithdrawCondition, setPopUpWithdrawCondition] = useState(false);
  const [deposited, setDeposited] = useState(0);

  const handleClaim = async () => {
    await setCondition(await claim());
  };

  useEffect(() => {
    (async () => {
      setDeposited(await getUserInfo(props.account));
      setAllowance(await getAllowance(props.account));
      setBalance(await getBalance(props.account));
      setPendingReward(await getPendingReward(props.account));
    })();
  }, [count, props.account]);

  return (
    <div className="flex border-2 m-4 h-full w-full bg-white">
      <div className="flex border-4 border-black m-5 w-1/2 h-full bg-white  ">
        <div className="flex flex-col bg-white w-1/3 m-5">
          <h1 className="truncate text-xl w-full">
            Wallet addr: {props.account}
          </h1>
          <h1 className="truncate text-xl w-full">Total Stake: {deposited}</h1>
        </div>
        <div className="flex flex-col bg-white w-1/3 -ml-15 m-5">
          {/* <h1 className="text-xl full">Pending reward</h1> */}
          <div className={companyCommonStyles}>{pendingReward} ABC</div>
          <button
            type="button"
            className="flex flex-row justify-center items-center w-1/2 my-5 mf-5 bg-gray-500 p-3 rounded-xl cursor-pointer hover:bg-gray-400"
            onClick={handleClaim}
          >
            Claim
          </button>
          {condition && alert("successful")}
        </div>
        <div className="flex flex-col bg-white w-1/3 m-5">
          <h1 className="text-xl  w-full">Balance: {balance} ABC</h1>

          {allowance >= balance * 0.9 && (
            <button
              type="button"
              className="flex flex-row justify-center items-center w-1/2 my-5 mf-5 bg-gray-500 p-3 rounded-xl cursor-pointer hover:bg-gray-400"
              onClick={() => {
                setTimeout(() => {
                  setCount(count + 1);
                }, 5000);
                setPopUpStakeCondition(!popUpStakeCondition);
                setPopUpWithdrawCondition(false);
              }}
            >
              Deposit
            </button>
          )}
          {allowance >= balance * 0.9 && (
            <button
              type="button"
              className="flex flex-row justify-center items-center w-1/2 my-5 mf-5 bg-gray-500 p-3 rounded-xl cursor-pointer hover:bg-gray-400"
              onClick={() => {
                setTimeout(() => {
                  setCount(count + 1);
                }, 5000);
                setPopUpWithdrawCondition(!popUpWithdrawCondition);
                setPopUpStakeCondition(false);
              }}
            >
              Withdraw
            </button>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center flex-col border-solid border-3 w-1/2 h-full bg-white ">
        <p1>History of Account</p1>
        {allowance < balance * 0.9 && <ApproveButton />}
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
      {popUpStakeCondition && <PopUpStake balance={balance} />}
      {popUpWithdrawCondition && <PopUpWithdraw deposited={deposited} />}
    </div>
  );
}

export default Main;
