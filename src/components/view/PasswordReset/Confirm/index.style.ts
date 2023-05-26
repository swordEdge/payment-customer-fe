import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type ConfirmStyleProps = StyledComponentProps & {};

export const ConfirmStyle = styled('div')<ConfirmStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;
    return {
      margin: 'auto',
      width: '60%',

      [theme.breakpoints.down('sm')]: {
        width: '85%',
      },

      '.action-title': {
        fontFamily: theme.textFont.mainFont,
        fontWeight: theme.textWeight.semibold,
        fontSize: '1.5rem',
        lineHeight: '1.875rem',
      },

      '.notice-container': {
        marginTop: '2rem',
        display: 'flex',

        '.notice-title': {
          fontFamily: theme.textFont.mainFont,
          fontWeight: theme.textWeight.regular,
          fontSize: '1rem',
          lineHeight: '1rem',
        },

        '.email-link': {
          fontFamily: theme.textFont.mainFont,
          fontWeight: theme.textWeight.regular,
          textDecoration: 'none',
          fontSize: '1rem',
          color: theme.colors.logoBlue,

          pre: {
            fontFamily: theme.textFont.mainFont,
            fontWeight: theme.textWeight.regular,
            marginTop: 0,
          },
        },
      },

      '.verification-container': {
        display: 'flex',
        gap: '4%',
        marginTop: '1rem',

        '.code-box': {
          width: '15%',
          textAlign: 'center',
        },

        '.pincode-input-container': {
          width: '100%',
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
          },
        },
      },

      '.input-container': {
        marginTop: '2rem',

        '.individual-input': {
          marginTop: '1.5rem',
        },
      },

      '.resetButton-container': {
        marginTop: '2rem',
        width: '100%',

        '.resetButton-button-item': {
          width: '100%',
          backgroundColor: theme.colors.accentBlue,
          height: '3rem',
          fontFamily: theme.textFont.mainFont,
          fontWeight: theme.textWeight.light,
          fontSize: '1rem',
          color: theme.colors.white,
          borderRadius: '0.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },

      '.alert-container': {
        position: 'fixed',
        top: 0,
        left: '45%',
        width: '55%',
        height: '2.5rem',
        backgroundColor: theme.colors.red,
        color: theme.colors.white,
        fontFamily: theme.textFont.mainFont,
        fontWeight: theme.textWeight.regular,
        fontSize: '0.85rem',
        lineHeight: '1rem',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },

      '.resendLink-container': {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px',
        fontSize: '18px',

        '.email-link': {
          cursor: 'pointer',
          color: theme.colors.logoBlue,
          marginLeft: '5px',

          ':active': {
            transform: 'scale(1.01)',
            color: '#29879FF',
          },
        },
      },
    };
  }
);
