import { StyledComponentProps, styled } from "@mui/material";

import { BDTheme } from "styles";

type SubscriptionCardViewStyleProps = StyledComponentProps & {
  isSelected?: boolean;
  isCurrent?: boolean;
};

export const SubscriptionCardViewStyle = styled(
  "div"
)<SubscriptionCardViewStyleProps>(({ theme, isSelected, isCurrent }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    // height: "100%",
    borderRadius: "5px",
    borderStyle: "solid",
    borderColor: isSelected ? "#0A33FF" : bdTheme.colors.lightGray,
    borderWidth: "1px",
    padding: "2rem",
    cursor: "pointer",
    display: isCurrent ? "block" : "flex",

    ".radio-btn": {
      padding: "3px 10px",
    },

    th: {
      border: "none",
    },

    td: {
      border: "none",
    },

    ".card-title": {
      fontFamily: bdTheme.textFont.mainFont,
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "20px",
      lineHeight: "150%",
      color: "#030D40",
      marginBottom: "1rem",
    },
    ".card-title.current-subscription": {
      color: "#03B1FF",
    },
    ".card-title.selected-subscription": {
      color: "#0A33FF",
    },

    ".card-description-wrapper": {
      display: "flex",
      ".detail-div": {
        fontFamily: bdTheme.textFont.mainFont,
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "150%",
        marginRight: "122px",
        ".title": {
          color: "#7F818A",
          marginBottom: "8px",
        },
        ".value": {
          color: "#030D40",
        },
      },
    },

    ".table-title": {
      borderRadius: "10px",
      border: "1px solid #D1D4E3",
      marginTop: "32px",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "150%",
      color: "#7F818A",
      padding: "5px",
    },

    ".table-main": {
      borderRadius: "10px",
      border: "1px solid #D1D4E3",
      marginTop: "32px",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "150%",
      color: "#030D40",
      padding: "5px",
      "tbody > tr": {
        borderBottom: "1px solid #D1D4E3",
      },
      "tbody > tr:last-child": {
        borderBottom: "none",
      },
    },
  };
});
