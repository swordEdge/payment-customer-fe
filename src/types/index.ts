export type PlatformType = "Personal" | "Business";

export type RequestError = {
	message: string;
	reasonCode: string;
};

export * from "./Account";
export * from "./EmailTypes";
export * from "./IDCardTypes";
export * from "./User";
