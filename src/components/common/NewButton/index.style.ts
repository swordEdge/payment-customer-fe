import { StyledComponentProps, styled } from "@mui/material";

import { BDTheme } from "styles";

type NewButtonComponentStyleProps = StyledComponentProps;

export const NewButtonComponentStyle = styled(
	"button"
)<NewButtonComponentStyleProps>(({ theme, type, disabled }) => {
	const bdTheme = theme as BDTheme;

	return {
		fontFamily: bdTheme.textFont.mainFont,
		fontWeight: bdTheme.textWeight.regular,
		backgroundColor:
			type === "submit"
				? disabled
					? bdTheme.colors.disabledConfirmButtonBgColor
					: bdTheme.colors.activeConfirmButtonBgColor
				: disabled
				? bdTheme.colors.disabledCancelButtonBgColor
				: bdTheme.colors.activeCancelButtonBgColor,
		color:
			type === "submit"
				? disabled
					? bdTheme.colors.disabledConfirmButtonTextColor
					: bdTheme.colors.activeConfirmButtonTextColor
				: disabled
				? bdTheme.colors.disabledCancelButtonTextColor
				: bdTheme.colors.activeCancelButtonTextColor,
		border:
			type === "submit"
				? "none"
				: `1px solid ${
						disabled
							? bdTheme.colors.disabledCancelButtonBorderColor
							: bdTheme.colors.activeCancelButtonBorderColor
				  }`,
		fontSize: "14px",
		borderRadius: "28px",
		borderWidth: "0px",
		cursor: disabled ? "not-allowed" : "pointer",
		boxSizing: "border-box",
		textAlign: "center",

		transition: "all",
		transitionDuration: "1s",

		"&:hover": {
			backgroundColor: disabled
				? bdTheme.colors.disabledConfirmButtonBgColor
				: bdTheme.colors.highlightedConfirmButtonBgColor,
		},
	};
});
