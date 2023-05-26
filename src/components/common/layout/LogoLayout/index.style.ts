import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type LogoLayoutComponentStyleProps = StyledComponentProps & {};

export const LogoLayoutComponentStyle = styled(
  'div'
)<LogoLayoutComponentStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    display: 'flex',
    justifyContent: 'right',
    position: 'absolute',
    width: '100%',
    height: '100%',

    '.link': {
      textDecoration: 'none',

      '&:hover': {
        outline: 'none',
        borderStyle: 'none',
      },
    },

    '.saas-logo-container': {
      width: '40%',

      [bdTheme.breakpoints.down('sm')]: {
        // width: '100%',
        display: 'none',
      },
      [bdTheme.breakpoints.down('md')]: {
        display: 'none',
      },
    },

    '.form-container': {
      width: '60%',
      paddingTop: '5%',
      backgroundColor: bdTheme.colors.landingBgColor,

      [bdTheme.breakpoints.down('md')]: {
        width: '100%',
      },

      '.link': {
        textDecoration: 'none',

        '&:hover': {
          outline: 'none',
          borderStyle: 'none',
        },
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
