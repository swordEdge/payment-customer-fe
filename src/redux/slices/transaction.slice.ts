import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Transaction } from "models";
import { DetailTransaction } from "models";

type StateType = {
  recentTrans?: Transaction[];
  accountTrans?: Transaction[];
  receiverName?: string;
  transactinoById?: DetailTransaction;
  gettingTransaction: boolean;
  gotTransaction: boolean;
  verified: boolean;
  fee: number;
  error: boolean;
};

const intialState: StateType = {
  gettingTransaction: false,
  gotTransaction: false,
  verified: false,
  error: false,
  fee: 0,
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState: intialState,
  reducers: {
    /**
     * getRecentTransactions
     */
    getRecentTrans(state: StateType) {
      state.gettingTransaction = true;
      state.gotTransaction = false;
      state.error = false;
    },
    getRecentTransSuccess(
      state: StateType,
      action: PayloadAction<Transaction[]>
    ) {
      state.gettingTransaction = false;
      state.gotTransaction = true;
      state.recentTrans = action.payload;
    },
    getRecentTransError(state: StateType) {
      state.gettingTransaction = false;
      state.gotTransaction = false;
    },

    /**
     * getAccountTransactions
     */
    getAccountTrans(state: StateType, action: PayloadAction<{ id: string }>) {
      state.gettingTransaction = true;
      state.gotTransaction = false;
      state.error = false;
    },
    getAccountTransSuccess(
      state: StateType,
      action: PayloadAction<Transaction[]>
    ) {
      state.gettingTransaction = false;
      state.gotTransaction = true;
      state.accountTrans = action.payload;
    },
    getAccountTransError(state: StateType) {
      state.gettingTransaction = false;
      state.gotTransaction = false;
    },
    /**
     * Send Transfer
     */
    sendTransfer(state: StateType, action: PayloadAction<any>) {
      state.gettingTransaction = true;
      state.gotTransaction = false;
      state.error = false;
    },
    sendTransferSuccess(state: StateType, action: PayloadAction<any>) {
      state.gettingTransaction = false;
      state.gotTransaction = true;
      state.receiverName = action.payload.receiverName;
    },
    sendTransferError(state: StateType) {
      state.gettingTransaction = false;
      state.gotTransaction = false;
      state.error = true;
    },
    /**
     * Get Transfaction Detail
     */
    getTransaction(
      state: StateType,
      action: PayloadAction<{ transactionId: string }>
    ) {
      state.gettingTransaction = true;
      state.gotTransaction = false;
      state.error = false;
    },
    getTransactionSuccess(
      state: StateType,
      action: PayloadAction<DetailTransaction>
    ) {
      state.gettingTransaction = false;
      state.gotTransaction = true;
      state.transactinoById = action.payload;
    },
    getTransactionError(state: StateType) {
      state.gettingTransaction = false;
      state.gotTransaction = false;
      // state.error = true;
    },
    /**
     * getFee
     */
    getFee(state: StateType, action: PayloadAction<{ id: string }>) {
      state.gettingTransaction = true;
      state.fee = 0;
      state.error = false;
    },
    getFeeSuccess(state: StateType, action: PayloadAction<{ fee: number }>) {
      state.gettingTransaction = false;
      state.fee = action.payload.fee;
    },
    getFeeError(state: StateType) {
      state.gettingTransaction = false;
      state.fee = 0;
    },
  },
});

export const actions = transactionSlice.actions;
export const reducer = transactionSlice.reducer;
