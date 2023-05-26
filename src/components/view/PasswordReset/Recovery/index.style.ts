import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type RecoveryStyleProps = StyledComponentProps & {};

export const RecoveryStyle = styled('div')<RecoveryStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;
    return {
      margin: 'auto',
      width: '60%',

      [bdTheme.breakpoints.down('sm')]: {
        width: '85%',
      },

      '.page-title': {
        fontFamily: bdTheme.textFont.mainFont,
        fontWeight: bdTheme.textWeight.regular,
        fontSize: '1.2rem',
        lineHeight: '1.5rem',
      },

      '.action-title': {
        marginTop: '1rem',
        fontFamily: bdTheme.textFont.mainFont,
        fontWeight: bdTheme.textWeight.semibold,
        fontSize: '1.5rem',
        lineHeight: '1.875rem',
      },

      '.alert-container': {
        position: 'fixed',
        top: 0,
        left: '45%',
        width: '55%',
        height: '2.5rem',
        backgroundColor: bdTheme.colors.red,
        color: bdTheme.colors.white,
        fontFamily: bdTheme.textFont.mainFont,
        fontWeight: bdTheme.textWeight.regular,
        fontSize: '0.85rem',
        lineHeight: '1rem',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },

      '.input-container': {
        marginTop: '2rem',

        '.individual-input': {
          marginTop: '1.5rem',
        },
      },

      // '.requestButton-container': {
      //   marginTop: '2rem',
      //   width: '100%',
      // },
      '.recoveryButton-container': {
        marginTop: '2rem',
        width: '100%',

        '.recovery-button-item': {
          width: '100%',
          backgroundColor: bdTheme.colors.accentBlue,
          height: '3rem',
          fontFamily: bdTheme.textFont.mainFont,
          fontWeight: bdTheme.textWeight.light,
          fontSize: '1rem',
          color: bdTheme.colors.white,
          borderRadius: '0.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },

      '.divider-box': {
        marginTop: '2rem',
      },

      '.loginLink-container': {
        marginTop: '2rem',
        textAlign: 'center',

        '.login-link': {
          fontFamily: bdTheme.textFont.mainFont,
          fontWeight: bdTheme.textWeight.regular,
          textDecoration: 'none',
          fontSize: '1rem',
          color: bdTheme.colors.logoBlue,
          cursor: 'pointer',

          ':active': {
            transform: 'scale(1.01)',
            color: '#29879FF',
          },
        },
      },
    };
  }
);
