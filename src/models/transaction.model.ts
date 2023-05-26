export interface Transaction {
  id: number;
  type: string;
  dateTime: Date;
  name: string;
  description: string;
  amount: number;
  currency: string;
  class: string;
}
