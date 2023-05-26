export interface ITransaction {
  id: number;
  name: string;
  email: string;
  displayName: string;
  accountName: string;
  accountNumber: string;
  cpAccountEmail: string;
  cpAccountName: string;
  cpAccountNumber: string;
  cpDisplayName: string;
  inOuts: boolean;
  amount: number;
  description: string;
  type: number;
  currencyCode: string;
  currencySymbol: string;
  feeAmount: number;
  feeCurrencyCode: string;
  feeCurrencySymbol: string;
  rate: number;
  comment: string;
  status: number;
  // createdAt: string;
  create_at: string;
  updatedAt: string;
}
