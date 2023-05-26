import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type ServiceDebitsViewStyleProps = StyledComponentProps & {};

export const ServiceDebitsViewStyle = styled(
  'div'
)<ServiceDebitsViewStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    '.main-container': {
      width: '93%',
      paddingLeft: '3.5%',
      fontFamily: bdTheme.textFont.mainFont,
      color: bdTheme.colors.black,

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

      '.filter-container': {
        width: '33.5rem',
        marginTop: '2.5rem',
      },

      '.subscription-table': {
        marginTop: '2rem',
      },
    },
  };
});
