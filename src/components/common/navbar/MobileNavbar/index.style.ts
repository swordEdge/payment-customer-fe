import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type MobileNavbarComponentStyleProps = StyledComponentProps & {};

export const MobileNavbarComponentStyle = styled(
  'div'
)<MobileNavbarComponentStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;
  return {
    width: '100%',
    height: '4rem',
    borderTopStyle: 'solid',
    borderWidth: '2px',
    borderColor: bdTheme.colors.strokeGray,
    backgroundColor: bdTheme.colors.white,

    '.menu-container': {
      paddingTop: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
  };
});
