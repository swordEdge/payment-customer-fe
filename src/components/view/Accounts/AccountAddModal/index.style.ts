import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type AccountAddModalStyleProps = StyledComponentProps & {};

export const AccountAddModalStyle = styled('div')<AccountAddModalStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;
    return {
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      zIndex: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      [bdTheme.breakpoints.down('sm')]: {
        alignItems: 'end',
      },

      '.modal-container': {
        width: '27rem',
        backgroundColor: bdTheme.colors.white,
        borderRadius: '15px',
        padding: '2rem 1.5rem',
        fontFamily: bdTheme.textFont.mainFont,
        color: bdTheme.colors.textBlack,

        [bdTheme.breakpoints.down('md')]: {
          width: '100%',
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },

        '.modal-header': {
          fontWeight: bdTheme.textWeight.semibold,
          fontSize: '1.2rem',

          [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          },

          '.close-button': {
            display: 'none',

            [theme.breakpoints.down('sm')]: {
              display: 'block',
            },
          },
        },

        '.modal-content': {
          marginTop: '2rem',

          '.content-item': {
            marginTop: '1rem',

            '.color-box-title': {
              paddingLeft: '0.5rem',
            },

            '.color-box': {
              marginTop: '0.1rem',
              fontSize: '0.8rem',

              '.color-item': {
                cursor: 'pointer',
                height: '2rem',
                borderRadius: '7px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            },
          },
        },
        '.modal-footer': {
          marginTop: '3rem',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',

          '.cancel-button': {
            width: '40%',
            height: '2rem',
            backgroundColor: bdTheme.colors.grayLightBlue,
            borderColor: bdTheme.colors.grayLightBlue,
            color: bdTheme.colors.textBlack,
            textTransform: 'none',

            [theme.breakpoints.down('sm')]: {
              display: 'none',
            },
          },

          '.confirm-button': {
            width: '40%',
            height: '2rem',
            backgroundColor: bdTheme.colors.btnLogo,
            color: bdTheme.colors.white,
            textTransform: 'none',

            [theme.breakpoints.down('sm')]: {
              width: '100%',
              height: '2.5rem',
            },
          },
        },
      },

      '.border-active': {
        borderStyle: 'solid',
        borderStyleWidth: '2px',
        borderColor: bdTheme.colors.primary,
        boxSizing: 'border-box'
      },

      '.cCyan': {
        backgroundColor: bdTheme.colors.simplecCyan,
      },

      '.cPink': {
        backgroundColor: bdTheme.colors.simplecPink,
      },

      '.cYellow': {
        backgroundColor: bdTheme.colors.simplecYellow,
      },

      '.cPurple': {
        backgroundColor: bdTheme.colors.simplecPurple,
      },

      '.cBlue': {
        backgroundColor: bdTheme.colors.simplecBlue,
      },

      '.cGreen': {
        backgroundColor: bdTheme.colors.simplecGreen,
      },

      '.cGrey': {
        backgroundColor: bdTheme.colors.simplecGrey,
      },

      '.cRed': {
        backgroundColor: bdTheme.colors.simplecRed,
      },
    };
  }
);
