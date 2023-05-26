import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAccount, IAccountOverview } from "new_models";

import * as AppActionTypes from "../types";

type AccountState = {
  accounts: IAccount[];
  overviewAccounts: IAccountOverview[];
  account: IAccount;
};

const initialState: AccountState = {
  accounts: [] as IAccount[],
  overviewAccounts: [] as IAccountOverview[],
  account: {} as IAccount
};

const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    // Get Accounts
    getAccountsRequest(
      _state: AccountState,
      _action: PayloadAction<AppActionTypes.Account.IGetAccountsRequestAction>
    ) { },
    getAccountsSuccess(
      state: AccountState,
      action: PayloadAction<AppActionTypes.Account.IGetAccountsSuccessAction>
    ) {
      state.accounts = action.payload.accounts;
    },
    getAccountsFailure(_state: AccountState) { },

    // Get Account
    getAccountRequest(
      _state: AccountState,
      _action: PayloadAction<AppActionTypes.Account.IGetAccountRequestAction>
    ) { },
    getAccountSuccess(
      state: AccountState,
      action: PayloadAction<AppActionTypes.Account.IGetAccountSuccessAction>
    ) {
      state.account = action.payload.account
    },

    // Get Account Overview
    getAccountOverviewRequest(
      _state: AccountState,
      _action: PayloadAction<AppActionTypes.Account.IGetAccountOverviewRequestAction>
    ) { },
    getAccountOverviewSuccess(
      state: AccountState,
      action: PayloadAction<AppActionTypes.Account.IGetAccountOverviewSuccessAction>
    ) {
      state.overviewAccounts = action.payload.accountOverview;
    },
    getAccountOverviewFailure(_state: AccountState) { },

    // Create Account
    createAccountRequest(
      _state: AccountState,
      _action: PayloadAction<AppActionTypes.Account.ICreateAccountRequestAction>
    ) { },
    createAccountSuccess(
      state: AccountState,
      action: PayloadAction<AppActionTypes.Account.ICreateAccountSuccessAction>
    ) { },
    createAccountFailure(_state: AccountState) { }
  }
});

export const reducer = accountSlice.reducer;
export const actions = accountSlice.actions;