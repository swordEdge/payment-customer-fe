type IFee = {
  name: string;
  fixedAmount: number;
  percentage: number;
};

export interface ISubscription {
  id: number;
  name: string;
  currency: string;
  fees: IFee[];
}
