import { StyledComponentProps, styled } from "@mui/material";

import { BDTheme } from "styles";

type LandingViewStyleProps = StyledComponentProps & {};

export const LandingViewStyle = styled("div")<LandingViewStyleProps>(
	({ theme }: any) => {
		const bdTheme = theme as BDTheme;

		return {
			width: "100%",

			".landing-container": {
				width: "60%",
				margin: "auto",

				[theme.breakpoints.down("md")]: {
					width: "90%",
				},

				".each-field": {
					width: "100%",
					display: "flex",
					justifyContent: "center",
				},

				".img-container": {
					width: "50%",
					margin: "auto",

					[bdTheme.breakpoints.down("md")]: {
						left: "0",
						width: "50%",
						marginBottom: "3rem",
						marginLeft: "0",
					},

					".logo-img": {
						width: "100%",
						height: '4rem',
						backgroundImage: `url('${bdTheme.primaryLogoImg}')`,
						backgroundPosition: 'center center',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'contain',
					},
				},

				".title-typo": {
					fontFamily: theme.textFont.mainFont,
					fontWeight: theme.textWeight.semibold,
					fontSize: "2rem",
					color: theme.colors.black,
					textAlign: "center",
				},

				".comment-typo": {
					display: "flex",
					justifyContent: "center",
					marginTop: "1rem",
					fontFamily: theme.textFont.mainFont,
					fontSize: "1rem",
					color: theme.colors.black,

					[theme.breakpoints.down("md")]: {
						fontSize: "0.8rem",
					},
				},

				".feedback-comp": {
					// width: '100%',
					borderRadius: "10px",
					padding: "1rem 1.5rem 1rem 1.5rem",
					display: "flex",
					alignItems: "center",

					".feedback-typo": {
						fontSize: "1.3rem",
					},
				},

				".buttons-container": {
					marginTop: "2.5rem",
					display: "flex",
					justifyContent: "space-evenly",

					[theme.breakpoints.down("md")]: {
						display: "block",
					},

					".button": {
						borderTopLeftRadius: "50px",
						borderTopRightRadius: "50px",
						borderBottomLeftRadius: "50px",
						borderBottomRightRadius: "50px",
						width: "15rem",
						height: "4rem",
						color: theme.colors.white,
						fontWeight: theme.textWeight.semibold,
						textTransform: "none",
						fontSize: "1rem",

						[theme.breakpoints.down("md")]: {
							marginTop: "0.5rem",
							width: "100%",
							fontSize: "1rem",
						},
					},
				},
			},

			'.img-bg-feed1': {
				// backgroundImage: `url('/asset/Landing/Main/feed1.svg')`,
				// backgroundPosition: 'center center',
				// backgroundRepeat: 'no-repeat',
				// backgroundSize: 'contain',
				width: '3rem',
				height: '3rem',
				border: 'none',
			},

			".no-underline": {
				textDecoration: "none",
			},

			".fontWeight-semibold": {
				fontWeight: theme.textWeight.semibold,
			},

			".color-green": {
				color: theme.colors.normalGreen,
			},

			".color-link": {
				color: theme.colors.primary,
			},

			".bg-attention": {
				backgroundColor: theme.colors.attentionLight,
			},

			".bg-warning-tint": {
				backgroundColor: theme.colors.waringTint,
			},

			".bg-primary-tint": {
				backgroundColor: theme.colors.primaryTint,
			},

			".bg-primary": {
				backgroundColor: theme.colors.primary,

				"&:hover": {
					backgroundColor: theme.colors.primary,
				},
			},

			".bg-primary-light": {
				backgroundColor: theme.colors.primaryLight,

				"&:hover": {
					backgroundColor: theme.colors.primaryLight,
				},
			},

			".margin-top-16": {
				marginTop: "16px",
			},

			".margin-top-32": {
				marginTop: "32px",
			},

			".column-gap-small": {
				columnGap: "0.5rem",
			},

			".column-gap-medium": {
				columnGap: "1rem",
			},

			'.color-feed-red': {
				color: bdTheme.colors.colorFeedbackWarning
			}
		};
	}
);
