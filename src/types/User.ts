/**
 * 0 - INDIVIDUAL_CUSTOMER
 * 1 - BUSINESS_CUSTOMER
 * 2 - SAAS_USER
 * 3 - HOUSE_USER
 */
export enum UserType {
	INDIVIDUAL_CUSTOMER,
	BUSINESS_CUSTOMER,
	SAAS_USER,
	HOUSE_USER,
}

/**
 * 0 - SMS
 * 1 - EMAIL
 * 2 - AUTHENTICATOR
 */
export enum UserMFASetting {
	EMAIL,
	SMS,
	AUTHENTICATOR,
}

/**
 * 0 - NOT_TAKEN
 * 1 - PENDING
 * 2 - APPROVED
 * 3 - REJECTED
 */
export enum UserKYCStatus {
	NOT_TAKEN,
	PENDING,
	APPROVED,
	REJECTED,
}

/**
 * 0 - CREATED
 * 1 - ACTIVATED
 * 2 - SUSPENDED
 * 3 - CLOSED
 */
export enum UserActivationStatus {
	CREATED,
	ACTIVATED,
	SUSPENDED,
	CLOSED,
}
