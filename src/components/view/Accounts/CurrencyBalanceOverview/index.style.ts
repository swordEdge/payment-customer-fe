import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type CurrencyBalanceOverviewViewStyleProps = StyledComponentProps & {};

export const CurrencyBalanceOverviewViewStyle = styled(
  'div'
)<CurrencyBalanceOverviewViewStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    width: '100%',
    height: '100%',
    paddingTop: '1.6rem',

    '.title-container': {
      width: '100%',
      height: '4rem',
      display: 'flex',
      justifyContent: 'space-between',

      '.title-typo': {
        fontFamily: theme.textFont.mainFont,
        fontWeight: theme.textWeight.semibold,
        color: theme.colors.black,
        fontSize: '1.2rem',
      },

      '.action-bar-container': {
        marginLeft: '1rem',
        width: '8rem',
        height: '2rem',
        display: 'flex',
        justifyContent: 'right',

        '.switch-currency': {
          marginTop: 6,
          width: 40,
          height: 18,
          padding: 0,

          '.MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '200ms',

            '&.Mui-checked': {
              transform: 'translateX(22px)',
              color: '#fff',
              '& + .MuiSwitch-track': {
                backgroundColor: theme.colors.accentBlue,
                opacity: 1,
                border: 0,
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
              },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
              color: '#33cf4d',
              border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
              color: theme.colors.green,
            },
          },

          '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 14,
            height: 14,
          },
          '& .MuiSwitch-track': {
            borderRadius: 22 / 2,
            backgroundColor: theme.colors.green,
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
              duration: 500,
            }),
          },
        },

        '.currency-typo': {
          marginLeft: '0.5rem',
          paddingTop: '4px',
          fontFamily: theme.textFont.mainFont,
          fontWeight: theme.textWeight.light,
          color: theme.colors.black,
          fontSize: '1rem',
        },

        '.add-button-container': {
          minWidth: '25px',
          padding: 0,
          marginTop: '3px',
          marginLeft: '1.5rem',
          height: '25px',
          width: '25px',
          backgrondColor: theme.colors.white,
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: theme.colors.textGray2,
          borderRadius: '7px',

          [theme.breakpoints.down('sm')]: {
            display: 'none',
          },
        },
      },
    },

    '.card-container': {
      marginTop: '-1rem',
      width: '100%',
      height: '9.5rem',
      backgroundColor: theme.colors.overviewLogo,
      borderRadius: '15px',
      display: 'flex',

      '.left-button': {
        width: '1.2rem',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',

        '.backward-icon': {
          color: theme.colors.white,
          fontSize: '1rem',
        },
      },

      '.card-array-container': {
        width: '100%',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        display: 'flex',

        '.each-card': {
          width: '24%',
          height: '100%',

          '.add-card': {
            height: 'calc(100% - 1rem)',
            borderRadius: '10px',
            backgroundColor: theme.colors.white,
            padding: '0.5rem',
            cursor: 'pointer',

            '.add-container': {
              height: '100%',
              borderRadius: '10px',
              borderStyle: 'dashed',
              borderWidth: '1px',
              borderColor: theme.colors.accentBlue,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '3rem',
            },
          },
        },
      },

      '.right-button': {
        width: '1.2rem',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',

        '.forward-icon': {
          color: theme.colors.white,
          fontSize: '1rem',
        },
      },
    },
  };
});
