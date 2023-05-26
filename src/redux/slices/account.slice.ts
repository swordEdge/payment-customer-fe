import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Account } from 'models';

type StateType = {
  account: Account;
  accounts: Account[];
  newAccount?: Account;
  gettingAccount: boolean;
  gotAccount: boolean;
  error?: any;
  deleted: boolean;
};

const intialState: StateType = {
  account: {} as Account,
  accounts: [],
  gettingAccount: false,
  gotAccount: false,
  deleted: false,
};

const accountSlice = createSlice({
  name: 'account',
  initialState: intialState,
  reducers: {
    /**
     * getAccounts
     */

    getAccounts(state: StateType) {
      state.gettingAccount = true;
      state.gotAccount = false;
    },
    getAccountsSuccess(state, action) {
      state.gettingAccount = false;
      state.gotAccount = true;
      state.accounts = action.payload;
    },
    getAccountsError(state, action) {
      state.gettingAccount = false;
      state.gotAccount = false;
      state.error = action.payload;
    },
    /**
     * getAccount
     */
    getAccount(state, action) {
      state.gettingAccount = true;
      state.gotAccount = false;
    },
    getAccountSuccess(state, action) {
      state.gettingAccount = false;
      state.gotAccount = true;
      state.account = action.payload;
    },
    getAccountError(state, action) {
      state.gettingAccount = false;
      state.gotAccount = false;
      state.error = action.payload;
    },
    /**
     * Create Account
     */
    createAccount(
      state: StateType,
      action: PayloadAction<{ name: string; currency: string }>
    ) {
      state.newAccount = undefined;
      state.gettingAccount = true;
      state.gotAccount = false;
    },
    createAccountSuccess(state: StateType, action: PayloadAction<Account>) {
      state.gettingAccount = false;
      state.gotAccount = true;
      // state.accounts.push(action.payload);
    },
    createAccountError(state, action) {
      state.gettingAccount = false;
      state.gotAccount = false;
      state.error = action.payload;
    },
    /**
     * Delete Account
     */
    deleteAccount(state: StateType, action: PayloadAction<{ id: string }>) {
      state.gettingAccount = true;
      state.gotAccount = false;
      state.deleted = false;
    },
    deleteAccountSuccess(state: StateType) {
      state.gettingAccount = false;
      state.gotAccount = true;
      state.deleted = true;
    },
    deleteAccountError(state, action) {
      state.gettingAccount = false;
      state.gotAccount = false;
      state.error = action.payload;
    },
  },
});

export const actions = accountSlice.actions;
export const reducer = accountSlice.reducer;
