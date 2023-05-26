export interface IBeneficiary {
  id: number;
  imgLink?: string;
  name: string;
  email: string;
  accountNumber: string;
  sortCode: string;
  currency: string;
  lastTransferDate?: string;
}
