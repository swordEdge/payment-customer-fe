import {
	UserActivationStatus,
	UserKYCStatus,
	UserMFASetting,
	UserType,
} from "types";

export interface IUser {
	id: string;
	email?: string;
	countryCode?: string;
	phoneNumber?: string;
	businessName?: string;
	displayName: string;
	type: UserType;
	avatar?: string;
	mfaSetting: UserMFASetting;
	notificationSetting: string;
	kycId?: number;
	kycVeriffUuid: string;
	kycStatus: UserKYCStatus;
	role: number;
	activated: UserActivationStatus;
	idRef?: string;
	createdAt?: string;
}
