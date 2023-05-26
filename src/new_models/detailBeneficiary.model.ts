export interface IDetailBeneficiary {
  name: string;
  email: string;
  bankName: string;
  bankAddress: string;
  currencyId?: number;
  sortCode: string;
  accountNumber: string;
  iban: string;
  bicSwift: string;
  wireRoutingNumber: string;
  achRoutingNumber: string;
}
