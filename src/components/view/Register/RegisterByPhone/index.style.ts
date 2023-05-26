import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type RegisterByPhoneViewStyleProps = StyledComponentProps & {};

export const RegisterByPhoneViewStyle = styled('div')<RegisterByPhoneViewStyleProps>(
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

      ".color-white": {
        color: bdTheme.colors.white,
      },

      ".bg-red": {
        backgroundColor: bdTheme.colors.red,
      },

      ".each-field": {
        width: "100%",
        display: "flex",
        alignItems: "center",
      },

      '.phone-input-container': {
        width: '55%',
        boxSizing: 'border-box',

        [bdTheme.breakpoints.down('md')]: {
          width: '100%',
          boxSizing: 'border-box'
        }
      },

      ".title-typo": {
        fontFamily: bdTheme.textFont.mainFont,
        fontWeight: bdTheme.textWeight.semibold,
        fontSize: "1.8rem",
        color: bdTheme.colors.black,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        columnGap: "8px",

        [bdTheme.breakpoints.down("md")]: {
          fontSize: "1.5rem",
        },
      },

      ".comment-typo": {
        display: "flex",
        justifyContent: "center",
        fontFamily: bdTheme.textFont.mainFont,
        fontSize: "1rem",
        color: bdTheme.colors.black,

        [bdTheme.breakpoints.down("md")]: {
          fontSize: "0.8rem",
        },
      },

      ".email-phone": {
        marginTop: "2rem",
        display: "flex",
        alignItems: "center",

        [bdTheme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "start",
          paddingLeft: "0rem",
        },

        ".left-container": {
          width: "55%",

          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
        },

        ".phone-link": {
          marginLeft: "1rem",
          fontFamily: bdTheme.textFont.mainFont,
          color: bdTheme.colors.primary,
          textDecoration: "none",

          [bdTheme.breakpoints.down("md")]: {
            marginTop: "1.5rem",
            marginLeft: "0rem",
          },
        },
      },

      ".password-container": {
        width: "100%",
        marginTop: "2rem",
        display: "flex",

        [bdTheme.breakpoints.down("md")]: {
          flexDirection: "column",
        },

        ".left-container": {
          width: "55%",

          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
        },

        ".right-container": {
          marginLeft: "1rem",

          [bdTheme.breakpoints.down("md")]: {
            marginTop: "1rem",
          },
        },
      },

      ".rule-container": {
        marginTop: "1.5rem",

        ".MuiCheckbox-root": {
          borderRadius: "10px",
        },
      },

      ".text-input": {
        outline: "none",
        width: "23rem",
        height: "2rem",

        ".MuiTextField-root": {
          borderBottom: "none",
          margin: 0,
        },

        ".MuiFormLabel-root": {
          "&::active": {
            fontSize: "0.5rem",
          },
        },

        ".MuiFilledInput-root": {
          borderRadius: "15px",
          borderBottom: "none",

          "&:hover::before": {
            borderBottom: "none !important",
            outline: "none",
          },

          "&::before": {
            borderBottom: "none",
          },

          "&::after": {
            borderBottom: "none",
          },
        },
      },

      ".submit-button": {
        marginTop: "2rem",
        width: "15rem",
        height: "4rem",

        [bdTheme.breakpoints.down("md")]: {
          width: "100%",
        },
      },

      ".mobile-align-center": {
        [bdTheme.breakpoints.down("md")]: {
          margin: "atuo",
        },
      },

      ".main-font": {
        fontFamily: bdTheme.textFont.mainFont,
      },

      ".color-green": {
        color: bdTheme.colors.normalGreen,
      },

      ".color-gray": {
        color: bdTheme.colors.normalGray,
      },

      ".color-blue": {
        color: bdTheme.colors.primary,
      },

      '.color-feed-red': {
        color: bdTheme.colors.colorFeedbackWarning
      },

      ".bg-primary": {
        backgroundColor: bdTheme.colors.primary,

        "&:hover": {
          backgroundColor: bdTheme.colors.primary,
        },
      },

      ".margin-left-right": {
        marginLeft: "0.3rem",
        marginRight: "0.3rem",
      },

      ".fontWeight-semibold": {
        fontWeight: bdTheme.textWeight.semibold,
      },

      ".no-underline": {
        textDecoration: "none",
      },
    };
  }
);
