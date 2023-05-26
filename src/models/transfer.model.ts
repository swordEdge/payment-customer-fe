export interface Transfer {
  fromAccountId: number;
  toAccountId?: number;
  toBeneficiaryId?: number;
  isOwnedAccount: boolean;
  sendAmount: number;
  currency?: string;
  amount?: number;
  receiveAmount?: number;
}
