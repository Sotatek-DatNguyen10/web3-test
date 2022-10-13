import React from "react";
import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import withdraw from "../test/withdraw";
const PopUpWithdraw = (props) => {
  const [amount, setAmount] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const { account } = useWeb3React();

  useEffect(() => {});

  const handleWithdraw = async () => {
    await setIsSuccess((await withdraw(account, amount)) > 0 ? true : false);
    // const a = await withdraw(account, amount);
    // console.log(typeof a);
    console.log(isSuccess);
  };

  return (
    <div className="w-1/4 h-1/4 flex flex-col absolute mt-24 ml-32 items-center rounded-2xl bg-orange-500">
      <h1>Stake</h1>
      <input
        type={"number"}
        className="w-7/10 h-fit rounded-2xl"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      ></input>
      <h1>Your ABC deposited: {props.deposited}</h1>
      <button
        type={"submit"}
        className="flex flex-row justify-center items-center w-1/2 my-5 mf-5 bg-gray-500 p-3 rounded-xl cursor-pointer hover:bg-gray-400"
        onClick={handleWithdraw}
      >
        Withdraw
      </button>
    </div>
  );
};

export default PopUpWithdraw;
