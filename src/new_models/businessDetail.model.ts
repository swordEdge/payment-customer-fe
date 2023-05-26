export interface IBusinessDetail {
  id: number;
  saasCustomerCorporationId: number;
  userId: number;
  businessName: string;
  businessNo: string;
  businessAddress: string;
  country: string;
  industry: string;
  sideIndustry?: string;
  registrationDate: string;
  registrationAddress: string;
  shareholdingStructure: string;
  turnoverYear: string;
  turnoverWeek: string;
  station: string;
  website: string;
  supplierName: string;
  supplierContracts: string;
  businessProfileStatus: string;
  directorProfileStatus: string;
  directorDocumentStatus: string;
  incorporationDocumentUrl?: string;
  operationDocumentUrl?: string;
}
