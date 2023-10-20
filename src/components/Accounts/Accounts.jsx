
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCount, addBalance } from '../../redux/Reducers/AccountsReducer';
import './accounts.css';

const Accounts = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.accounts.count);
  const balance = useSelector((state) => state.accounts.balance);
  const [inputValue, setInputValue] = useState('');

  const handleBalanceChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmission = () => {
    const newBalanceValue = parseFloat(inputValue);

    if (!isNaN(newBalanceValue)) {
      dispatch(addBalance(newBalanceValue));
      setInputValue('');
      dispatch(incrementCount());
    }
  };

  return (
    <div className='accounts'>
      <h2>Count: {count}</h2>
      <div className='showBalance'>
        <h2>Balance:</h2>
        <input
          placeholder='Balance'
          type='text'
          value={inputValue}
          onChange={handleBalanceChange}
        />
      </div>
      <button onClick={handleSubmission}>Submit</button>
      <div className='list'>
        <ul>
          {balance.map((balanceValue, index) => (
            <li key={index}>
              <h3>Balance:</h3> {balanceValue}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accounts;
