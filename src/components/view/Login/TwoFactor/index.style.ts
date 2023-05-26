import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type TwoFactorStyleProps = StyledComponentProps & {};

export const TwoFactorStyle = styled(
  'div'
)<TwoFactorStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    margin: 'auto',
    width: '60%',

    [theme.breakpoints.down('md')]: {
      width: '90%',
    },

    '.back-button': {
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.2rem',
      textTransform: 'none',
      textDecoration: 'none',
      color: theme.colors.black,
      marginBottom: '3rem',
    },

    '.action-title': {
      fontFamily: theme.textFont.mainFont,
      fontWeight: theme.textWeight.semibold,
      fontSize: '1.5rem',
      lineHeight: '1.875rem',
    },

    '.notice-container': {
      marginTop: '0.5rem',
      display: 'flex',

      '.notice-title': {
        fontFamily: theme.textFont.mainFont,
        fontWeight: theme.textWeight.regular,
        fontSize: '1rem',
        lineHeight: '1rem',
      },

      '.email-link': {
        fontFamily: theme.textFont.mainFont,
        fontWeight: theme.textWeight.semibold,
        textDecoration: 'none',
        fontSize: '1rem',
        color: theme.colors.black,

        pre: {
          fontFamily: theme.textFont.mainFont,
          fontWeight: theme.textWeight.semibold,
          marginTop: 0,
        },
      },
    },

    '.verification-container': {
      display: 'flex',
      gap: '4%',
      marginTop: '1rem',

      [theme.breakpoints.down('sm')]: {
        marginTop: '2.5rem',
      },

      '.code-box': {
        // width: "15%",
        textAlign: 'center',
      },

      '.pincode-input-container': {
        width: '30rem',
        display: 'flex',
        justifyContent: 'space-between',

        '.pincode-input-text': {
          borderRadius: '5px',
          border: '2px solid #999999 !important',
          display: 'flex',
          fontFamily: theme.textFont.mainFont,
          fontWeight: theme.textWeight.regular,
          fontSize: '18px',
          width: '60px !important',
          height: '60px !important',

          [theme.breakpoints.down('sm')]: {
            width: '50px !important',
            height: '50px !important',
          },
        },
      },
    },

    '.resendLink-container': {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
    },

    '.verifyButton-container': {
      cursor: 'pointer',
      marginTop: '3rem',
      width: '100%',
    },

    ".submit-button": {
      marginTop: "2rem",
      width: "15rem",
      height: "4rem",

      [bdTheme.breakpoints.down("md")]: {
        width: "100%",
      },
    },


    '.continue-button': {
      marginTop: '2rem',
      width: '15rem',
      height: '4rem',
      backgroundColor: theme.colors.normalGray,
      borderTopLeftRadius: '50px',
      borderTopRightRadius: '50px',
      borderBottomLeftRadius: '50px',
      borderBottomRightRadius: '50px',
      textTransform: 'none',
      fontSize: '1rem',
      fontWeight: theme.textWeight.regular,
      color: theme.colors.white,

      [theme.breakpoints.down('md')]: {
        width: '100%',
      },

      '&:hover': {
        backgroundColor: theme.colors.normalGray,
      },
    },

    '.color-gray': {
      color: theme.colors.normalGray,
    },

    '.color-white': {
      color: theme.colors.white,
    },

    ".color-blue": {
      color: bdTheme.colors.activeConfirmButtonBgColor,
    },

    ".fontweight-bold": {
      fontWeight: bdTheme.textWeight.semibold,
    },

    '.bg-primary': {
      backgroundColor: theme.colors.primary,
    },

    '.bg-red': {
      backgroundColor: theme.colors.red,
    },

    '.gap-bottom-1rem': {
      marginBottom: '1rem'
    },

    '.resend-link:hover': {
      cursor: 'pointer',
    },
  };
});
