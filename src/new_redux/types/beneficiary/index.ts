import { IBeneficiary, IDetailBeneficiary } from "new_models";
import { IAction } from "../action";

// Get Beneficiaries
export type IGetBeneficiariesRequestAction = IAction;
export type IGetBeneficiariesSuccessAction = IAction & {
  beneficiaries: IBeneficiary[]
};

// Create Beneficiary
export type ICreateBeneficiaryRequestAction = IAction & {
  beneficiary: IDetailBeneficiary
};
export type ICreateBeneficiarySuccessAction = IAction;