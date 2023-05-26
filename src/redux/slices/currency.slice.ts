import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ICurrency } from 'models';

type StateType = {
  currencies: ICurrency[];
  gettingCurrencies: boolean;
  gotCurrencies: boolean;
  error: any;
};

const initialState: StateType = {
  currencies: [
    { id: 1, unit: 'USD', symbol: '$' },
    { id: 2, unit: 'EUR', symbol: '€' },
    { id: 3, unit: 'GBP', symbol: '£' },
    { id: 4, unit: 'YEN', symbol: '¥' },
    { id: 5, unit: 'SGD', symbol: 'S$' },
  ],
  gettingCurrencies: false,
  gotCurrencies: false,
  error: { message: '' },
};

const currencySlice = createSlice({
  name: 'currency',
  initialState: initialState,
  reducers: {
    /**
     * get currencies
     */
    getCurrencies(state: StateType) {
      state.gettingCurrencies = true;
      state.gotCurrencies = false;
    },
    getCurrenciesSuccess(state, action) {
      state.gettingCurrencies = false;
      state.gotCurrencies = true;
      state.currencies = action.payload.currencies;
    },
    getCurrenciesError(state, action) {
      state.gettingCurrencies = false;
      state.gotCurrencies = false;
      state.error = action.payload;
    },
  },
});

export const reducer = currencySlice.reducer;
export const actions = currencySlice.actions;
