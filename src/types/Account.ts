export type AccounColorsTypes =
	| "cCyan"
	| "cPink"
	| "cYellow"
	| "cPurple"
	| "cBlue"
	| "cGreen"
	| "cGrey"
	| "cRed";

/**
 * 0 - ACTIVATED
 * 1 - SUSPENDED
 * 2 - CLOSED
 */
export enum AccountStatusTypes {
	ACTIVATED,
	SUSPENDED,
	CLOSED,
}

/**
 * 0 - CHECKING
 * 1 - SAVING
 */
export enum BankAccountTypes {
	CHECKING,
	SAVING,
}
