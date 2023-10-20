import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./balance.css";
import LineDemo from "../Chart/Chart";

const Balance = () => {
  const monthlyBalance = useSelector((state) => state.accounts.total);
  const [inputValue, setInputValue] = useState("");
  const [debouncedInputValue, setDebouncedInputValue] = useState(inputValue);

  const delay = 300;

  let timer;

  const handleInputChange = (e) => {
    const value = e.target.value;

    clearTimeout(timer);

    setInputValue(value);

    timer = setTimeout(() => {
      setDebouncedInputValue(value);
    }, delay);
  };

  return (
    <div className="balances">
      <h1>Balances</h1>
      <h2>Initial Balance: {monthlyBalance}</h2>
      <div className="monthlyBalance">
        <h2>Monthly Payment: </h2>
        <input
          placeholder="Monthly Payment"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <hr />
      <div className="chart">
        <h3>Balance of accounts after a number of Months</h3>
        {debouncedInputValue && (
          <LineDemo
            inputValue={debouncedInputValue}
            monthlyBalance={monthlyBalance}
          />
        )}
      </div>
    </div>
  );
};

export default Balance;
