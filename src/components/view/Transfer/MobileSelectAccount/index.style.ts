import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type MobileSelectAccountViewStyleProps = StyledComponentProps & {};

export const MobileSelectAccountViewStyle = styled(
  'div'
)<MobileSelectAccountViewStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: bdTheme.colors.simplecGrey,
    zIndex: 100,

    '.mobile-header-container': {
      display: 'none',
      [bdTheme.breakpoints.down('md')]: {
        display: 'block',
      },
    },

    '.account-item': {
      width: '100%',
      padding: '0 1rem',
      display: 'flex',
      height: '3.5rem',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '1.2rem',
      fontFamily: bdTheme.textFont.mainFont,
      backgroundColor: bdTheme.colors.white,
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px',
      borderBottomColor: bdTheme.colors.strokeGray,
      boxSizing: 'border-box'
    }
  }
});
