import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type PersonalInfoViewStyleProps = StyledComponentProps & {};

export const PersonalInfoViewStyle = styled('div')<PersonalInfoViewStyleProps>(
  ({ theme }) => {
    const bdTheme = theme as BDTheme;

    return {
      fontFamily: bdTheme.textFont.mainFont,
      color: bdTheme.colors.balck,

      '.mobile-header-container': {
        display: 'none',
        [bdTheme.breakpoints.down('md')]: {
          display: 'block',
        },
      },

      '.mobile-header-button': {
        padding: '0.8rem 1.3rem',
        // backgroundColor: bdTheme.colors.disabledBackgroundColor,
        color: bdTheme.colors.white,
        fontSize: '1rem',
      },

      '.data-container': {},

      '.personal-detail-email-phone': {
        display: 'flex',

        [theme.breakpoints.down('md')]: {
          display: 'flex',
          flexDirection: 'column',
        },
      },

      '.personal-detail': {
        width: '60%',

        [theme.breakpoints.down('md')]: {
          width: '100%',
          boxSizing: 'border-box',
          padding: '1rem 1.5rem',
        },

        '.detail-container': {
          display: 'flex',

          [bdTheme.breakpoints.down('md')]: {
            flexDirection: 'column',
          },

          '.avatar-container': {
            flex: '0 0 120px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            columnGap: '16px',

            [bdTheme.breakpoints.down('md')]: {
              flexDirection: 'row',
              alignItems: 'center',
            },

            '.avatar': {
              width: '96px',
              height: '96px',
            },

            '.upload-button': {
              borderRadius: '28px',
              backgroundColor: bdTheme.colors.white,
              color: bdTheme.colors.textBlack,
              paddingTop: '8px',
              paddingBottom: '8px',
              textAlign: 'center',
              width: '100%',
              border: `1px solid ${bdTheme.colors.black}`,
              lineHeight: '21px',
              fontSize: '14px',
              fontWeight: bdTheme.textWeight.regular,
              cursor: 'pointer',

              [bdTheme.breakpoints.down('md')]: {
                width: '8rem',
                marginTop: '0rem !important',
              },
            },
          },

          '.info-container': {
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',

            '.name-container': {
              display: 'flex',
              columnGap: '8px',

              [bdTheme.breakpoints.down('md')]: {
                marginBottom: '0.5rem',
              },
            },
          },
        },

        '.message-container': {
          lineHeight: '150%',
          fontSize: '14px',
          fontWeight: '500',
          display: 'flex',
          columnGap: '8px',

          [bdTheme.breakpoints.down('md')]: {
            flexDirection: 'column',
          },

          '.text-black': {
            color: bdTheme.colors.textBlack,
          },

          '.text-blue': {
            color: bdTheme.colors.blue,
          },
        },
      },

      '.email-phone': {
        width: '40%',

        [bdTheme.breakpoints.down('md')]: {
          width: '100%',
          boxSizing: 'border-box',
          padding: '0rem 1.5rem',
        },
      },

      '.address': {
        width: '100%',

        [bdTheme.breakpoints.down('md')]: {
          boxSizing: 'border-box',
          padding: '0rem 1.5rem',
        },
      },

      '.header': {
        lineHeight: '150%',
        fontWeight: '700',
        fontSize: '20px',
        color: bdTheme.colors.textBlack,

        // [theme.breakpoints.down('md')]: {
        //   display: 'none'
        // }
      },

      '.content': {
        padding: '32px',
        marginTop: '16px',
        borderRadius: '12px',
        border: '1px solid #D1D4E3',

        [theme.breakpoints.down('md')]: {
          // borderStyle: 'none',
          width: '100%',
          boxSizing: 'border-box',
          padding: '0rem !important',
          border: 'none',
        },
      },

      '.margin-top-8': {
        marginTop: '8px',
      },

      '.margin-top-16': {
        marginTop: '16px',
      },

      '.margin-top-32': {
        marginTop: '32px',
      },

      '.column-gap-32': {
        columnGap: '32px',
      },

      '.column-gap-8': {
        columnGap: '8px',
      },

      '.bg-light-green': {
        backgroundColor: bdTheme.colors.lightGreen
      },

      '.bg-red': {
        backgroundColor: bdTheme.colors.red
      },

      '.color-white': {
        color: bdTheme.colors.white
      },

      '.color-black': {
        color: bdTheme.colors.black
      },

      '.margin-bottom-gap': {
        marginBottom: '1rem'
      },

      '.flex': {
        display: 'flex',

        [bdTheme.breakpoints.down('md')]: {
          display: 'block',
        },
      },

      '.button-container': {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'end',
        float: 'right',
        columnGap: '8px',

        [theme.breakpoints.down('md')]: {
          // display: 'none',
          float: 'left',
          padding: '0rem 1.5rem',
          width: '100%',
          boxSizing: 'border-box'
        },

        '.button-item': {
          padding: '8px 16px',

          [theme.breakpoints.down('md')]: {
            // display: 'none',
            padding: '16px 16px',
            width: '50%',
            boxSizing: 'border-box'
          },
        },
      },
    };
  }
);
