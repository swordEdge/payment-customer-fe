import { StyledComponentProps, styled } from "@mui/material";

import { BDTheme } from "styles";

type ServicesOverviewViewStyleProps = StyledComponentProps & {};

export const ServicesOverviewViewStyle = styled(
  "div"
)<ServicesOverviewViewStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    width: "100%",
    height: "100%",
    ".mobile-header-container": {
      display: "none",
      [bdTheme.breakpoints.down("md")]: {
        display: "block",
      },
    },

    ".mobile-main-container": {
      display: "none",

      [bdTheme.breakpoints.down("md")]: {
        marginTop: "8rem",
        display: "block",
        height: "100vh",
        backgroundColor: bdTheme.colors.cGrey,
      },
    },
    ".card-container": {
      marginTop: "4.5rem",
      width: "100%",
      paddingLeft: "3%",

      [theme.breakpoints.down("md")]: {
        marginTop: "5rem",
      },

      ".purple-card": {
        backgroundColor: bdTheme.colors.purple,
      },

      ".logoBlue-card": {
        backgroundColor: bdTheme.colors.logoBlue,
      },

      ".blue-card": {
        backgroundColor: bdTheme.colors.blue,
      },

      ".green-card": {
        backgroundColor: bdTheme.colors.green,
      },

      ".logoYellow-card": {
        backgroundColor: bdTheme.colors.logoYellow,
      },

      ".accentBlue-card": {
        backgroundColor: bdTheme.colors.accentBlue,
      },
    },
  };
});
