import { StyledComponentProps, styled } from "@mui/material";

import { BDTheme } from "styles";
import { PlatformType } from "types";

type LogoComponentStyleProps = StyledComponentProps & {
	platformType: PlatformType;
};

export const LogoComponentStyle = styled("div")<LogoComponentStyleProps>(
	({ theme, platformType }) => {
		const bdTheme = theme as BDTheme;

		return {
			backgroundImage:
				platformType === "Personal"
					? `url(${bdTheme.primaryCoverImg})`
					: `url(${bdTheme.primaryBusinessCoverImg})`,
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",
			backgroundSize: "cover",
			width: "100%",
			height: "100%",
			display: "flex",
			alignItems: "center",
			fontFamily: bdTheme.textFont.mainFont,

			[bdTheme.breakpoints.down("sm")]: {
				alignItems: "normal",
			},
		};
	}
);
