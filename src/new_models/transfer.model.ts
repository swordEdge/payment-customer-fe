export interface ITransfer {
  fromAccountId: number;
  toAccountId?: number;
  toBeneficiaryId?: number;
  isOwnedAccount: boolean;
  sendAmount: number;

  currency?: string;
  toCurrency?: string;
  amount?: number;
  receivedAmount?: number;
  rate?: number;
  toName?: string;
}
