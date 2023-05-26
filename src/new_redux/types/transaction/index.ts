import { ITransaction, ITransfer } from "new_models";
import { IAction } from "../action";

// type ISignUpUser = Partial<
// 	Pick<IUser, "email" | "countryCode" | "phoneNumber">
// >;

type ICreateOwnAccountTransactionRequest = Partial<
  Pick<ITransfer, "fromAccountId" | "toAccountId" | "sendAmount">
> & {
  code: string;
};

type ICreateBeneficiaryTransactionRequest = Partial<
  Pick<ITransfer, "fromAccountId" | "toBeneficiaryId" | "sendAmount">
> & {
  code: string;
};

// Get Transactions Request by Account ID
export type IGetTransactionsRequestAction = IAction & {
  accountId: number;
};
export type IGetTransactionsSuccessAction = {
  transactions: ITransaction[];
};

// Get Recent Transactions Request
export type IGetRecentTransactionsRequestAction = IAction;
export type IGetRecentTransactionsSucessAction = {
  recentTransactions: ITransaction[];
};

// Get Detail Transaction Request
export type IGetDetailTransactionRequestAction = IAction & {
  transactionId: number;
};
export type IGetDetailTransactionSuccessAction = {
  transaction: ITransaction;
};

// Create Own Account Transaction
export type ICreateOwnAccountTransactionRequestAction = IAction & {
  transaction: ICreateOwnAccountTransactionRequest;
};
export type ICreateOwnAccountTransactionSuccessAction = {
  transaction: ITransaction;
};

// Create Beneficiary Transaction
export type ICreateBeneficiaryTransactionRequestAction = IAction & {
  transaction: ICreateBeneficiaryTransactionRequest;
};
export type ICreateBeneficiaryTransactionSuccessAction = {
  transaction: ITransaction;
};

// Send MFA code request
export type IMFACodeRequestAction = IAction;
export type IMFACodeSuccessAction = {
  mfaSetting: number;
};

// Get Fee Request
export type IGetFeeAction = IAction & {
  fromAccountId?: number;
  toAccountId?: number;
  sendAmount?: number;
  isBeneficiary?: boolean;
};
export type IGetFeeSuccessAction = {
  fee: number;
};
