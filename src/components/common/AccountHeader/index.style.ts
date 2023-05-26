import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type AccountHeaderComponentStyleProps = StyledComponentProps & {};

export const AccountHeaderComponentStyle = styled(
  'div'
)<AccountHeaderComponentStyleProps>(({ theme }) => {
  const bdTheme = theme as BDTheme;

  return {
    padding: '0.5rem 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    width: '100%',
    backgroundColor: bdTheme.colors.white,
    zIndex: 100,
    left: 0,
    top: 0,
    boxSizing: 'border-box',

    '.logo-box': {
      width: '12rem',
      height: '3rem',
      backgroundImage: `url(${bdTheme.primaryLogoImg})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    },

    '.right-container': {
      display: 'flex',
      alignItems: 'center',

      '.avatar': {
        marginLeft: '1.5rem',
        width: '3rem',
        height: '3rem',
      },
    },
  };
});
