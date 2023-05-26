import { PATH } from "consts";

export const generatePersonalLandingUrl = (): string => {
	const url = `${window.location.protocol}//${window.location.host}${PATH.LANDING}`;
	return url.replaceAll("business", "personal");
};

export const generateBusinessLandingUrl = (): string => {
	const url = `${window.location.protocol}//${window.location.host}${PATH.LANDING}`;
	return url.replaceAll("personal", "business");
};
