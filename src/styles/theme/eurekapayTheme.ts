import { createTheme } from "@mui/material/styles";

import { defaultColors } from "./default";
import { ImageURLs, LogoSize, ThemeColors } from "./types";

const themeColors: ThemeColors = {
	colors: {
		...defaultColors,

		accentBlue: '#000000',
		btnAccent: '#C61111',
		txtAccent: '#C61111',

		bgLightBlue: "#F0F5FD",

		logoBlue: "#051A80",
		txtLogo: '#C61111',
		btnLogo: '#000000',
		overviewLogo: '#000000',
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

		attentionLight: "#F2F2F2",
		waringTint: "#F2F2F2",
		primaryTint: "#F2F2F2",

		primary: "#0A33FF",
		primaryLight: "#03B1FF",

		landingBgColor: '#FFFFFF',
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
	primaryLogoImg: "/asset/Logo/Eurekapay/logo_primary.png",
	sidebarLogoImg: "/asset/Logo/Eurekapay/sidebar_logo.png",
	secondLogoImg: "/asset/Logo/Eurekapay/logo_second.png",
	primaryCoverImg: "/asset/Logo/Eurekapay/cover_primary.png",
	secondCoverImg: "/asset/Logo/Eurekapay/cover_second.png",
	primaryBusinessCoverImg: "/asset/Logo/Eurekapay/business_cover_primary.png",
};

const logoSize: LogoSize = {
	primaryWidth: '60%',
	primaryHeight: '30%',
	primaryMarginTop: '-9rem',
	sidebarLogoWidth: '80%',
	sidebarLogoHeight: '8rem'
};

export const eurekapayTheme = createTheme({
	...themeColors,
	...imageURLs,
	...logoSize,
	palette: {
		mode: "light",
	},
});
