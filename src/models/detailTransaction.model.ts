export interface DetailTransaction {
  id: number;
  name: string;
  description: string;
  createDate: Date;
  updateDate: Date;
  amount: number;
  currency: string;
  fee: number;
  rate: number;
  received: number;
  toCurrency: string;
  transactionType: string;
  status: string;
  fromName: string;
  fromEmail: string;
  fromAccountSerial: number;
  toName: string;
  toEmail: string;
  toAccountSerial: number;
  class: string;
}
