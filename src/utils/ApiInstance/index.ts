import { makeInstance } from "./api.instance";

export const mainApiInstance = makeInstance(
	process.env.REACT_APP_SERVER_API || ""
);
export const commonApiInstance = makeInstance(
	process.env.REACT_APP_VERIFY_SERVER_API || ""
);
export const feeApiInstance = makeInstance(process.env.REACT_APP_FEE_API || "");
export const veriffApiInstance = makeInstance(
	process.env.REACT_APP_VERIFF_API_PUBLIC_KEY || ""
);
