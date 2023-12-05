
import { configureStore } from '@reduxjs/toolkit';

import balanceReducer from './slices/balanceSlice';
import pricesSlice from './slices/pricesSlice';


export const store = configureStore({
  reducer: {
    prices: pricesSlice,
    balance: balanceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
