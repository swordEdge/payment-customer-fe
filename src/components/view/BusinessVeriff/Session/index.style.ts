import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type SessionViewStyleProps = StyledComponentProps & {};

export const SessionViewStyle = styled('div')<SessionViewStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;

    return {
      margin: "auto",
      width: "60%",

      [bdTheme.breakpoints.down("md")]: {
        width: "90%",
      },

      ".notification-wrap": {
        marginBottom: "2rem !important",
      },

      ".bg-red": {
        backgroundColor: bdTheme.colors.successTint,
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

      ".action-title": {
        fontFamily: bdTheme.textFont.mainFont,
        fontWeight: bdTheme.textWeight.semibold,
        fontSize: "1.5rem",
        lineHeight: "1.875rem",
      },

      ".submit-button": {
        marginTop: "2rem",
        width: "15rem",
        height: "4rem",

        [bdTheme.breakpoints.down("md")]: {
          width: "100%",
        },
      },

      ".notice-container": {
        marginTop: "0.5rem",
        display: "flex",

        ".notice-title": {
          fontFamily: bdTheme.textFont.mainFont,
          fontWeight: bdTheme.textWeight.regular,
          fontSize: "1rem",
          lineHeight: "1rem",
        },

        ".email-link": {
          fontFamily: bdTheme.textFont.mainFont,
          fontWeight: bdTheme.textWeight.semibold,
          textDecoration: "none",
          fontSize: "1rem",
          color: bdTheme.colors.black,

          pre: {
            fontFamily: bdTheme.textFont.mainFont,
            fontWeight: bdTheme.textWeight.semibold,
            marginTop: 0,
          },
        },
      },

      ".verification-container": {
        display: "flex",
        gap: "4%",
        marginTop: "1rem",

        [bdTheme.breakpoints.down("sm")]: {
          marginTop: "2.5rem",
        },

        ".code-box": {
          // width: "15%",
          textAlign: "center",
        },

        ".pincode-input-container": {
          width: "30rem",
          display: "flex",
          justifyContent: "space-between",

          ".pincode-input-text": {
            borderRadius: "5px",
            border: "2px solid #999999 !important",
            display: "flex",
            fontFamily: bdTheme.textFont.mainFont,
            fontWeight: bdTheme.textWeight.regular,
            fontSize: "18px",
            width: "60px !important",
            height: "60px !important",

            [bdTheme.breakpoints.down("sm")]: {
              width: "50px !important",
              height: "50px !important",
            },
          },
        },
      },

      ".resendLink-container": {
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        columnGap: "0.5rem",
      },

      ".verifyButton-container": {
        cursor: "pointer",
        marginTop: "3rem",
        width: "100%",
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

      ".color-gray": {
        color: bdTheme.colors.normalGray,
      },

      ".color-white": {
        color: bdTheme.colors.white,
      },

      ".color-blue": {
        color: bdTheme.colors.activeConfirmButtonBgColor,
      },

      ".fontweight-bold": {
        fontWeight: bdTheme.textWeight.semibold,
      },

      ".bg-primary": {
        backgroundColor: bdTheme.colors.primary,
      },

      ".resend-link:hover": {
        cursor: "pointer",
      },

      '.ul-list': {
        fontFamily: bdTheme.textFont.mainFont,
        paddingLeft: '2rem',

        '.li': {
          marginTop: '1rem'
        }
      },

      '.veriff-button': {
        width: '20rem',
        maxWidth: '100% !important',

        [bdTheme.breakpoints.down('md')]: {
          width: '100% !important'
        }
      }
    };
  }
);
