import getAccounts from "./getAccounts.saga";
import getAccount from "./getAccount.saga";
import getAccountOverview from "./getAccountOverview.saga";
import createAccount from "./createAccount.saga";

export default [
  getAccounts,
  getAccount,
  getAccountOverview,
  createAccount
]