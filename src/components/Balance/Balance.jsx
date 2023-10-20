import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './balance.css';
import LineDemo from '../Chart/Chart';

const Balance = () => {
  const monthlyBalance = useSelector((state) => state.accounts.total);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;

   
    if (/^\d*\.?\d*$/.test(value)) {
      setInputValue(value);
  };
}

  return (
    <div className='balances'>
      <h2>Initial Balance: {monthlyBalance}</h2>
      <div className='monthlyBalance'>
        <h2>Monthly Payment: </h2>
        <input
          placeholder='Monthly Payment'
          type='text'
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <hr />
      <div className='chart'>
      <h3>Balance of accounts after a number of Months</h3>
      {
        inputValue && <LineDemo inputValue={inputValue} monthlyBalance={monthlyBalance} />
      }

      </div>
      
      
    </div>
  );
};

export default Balance;
