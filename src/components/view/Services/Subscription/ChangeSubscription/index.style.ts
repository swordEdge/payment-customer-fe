import { StyledComponentProps, styled } from "@mui/material";

import { BDTheme } from "styles";

type ServiceSubscriptionViewStyleProps = StyledComponentProps & {};

export const ServiceSubscriptionViewStyle = styled(
  "div"
)<ServiceSubscriptionViewStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
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
    ".main-container": {
      width: "93%",
      paddingLeft: "3.5%",
      fontFamily: bdTheme.textFont.mainFont,
      color: bdTheme.colors.black,

      ".back-button": {
        marginTop: "1.5rem",
        fontWeight: bdTheme.textWeight.regular,
        display: "flex",
        cursor: "pointer",
        color: bdTheme.colors.black,
        textDecoration: "none",
      },

      ".page-title-container": {
        marginTop: "1.2rem",
        marginBottom: "35.5px",
        width: "38rem",
        display: "flex",
        justifyContent: "space-between",
        fontFamily: bdTheme.textFont.mainFont,
        fontWeight: bdTheme.textWeight.regular,
        fontSize: "32px",
      },

      ".cards-container": {
        height: "5rem",
      },

      ".subscription-table": {
        marginTop: "2rem",
      },

      ".cards-wrapper": {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      },
    },

    ".button-container": {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "end",
      // float: "right",
      position: "absolute",
      right: "60px",
      columnGap: "8px",

      [bdTheme.breakpoints.down("md")]: {
        display: "none",
      },

      ".button-item": {
        padding: "16px",
      },
    },
    ".change-subscription-page": {
      ".subscription-card-container": {
        margin: "10px",
        width: "48%",
      },
    },
  };
});
