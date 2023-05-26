export interface IAccount {
  id: number;
  name: string;
  imgLink?: string;
  accountNumber: string;
  totalBalance: number;
  availableBalance: number;
  currencyId: number;
  currencyCode: string;
  currencySymbol: string;
  color: string;
  status: number;
  bankName?: string;
  bankAddress?: string;
  sortCode?: string;
  iban?: string;
  bicSwift?: string;
  type?: number;
}
