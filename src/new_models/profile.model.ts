export interface IUserProfile {
	firstName: string;
	lastName: string;
	birthday: Date;

	emailAddress?: string;

	mobilePrefix?: string;
	phoneNumber?: string;

	address1?: string;
	address2?: string;
	city?: string;
	state?: string;
	postCode?: string;
	countryName?: string;
	dialCode?: string;

	mfaSetting?: string;
}
