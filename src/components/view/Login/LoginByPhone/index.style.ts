import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type LoginByPhoneViewStyleProps = StyledComponentProps & {};

export const LoginByPhoneViewStyle = styled('div')<LoginByPhoneViewStyleProps>(({ theme }: any) => {
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
      color: bdTheme.colors.black,
      marginBottom: '3rem',
    },

    '.each-field': {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
    },

    '.phone-input-container': {
      width: '55%',
      boxSizing: 'border-box',

      [bdTheme.breakpoints.down('md')]: {
        width: '100%',
        boxSizing: 'border-box'
      }
    },

    '.text-input': {
      outline: 'none',
      width: '23rem',
      height: '2rem',

      '.MuiTextField-root': {
        borderBottom: 'none',
        margin: 0,
      },

      '.MuiFormLabel-root': {
        '&::active': {
          fontSize: '0.5rem',
        },
      },

      '.MuiFilledInput-root': {
        borderRadius: '15px',
        borderBottom: 'none',

        '&:hover::before': {
          borderBottom: 'none !important',
          outline: 'none',
        },

        '&::before': {
          borderBottom: 'none',
        },

        '&::after': {
          borderBottom: 'none',
        },
      },
    },

    '.title-typo': {
      fontFamily: theme.textFont.mainFont,
      fontWeight: theme.textWeight.semibold,
      fontSize: '1.8rem',
      color: theme.colors.black,
      textAlign: 'center',
      display: 'flex',

      [theme.breakpoints.down('md')]: {
        fontSize: '1.5rem',
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

    '.email-phone': {
      marginTop: '2rem',
      display: 'flex',
      alignItems: 'center',

      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'start',
        paddingLeft: '0rem',
      },

      '.left-container': {
        width: '55%',
      },

      '.phone-link': {
        marginLeft: '1rem',
        fontFamily: theme.textFont.mainFont,
        color: theme.colors.primary,
        textDecoration: 'none',

        [theme.breakpoints.down('md')]: {
          marginTop: '1.5rem',
          marginLeft: '0rem',
        },
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

    '.mobile-align-center': {
      [theme.breakpoints.down('md')]: {
        margin: 'atuo',
      },
    },

    '.main-font': {
      fontFamily: theme.textFont.mainFont,
    },

    '.color-green': {
      color: theme.colors.normalGreen,
    },

    '.color-gray': {
      color: theme.colors.normalGray,
    },

    '.color-white': {
      color: theme.colors.white,
    },

    '.color-blue': {
      color: theme.colors.primary,
    },

    '.color-feed-red': {
      color: bdTheme.colors.colorFeedbackWarning
    },

    '.bg-primary': {
      backgroundColor: theme.colors.primary,

      '&:hover': {
        backgroundColor: theme.colors.primary,
      },
    },

    '.margin-left-right': {
      marginLeft: '0.3rem',
      marginRight: '0.3rem',
    },

    '.fontWeight-semibold': {
      fontWeight: theme.textWeight.semibold,
    },

    '.no-underline': {
      textDecoration: 'none',
    },
  };
});
