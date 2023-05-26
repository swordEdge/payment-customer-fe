// Common Paths
export const ALL = "*";
export const INDEX = "/";

// Landing
export const LANDING = "/landing";

// Login & Register Paths
export const LOGIN_ALL = "/login/*";
export const LOGIN_INDEX = "/login";
export const LOGIN_BY_EMAIL = "email";
export const LOGIN_BY_PHONE = "phone";
export const LOGIN_SMS = "sms";
export const LOGIN_AUTHENTICATOR = "authenticator";
export const LOGIN_VERIFY_CODE = "verify-code";
export const LOGIN_CHECK_EMAIL = "check-email";
export const LOGIN_CHECK_SMS = "check-sms";
export const LOGIN_CHECK_AUTHENTICATOR = "check-authenticator";

export const PASSWORD_RESET = "/reset-password/*";
export const PASSWORD_RESET_CONFIRM = "confirm";

export const REGISTER = "/register/*";
export const REGISTER_ALL = "/register/*";
export const REGISTER_INDEX = "/register";
export const REGISTER_BY_PHONE = "phone";
export const REGISTER_BY_EMAIL = "email";
export const REGISTER_CHECK_EMAIL = "check-email";
export const REGISTER_CHECK_SMS = "check-sms";
export const REGISTER_SUCCESS = "register-success";

export const VERIFF = "veriff";
export const VERIFF_ALL = "/veriff/*";
export const VERIFF_INDEX = "/veriff";
export const VERIFF_SESSION = "session";
export const VERIFF_PENDING = "pending";
export const VERIFF_REJECT = "reject";

export const BUSINESS_MEMBER_VERIFF = "/business-member-veriff/";
export const BUSINESS_MEMBER_VERIFF_ALL = "/business-member-veriff/*";
export const BUSINESS_MEMBER_VERIFF_INDEX = "/business-member-veriff";
export const BUSINESS_MEMBER_VERIFF_SESSION = "session";
export const BUSINESS_MEMBER_VERIFF_PENDING = "pending";
export const BUSINESS_MEMBER_VERIFF_REJECT = "reject";

// Dashboard Paths
export const ACCOUNTS = "/accounts";
export const ACCOUNTS_MATCH = "accounts";
export const ACCOUNT_DETAIL = "/account/:id";

export const CARDS = "cards";
export const CARDS_ALL = "/cards/*";
export const CARDS_INDEX = "/cards";

export const TRANSFER = "transfer";
export const TRANSFER_ALL = "/transfer/*";
export const TRANSFER_INDEX = "/transfer";

export const PROFILE = "profile";
export const PROFILE_ALL = "/profile/*";
export const PROFILE_INDEX = "/profile";
export const PROFILE_OVERVIEW = "overview";
export const BUSINESS_PROFILE = "business";
export const PROFILE_INFO = "info";
export const PROFILE_CHANGE_PASSWORD = "password";
export const PROFILE_TWO_FACTOR = "twofactor";
export const PROFILE_NOTIFICATIONS = "notifications";
export const PROFILE_LANGUAGE = "languages";
export const PROFILE_MESSAGES = "mymsg";
export const PROFILE_NEW_DIRECTOR = 'director';
export const PROFILE_NEW_SHAREHOLDER = 'shareholder';

export const SERVICES = "services";
export const SERVICES_ALL = "/services/*";
export const SERVICES_INDEX = "/services";
export const SERVICES_OVERVIEW = "overview";
export const SERVICES_BENEFICIARY = "beneficiary";
export const SERVICES_SUBSCRIPTION = "subscription";
export const SERVICES_SUBSCRIPTION_CHANGE = "subscription/change";
export const SERVICES_REFERRALS = "referrals";
export const SERVICES_DEBITS = "debits";
export const SERVICES_ORDERS = "orders";
