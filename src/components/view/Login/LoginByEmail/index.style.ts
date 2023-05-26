import { StyledComponentProps, styled } from "@mui/material";

import { BDTheme } from "styles";

type LoginByEmailViewStyleProps = StyledComponentProps & {};

export const LoginByEmailViewStyle = styled("div")<LoginByEmailViewStyleProps>(
	({ theme }) => {
		const bdTheme = theme as BDTheme;

		return {
			margin: "auto",
			width: "60%",

			[bdTheme.breakpoints.down("md")]: {
				width: "90%",
			},

			".back-button": {
				display: "flex",
				alignItems: "center",
				fontSize: "1.2rem",
				textTransform: "none",
				textDecoration: "none",
				color: bdTheme.colors.black,
				marginBottom: "3rem",
			},

			".each-field": {
				width: "100",
				display: "flex",
				alignItems: "center",
			},

			'.input-container': {
				width: '55%',

				[bdTheme.breakpoints.down('md')]: {
					width: '100%',
					boxSizing: 'border-box'
				}
			},

			".submit-button": {
				marginTop: "2rem",
				width: "15rem",
				height: "4rem",

				[bdTheme.breakpoints.down("md")]: {
					width: "100%",
				},
			},

			".text-input": {
				outline: "none",
				width: "23rem",
				height: "2rem",

				".MuiTextField-root": {
					borderBottom: "none",
					margin: 0,
				},

				".MuiFormLabel-root": {
					"&::active": {
						fontSize: "0.5rem",
					},
				},

				".MuiFilledInput-root": {
					borderRadius: "15px",
					borderBottom: "none",

					"&:hover::before": {
						borderBottom: "none !important",
						outline: "none",
					},

					"&::before": {
						borderBottom: "none",
					},

					"&::after": {
						borderBottom: "none",
					},
				},
			},

			".title-typo": {
				fontFamily: bdTheme.textFont.mainFont,
				fontWeight: bdTheme.textWeight.semibold,
				fontSize: "1.8rem",
				color: bdTheme.colors.black,
				textAlign: "center",
				display: "flex",
				columnGap: "0.5rem",

				[bdTheme.breakpoints.down("md")]: {
					fontSize: "1.5rem",
				},
			},

			".email-phone": {
				marginTop: "2rem",
				display: "flex",
				alignItems: "center",

				[bdTheme.breakpoints.down("md")]: {
					flexDirection: "column",
					alignItems: "start",
					paddingLeft: "0rem",
				},

				".phone-link": {
					marginLeft: "1rem",
					fontFamily: bdTheme.textFont.mainFont,
					color: bdTheme.colors.primary,
					textDecoration: "none",

					[bdTheme.breakpoints.down("md")]: {
						marginTop: "1.5rem",
						marginLeft: "0rem",
					},
				},
			},

			".continue-button": {
				marginTop: "2rem",
				width: "15rem",
				height: "4rem",
				backgroundColor: bdTheme.colors.normalGray,
				borderTopLeftRadius: "50px",
				borderTopRightRadius: "50px",
				borderBottomLeftRadius: "50px",
				borderBottomRightRadius: "50px",
				textTransform: "none",
				fontSize: "1rem",
				fontWeight: bdTheme.textWeight.regular,
				color: bdTheme.colors.white,

				[bdTheme.breakpoints.down("md")]: {
					width: "100%",
				},

				"&:hover": {
					backgroundColor: bdTheme.colors.normalGray,
				},
			},

			".notification-wrap": {
				marginBottom: "2rem !important",
			},

			".mobile-align-center": {
				[bdTheme.breakpoints.down("md")]: {
					margin: "atuo",
				},
			},

			".main-font": {
				fontFamily: bdTheme.textFont.mainFont,
			},

			".color-green": {
				color: bdTheme.colors.normalGreen,
			},

			".color-gray": {
				color: bdTheme.colors.normalGray,
			},

			".color-white": {
				color: bdTheme.colors.white,
			},

			".color-blue": {
				color: bdTheme.colors.primary,
			},

			'.color-feed-red': {
				color: bdTheme.colors.colorFeedbackWarning
			},

			".bg-primary": {
				backgroundColor: bdTheme.colors.primary,

				"&:hover": {
					backgroundColor: bdTheme.colors.primary,
				},
			},

			".bg-red": {
				backgroundColor: bdTheme.colors.red,
			},

			".margin-left-right": {
				marginLeft: "0.3rem",
				marginRight: "0.3rem",
			},

			".fontWeight-semibold": {
				fontWeight: bdTheme.textWeight.semibold,
			},

			".no-underline": {
				textDecoration: "none",
			},
		};
	}
);
