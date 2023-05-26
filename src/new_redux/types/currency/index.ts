import { ICurrency } from "new_models";
import { IAction } from "../action";

// Get Currencies Request
export type IGetCurrenciesRequestAction = IAction;
export type IGetCurrenciesSuccessAction = {
  currencies: ICurrency[]
};