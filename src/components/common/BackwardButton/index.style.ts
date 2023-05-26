import { StyledComponentProps, styled } from "@mui/material";

import { BDTheme } from "styles";

type BackwardButtonComponentStyleProps = StyledComponentProps;

export const BackwardButtonComponentStyle = styled(
	"div"
)<BackwardButtonComponentStyleProps>(({ theme }) => {
	const bdTheme = theme as BDTheme;

	return {
		".back-button-container": {
			padding: "16px 8px",

			".back-icon": {
				fontSize: "18px",
				fontWeight: bdTheme.textWeight.semibold,
			},

			display: "flex",
			alignItems: "center",
			columnGap: "20px",
			fontSize: "16px",
			color: bdTheme.colors.black,
		},
	};
});
