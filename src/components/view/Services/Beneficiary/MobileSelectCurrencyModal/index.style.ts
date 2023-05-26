import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type MobileSelectCurrencyModalStyleProps = StyledComponentProps & {};

export const MobileSelectCurrencyModalStyle = styled(
  'div'
)<MobileSelectCurrencyModalStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100vh',
    zIndex: 100,
    alignItems: 'center',
    backgroundColor: bdTheme.colors.cGrey,

    [theme.breakpoints.up('md')]: {
      display: 'none',
    },

    '.mobile-header-container': {
      display: 'none',
      [bdTheme.breakpoints.down('md')]: {
        display: 'block',
      },
    },

    '.mobile-container': {
      width: '100%',
      marginTop: '6rem',

      [theme.breakpoints.up('md')]: {
        display: 'none',
      },

      '.divider-css': {
        borderColor: theme.colors.strokeGray,
      },

      '.each-field': {
        width: '100%',
      },
    },
  };
});
