import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type RegisterSuccessStyleProps = StyledComponentProps & {};

export const RegisterSuccessStyle = styled('div')<RegisterSuccessStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;

    return {
      margin: 'auto',
      width: '70%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',

      '.register-success-svg': {
        display: 'flex',
        justifyContent: 'center',
      },

      '.action-title': {
        fontFamily: bdTheme.textFont.mainFont,
        fontWeight: bdTheme.textWeight.semibold,
        fontSize: '26px',
        lineHeight: '1.875rem',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
      },

      '.notice-container': {
        marginTop: '2rem',
        display: 'flex',
        textAlign: 'center',

        '.notice-title': {
          fontFamily: bdTheme.textFont.mainFont,
          fontWeight: bdTheme.textWeight.regular,
          fontSize: '18px',
          lineHeight: '2rem',
        },

        '.email-link': {
          fontFamily: bdTheme.textFont.mainFont,
          fontWeight: bdTheme.textWeight.regular,
          textDecoration: 'none',
          fontSize: '18px',
          color: bdTheme.colors.logoBlue,

          pre: {
            fontFamily: bdTheme.textFont.mainFont,
            fontWeight: bdTheme.textWeight.regular,
            marginTop: 0,
          },
        },
      },

      '.verification-container': {
        display: 'flex',
        gap: '4%',
        marginTop: '18px',

        '.code-box': {
          width: '15%',
          textAlign: 'center',
        },
      },

      '.continueButton-container': {
        cursor: 'pointer',
        marginTop: '3rem',
        width: '100%',
      },
      '.skipButton-container': {
        cursor: 'pointer',
        marginTop: '1rem',
        width: '100%',

        '.css-13ngq26': {
          backgroundColor: 'white',
          color: '#2869FF',

          ':hover': {
            border: '1px solid #EEEEEE',
          },
        },
      },
    };
  }
);
