import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type ServiceReferralsViewStyleProps = StyledComponentProps & {};

export const ServiceReferralsViewStyle = styled(
  'div'
)<ServiceReferralsViewStyleProps>(({ theme }: any) => {
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
    },
  };
});
