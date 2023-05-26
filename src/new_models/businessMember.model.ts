import {
  UserKYCStatus
} from "types";

export interface IBusinessMember {
  id: number;
  businessCustomerCorporationId: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  birthday: Date;
  email: string;
  countryCode: string;
  phoneNumber: string;
  address: string;
  city: string;
  postCode: string;
  country: string;
  nationality: string;
  documentType: string;
  documentFrontUrl: string;
  documentHandyUrl: string;
  memberType: string;
  kycVeriffUuid: string;
  kycStatus: string;
}
