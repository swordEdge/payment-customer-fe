import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type ServiceOrdersViewStyleProps = StyledComponentProps & {};

export const ServiceOrdersViewStyle = styled(
  'div'
)<ServiceOrdersViewStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    '.mobile-header-container': {
      display: 'none',
      [bdTheme.breakpoints.down('md')]: {
        display: 'block',
      },
    },

    '.mobile-main-container': {
      display: 'none',

      [bdTheme.breakpoints.down('md')]: {
        marginTop: '8rem',
        display: 'block',
        height: '100vh',
        backgroundColor: bdTheme.colors.cGrey,
      },
    },

    '.main-container': {
      width: '93.5%',
      paddingLeft: '3.5%',
      fontFamily: bdTheme.textFont.mainFont,
      color: bdTheme.colors.black,

      [theme.breakpoints.down('md')]: {
        display: 'none',
      },

      '.back-button': {
        marginTop: '1.5rem',
        fontWeight: bdTheme.textWeight.regular,
        display: 'flex',
        cursor: 'pointer',
        color: bdTheme.colors.black,
        textDecoration: 'none',
      },

      '.title-container': {
        marginTop: '1.2rem',
        width: '100%',
        height: '3rem',
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: bdTheme.textFont.mainFont,
        fontWeight: bdTheme.textWeight.regular,
        color: bdTheme.colors.black,
        fontSize: '1.2rem',
      },

      '.account-container': {
        height: '4.5rem',
      },

      '.order-table': {
        marginTop: '2rem',

        '.table-title': {
          fontSize: '1rem',
        },
      },
    },
  };
});
