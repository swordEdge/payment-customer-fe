import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type AccountInfoViewStyleProps = StyledComponentProps & {};

export const AccountInfoViewStyle = styled('div')<AccountInfoViewStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;

    return {
      '.title-container': {
        width: '100%',
        height: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        [bdTheme.breakpoints.down('md')]: {
          display: 'none'
        },

        '.title-typo': {
          fontFamily: bdTheme.textFont.mainFont,
          fontWeight: bdTheme.textWeight.semibold,
          color: bdTheme.colors.textBlack,
          fontSize: '1.4rem',
        },

        '.action-bar-container': {
          marginLeft: '1rem',
          height: '2rem',
          display: 'flex',
          gap: '10px',
          alignItems: 'center',

          '.close-button': {
            borderRadius: '17px',
            height: '2.3rem',
            borderColor: '#D1D4E3',
            backgroundColor: bdTheme.colors.white,
            color: bdTheme.colors.textBlack,
            textTransform: 'none',
            fontSize: '0.8rem',
            display: 'flex',
            gap: '3px',
            alignItems: 'center',
          },
        },
      },

      '.card-container': {
        marginTop: '1rem',
        width: '100%',
        height: '9rem',
        backgroundColor: bdTheme.colors.btnLogo,
        borderRadius: '15px',
        display: 'flex',

        [bdTheme.breakpoints.down('md')]: {
          height: '15rem',
        },

        '.card-array-container': {
          width: '100%',
          padding: '0.5rem',
          display: 'flex',

          '.balance-card': {
            backgroundColor: bdTheme.colors.white,
            borderRadius: '10px',

            '.card-header': {
              paddingLeft: '1.8rem',
              color: '#7F818A',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'end',
              height: '30%',

              [bdTheme.breakpoints.down('md')]: {
                height: '5rem',
                alignItems: 'center',
                color: bdTheme.colors.black
              }
            },

            '.card-content': {
              paddingLeft: '1.8rem',
              height: '40%',
              color: bdTheme.colors.textBlack,
              fontSize: '1.7rem',
              fontWeight: bdTheme.textWeight.semibold,
              display: 'flex',
              alignItems: 'center',

              [bdTheme.breakpoints.down('md')]: {
                height: '3rem',
                alignItems: 'start',
              },

              '.currency-unit': {
                marginTop: '0.7rem',
                marginLeft: '1rem',
                fontSize: '1rem',

                [bdTheme.breakpoints.up('md')]: {
                  display: 'none',
                }
              }
            },

            '.card-footer': {
              paddingLeft: '1.8rem',
              color: bdTheme.colors.textBlack,
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'start',
              height: '30%',

              [bdTheme.breakpoints.down('md')]: {
                display: 'none'
              }
            },

            '.detail-info': {
              display: 'flex',
              height: '5rem',
              padding: '0 2rem',

              [bdTheme.breakpoints.up('md')]: {
                display: 'none'
              },

              '.each-info': {
                display: 'flex',
                width: '50%',
                justifyContent: 'space-evenly',
                flexDirection: 'column',
                fontSize: '1.2rem',
                fontWeight: bdTheme.textWeight.regular
              }
            }
          },

          '.detail-card': {
            backgroundColor: bdTheme.colors.white,
            borderRadius: '10px',

            [bdTheme.breakpoints.down('md')]: {
              display: 'none'
            },

            '.card-header': {
              paddingLeft: '1.8rem',
              paddingRight: '1.8rem',
              color: '#7F818A',
              fontSize: '1.1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'end',
              height: '30%',

              '.copy-content': {
                cursor: 'pointer',

                ':hover': {
                  transform: 'scaleX(1.1)',
                },

                ':active': {
                  transform: 'scale(1.2)',
                },
              },
            },

            '.card-content': {
              height: '40%',
              display: 'flex',
              flexDirection: 'column',
              gap: '7px',
              paddingLeft: '1.8rem',
              marginTop: '10px',
              fontSize: '1rem',
              color: bdTheme.colors.textBlack,
            },

            '.card-footer': {
              paddingLeft: '1.8rem',
              color: bdTheme.colors.textBlack,
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'start',
              height: '30%',
            },
          },
        },
      },
    };
  }
);
