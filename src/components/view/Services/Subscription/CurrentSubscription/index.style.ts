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
      
      ".title-container": {
        marginBottom: "19.5px",
        display: "flex",
        alignItems: "center",

        ".title-div": {
          width: "200px",
          height: "30px",
          fontSize: "20px",
          fontWeight: "bold",
          display: "inline-block",
        },

        ".change-btn-div": {
          display: "flex",
          marginLeft: "auto",
          border: "1px black solid",
          borderRadius: "20px",
          padding: "10px",
          alignItems: "center",
          cursor: "pointer",

          img: {
            marginRight: "5px",
          },
        },
      },

      ".cards-container": {
        height: "5rem",
      },

      ".subscription-table": {
        marginTop: "2rem",
      },
    },
  };
});
