import getTransactions from "./getTransactions.saga";
import getRecentTransactions from "./getRecentTransactions.saga";
import getDetailTransaction from "./getDetailTransaction.saga";
import createOwnAccountTransaction from "./createOwnAccountTransaction.saga";
import createBeneficiaryTransaction from "./createBeneficiaryTransaction.saga";
import mftCodeRequest from "./mftCodeRequest.saga";
import getFeeRequest from "./getFee.saga";

export default [
  getTransactions,
  getRecentTransactions,
  getDetailTransaction,
  createOwnAccountTransaction,
  createBeneficiaryTransaction,
  mftCodeRequest,
  getFeeRequest,
];
