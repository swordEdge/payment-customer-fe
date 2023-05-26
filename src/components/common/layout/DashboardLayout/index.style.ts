import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type DashboardLayoutComponentStyleProps = StyledComponentProps & {};

export const DashboardLayoutComponentStyle = styled(
  'div'
)<DashboardLayoutComponentStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    display: 'flex',

    '.navbar-container': {
      width: '16%',
      // height: '100%',
      backgroundColor: bdTheme.colors.accentBlue,

      [bdTheme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },

    '.mobile-navbar-container': {
      width: '100%',
      position: 'fixed',
      bottom: 0,
      zIndex: 100,

      [bdTheme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },

    '.main-container': {
      width: '84%',
      height: '100%',

      [bdTheme.breakpoints.down('sm')]: {
        width: '100%',
      },

      '.header-container': {
        width: '100%',
        height: '5.5rem',

        [bdTheme.breakpoints.down('sm')]: {
          display: 'none',
        },
      },

      '.body-container': {
        width: '100%',
        height: '100%',
      },
    },
    'input:-webkit-autofill': {
      transition:
        'background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s',
      transitionDelay: 'background-color 5000s, color 5000s',
    },

    'input:-webkit-autofill:hover': {
      transition:
        'background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s',
      transitionDelay: 'background-color 5000s, color 5000s',
    },
    'input:-webkit-autofill:focus': {
      transition:
        'background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s',
      transitionDelay: 'background-color 5000s, color 5000s',
    },
    'input:-webkit-autofill:active': {
      transition:
        'background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s',
      transitionDelay: 'background-color 5000s, color 5000s',
    },
  };
});
