import { IBusinessDetail, IBusinessMember } from "new_models";
import { IAction } from "../action";

export type IUpdateBusinessDetail = Partial<
  Pick<IBusinessDetail, 'country' | 'businessName' | 'businessNo' | 'registrationDate' | 'industry' | 'supplierName' | 'sideIndustry' | 'website' | 'station'>
>;

export type IUpdateBusinessAddress = {
  businessAddress: string;
  businessTown: string;
  businessZipCode: string;
  businessCountry: string;
  operatingAddress: string;
  operatingTown: string;
  operatingZipCode: string;
  operatingCountry: string;
};

export type INewBusinessMember = {
  memberType: number;
  firstName: string;
  lastName: string;
  birthday: Date;
  email: string;
  countryCode: string;
  phoneNumber: string;
  address: string;
  city: string;
  postCode: string;
  country: string;
};

export type IUploadKYBDocuments = {
  incorporation: any;
  operation: any;
};

// Get Business Profile Request
export type IGetBusinessProfileRequestAction = IAction;
export type IGetBusinessProfileSuccessAction = {
  businessProfile: IBusinessDetail
};

// Update Business Detail Request
export type IUpdateBusinessDetailRequestAction = IAction & {
  business: IUpdateBusinessDetail
};
export type IUpdateBusinessDetailSuccessAction = {
  business: IUpdateBusinessDetail
};

// Udate Business Address Request
export type IUpdateBusinessAddressRequestAction = IAction & {
  businessAddress: IUpdateBusinessAddress
};
export type IUpdateBusinessAddressSuccessAction = IAction & {
  business: IBusinessDetail
};

// Get Business Members Request
export type IGetBusinessMembersRequestAction = IAction;
export type IGetBusinessMembersSuccessAction = {
  members: IBusinessMember[]
};

// Get Certain Business Member Request
export type IGetCertainBusinessMemberRequestAction = IAction & {
  id: number;
};
export type IGetCertainBusinessMemberSuccessAction = {
  member: IBusinessMember;
};

// Add New Director or Shareholder
export type ICreateBusinessMemberRequestAction = IAction & {
  member: INewBusinessMember
};
export type ICreateBusinessMemberSuccessAction = {
  members: IBusinessMember[]
};

// Delete Director or Shareholder
export type IDeleteBusinessMemberRequestAction = IAction & {
  id: number;
};
export type IDeleteBusinessMemberSuccessAction = {
  member: IBusinessMember
};

// Update Director or Shareholder
export type IUpdateBusinessMemberRequestAction = IAction & {
  id: number;
  member: IBusinessMember;
};
export type IUpdateBusinessMemberSuccessAction = {
  member: IBusinessMember;
};

// Upload Documents for KYB
export type IUploadKYBDocumentsRequestAction = IAction & {
  files: IUploadKYBDocuments
};
export type IUploadKYBDocumentsSuccessAction = {
  businessCustomerCorporation: IBusinessDetail;
}