export interface IUser {
  _id?: string;
  firstName?: string;
  lastName?: string;
  birthday?: any;
  emailAddress?: string;
  mobilePrefix?: string;
  phoneNumber?: string;
  password?: string;
  acceptPolicy?: string;
  address?: string;
  city?: string;
  state?: string;
  postCode?: string;
  countryName?: string;
  countryCode?: string;
  dialCode?: string;
  mfaSetting?: number;
  otp_enabled?: string;
  otpBase32?: string;
  otpAuthUrl?: string;

  isRecovery?: boolean;
  // userId?: string;
}
