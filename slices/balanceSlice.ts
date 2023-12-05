import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BalanceState {
  balance: string;
  isLoading: boolean;
  error: string | null;
}

const initialState: BalanceState = {
  balance: '0',
  isLoading: false,
  error: null,
};

export const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    fetchBalanceStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchBalanceSuccess: (state, action: PayloadAction<string>) => {
      state.balance = action.payload;
      state.isLoading = false;
    },
    fetchBalanceFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { fetchBalanceStart, fetchBalanceSuccess, fetchBalanceFailure } = balanceSlice.actions;
export default balanceSlice.reducer
