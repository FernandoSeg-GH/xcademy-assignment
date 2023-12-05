// slices/pricesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PricesState {
  coingeckoPrice: number | null;
  zilStreamPrice: number | null;
  cryptoRankPrice: number | null;
  averagePrice: number | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: PricesState = {
  coingeckoPrice: null,
  zilStreamPrice: null,
  cryptoRankPrice: null,
  averagePrice: null,
  isLoading: false,
  error: null
};

export const pricesSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {
    setCoingeckoPrice: (state, action: PayloadAction<number | null>) => {
      state.coingeckoPrice = action.payload;
    },
    setZilStreamPrice: (state, action: PayloadAction<number | null>) => {
      state.zilStreamPrice = action.payload;
    },
    setCryptoRankPrice: (state, action: PayloadAction<number | null>) => {
      state.cryptoRankPrice = action.payload;
    },
    calculateAveragePrice: (state) => {
      const prices = [state.coingeckoPrice, state.zilStreamPrice, state.cryptoRankPrice].filter(price => price !== null) as number[];
      state.averagePrice = prices.length > 0 ? prices.reduce((a, b) => a + b, 0) / prices.length : null; 
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  },
});

export const {
  setCoingeckoPrice,
  setZilStreamPrice,
  setCryptoRankPrice,
  calculateAveragePrice,
  setLoading,
  setError,
} = pricesSlice.actions;
export default pricesSlice.reducer;
