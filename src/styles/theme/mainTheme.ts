import { createTheme } from "@mui/material/styles";

import { defaultColors } from "./default";
import { ImageURLs, LogoSize, ThemeColors } from "./types";

const themeColors: ThemeColors = {
	colors: {
		...defaultColors,

		accentBlue: "#051A80",
		btnAccent: "#051A80",
		txtAccent: "#000000",

		bgLightBlue: "#F0F5FD",

		logoBlue: "#051A80",
		txtLogo: "#051A80",
		btnLogo: "#051A80",
		overviewLogo: "#051A80",
		logoGreen: "#16F2F2",
		logoYellow: "#FFC800",

		darkBlue: "#122644",
		white: "#FFFFFF",
		pink: "#DC58EF",
		red: "#FF576A",
		grayBlue: "#94B4CE",
		grayLightBlue: "#D6E2EC",
		lightGray: "#F3F3F4",
		lightBlue: "#0A33FF",

		black: "#000000",
		textBlack: "#030D40",
		textGray1: "#03B1FF",
		textGray2: "#B5E9FF",
		textGray3: "#051A80",

		strokeGray: "#E6E9EB",
		normalGray: "#7F818A",

		normalGreen: "#3BB861",

		attentionLight: "#FFEFBD",
		waringTint: "#FFF0F2",
		primaryTint: "#B5E9FF",

		primary: "#0A33FF",
		primaryLight: "#03B1FF",

		landingBgColor: '#ffffff',
	},

	textFont: {
		mainFont: "Helvetica",
		oneFont: "Articulat CF",
	},

	textWeight: {
		light: "300",
		regular: "500",
		semibold: "700",
	},
};

const imageURLs: ImageURLs = {
	primaryLogoImg: "/asset/Logo/MainLogo/logo_primary.png",
	sidebarLogoImg: "/asset/Logo/MainLogo/sidebar_logo.png",
	secondLogoImg: "/asset/Logo/MainLogo/logo_second.png",
	primaryCoverImg: "/asset/Logo/MainLogo/cover_primary.png",
	secondCoverImg: "/asset/Logo/MainLogo/cover_second.png",
	primaryBusinessCoverImg: "/asset/Logo/MainLogo/business_cover_primary.png",
};

const logoSize: LogoSize = {
	primaryWidth: "70%",
	primaryHeight: "35%",
	primaryMarginTop: "0",
	sidebarLogoWidth: "",
	sidebarLogoHeight: "8rem",
};

export const mainTheme = createTheme({
	...themeColors,
	...imageURLs,
	...logoSize,
	palette: {
		mode: "light",
	},
});
