import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICurrency } from "new_models";

import * as AppActionTypes from "../types";

type CurrencyState = {
  currencies: ICurrency[];
};

const initialState: CurrencyState = {
  currencies: [] as ICurrency[]
};

const currencySlice = createSlice({
  name: "currency",
  initialState: initialState,
  reducers: {
    // Get Currencies
    getCurrenciesRequest(
      _state: CurrencyState,
      _action: PayloadAction<AppActionTypes.Currency.IGetCurrenciesRequestAction>
    ) { },
    getCurrenciesSuccess(
      state: CurrencyState,
      action: PayloadAction<AppActionTypes.Currency.IGetCurrenciesSuccessAction>
    ) {
      state.currencies = action.payload.currencies;
    },
    getCurrenciesFaiure(_state: CurrencyState) { },
  }
});

export const reducer = currencySlice.reducer;
export const actions = currencySlice.actions;