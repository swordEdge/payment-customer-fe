import { ISaaSUserCorporation } from "new_models";
import { IAction } from "../action";

// Get SaaSUserCorporation Request
export type IGetSaaSUserCorporationRequestAction = IAction & {
	domain: string;
};
export type IGetSaaSUserCorporationSuccessAction = {
	saasUserCorporation: ISaaSUserCorporation;
};
