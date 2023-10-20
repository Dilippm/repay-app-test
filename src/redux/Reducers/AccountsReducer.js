
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  balance: [],
  total: 0, // Add the 'total' field
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    incrementCount: (state) => {
      state.count += 1;
    },
    addBalance: (state, action) => {
      const newBalanceValue = action.payload;
      state.balance.push(newBalanceValue);
      state.total += newBalanceValue;
    },
  },
});

export const { incrementCount, addBalance } = accountsSlice.actions;

export default accountsSlice.reducer;
