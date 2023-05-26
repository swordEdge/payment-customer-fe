import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITransaction } from "new_models";

import * as AppActionTypes from "../types";

type TransactionState = {
  transactions: ITransaction[];
  recentTransactions: ITransaction[];
  transaction: ITransaction;
  fee: number;
};

const initialState: TransactionState = {
  transactions: [] as ITransaction[],
  recentTransactions: [] as ITransaction[],
  transaction: {} as ITransaction,
  fee: 0,
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState: initialState,
  reducers: {
    // Get Transactions
    getTransactionsRequest(
      _state: TransactionState,
      _action: PayloadAction<AppActionTypes.Transaction.IGetTransactionsRequestAction>
    ) {},
    getTransactionsSuccess(
      state: TransactionState,
      action: PayloadAction<AppActionTypes.Transaction.IGetTransactionsSuccessAction>
    ) {
      state.transactions = action.payload.transactions;
    },
    getTransactionsFailure(_state: TransactionState) {},

    // Get Recent Transactions
    getRecentTransactionsRequest(
      _state: TransactionState,
      _action: PayloadAction<AppActionTypes.Transaction.IGetRecentTransactionsRequestAction>
    ) {},
    getRecentTransactionsSuccess(
      state: TransactionState,
      action: PayloadAction<AppActionTypes.Transaction.IGetRecentTransactionsSucessAction>
    ) {
      state.recentTransactions = action.payload.recentTransactions;
    },
    getRecentTransactionsFailure(_state: TransactionState) {},

    // Get Detail Transaction
    getDetailTransactionRequest(
      _state: TransactionState,
      _action: PayloadAction<AppActionTypes.Transaction.IGetDetailTransactionRequestAction>
    ) {},
    getDetailTransactionSuccess(
      state: TransactionState,
      action: PayloadAction<AppActionTypes.Transaction.IGetDetailTransactionSuccessAction>
    ) {
      state.transaction = action.payload.transaction;
    },
    getDetailTransactionFailure(_state: TransactionState) {},

    // Create Own Account Transaction
    createOwnAccountTransactionRequest(
      _state: TransactionState,
      _action: PayloadAction<AppActionTypes.Transaction.ICreateOwnAccountTransactionRequestAction>
    ) {},
    createOwnAccountTransactionSuccess(
      state: TransactionState,
      action: PayloadAction<AppActionTypes.Transaction.ICreateOwnAccountTransactionSuccessAction>
    ) {},
    createOwnAccountTransactionFailure(_state: TransactionState) {},

    // Create Beneficiary Transaction
    createBeneficiaryTransactionRequest(
      _state: TransactionState,
      _action: PayloadAction<AppActionTypes.Transaction.ICreateBeneficiaryTransactionRequestAction>
    ) {},
    createBeneficiaryTransactionSuccess(
      state: TransactionState,
      action: PayloadAction<AppActionTypes.Transaction.ICreateBeneficiaryTransactionSuccessAction>
    ) {},
    createBeneficiaryTransactionFailure(_state: TransactionState) {},

    // MFA Code Request
    mftCodeRequest(
      _state: TransactionState,
      _action: PayloadAction<AppActionTypes.Transaction.IMFACodeRequestAction>
    ) {},
    mftCodeSuccess(
      state: TransactionState,
      action: PayloadAction<AppActionTypes.Transaction.IMFACodeSuccessAction>
    ) {},
    mftCodeFailure(_state: TransactionState) {},

    // Get Fee
    getFeeRequest(
      _state: TransactionState,
      _action: PayloadAction<AppActionTypes.Transaction.IGetFeeAction>
    ) {},
    getFeeSuccess(
      state: TransactionState,
      action: PayloadAction<AppActionTypes.Transaction.IGetFeeSuccessAction>
    ) {
      state.fee = action.payload.fee;
    },
    getFeeFailure(_state: TransactionState) {},
  },
});

export const reducer = transactionSlice.reducer;
export const actions = transactionSlice.actions;
