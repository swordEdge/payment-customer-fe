import { StyledComponentProps, styled } from "@mui/material";

import { BDTheme } from "styles";

type NotificationComponentStyleProps = StyledComponentProps & {};

export const NotificationComponentStyle = styled(
	"div"
)<NotificationComponentStyleProps>(({ theme }) => {
	const bdTheme = theme as BDTheme;

	return {
		".notification-main": {
			width: "100%",
			borderRadius: "15px",
			boxSizing: "border-box",
			padding: "0.8rem 1.5rem 0.8rem 1.5rem",
			fontFamily: bdTheme.textFont.mainFont,
			display: "flex",
			alignItems: "center",

			".notification-content": {
				display: "grid",

				".notification-title": {
					fontWeight: bdTheme.textWeight.semibold,
					fontSize: "1.1rem",
					marginBottom: "0.5rem",
				},
			},
		},

		".front-icon": {
			marginRight: "1rem",
			cursor: "pointer",
		},

		".back-icon": {
			right: 0,
			marginLeft: "0.5rem",
			cursor: "pointer",
		},
	};
});
