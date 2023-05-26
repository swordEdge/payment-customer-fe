import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type DesktopNavbarButtonComponentStyleProps = StyledComponentProps & {};

export const DesktopNavbarButtonComponentStyle = styled(
  'div'
)<DesktopNavbarButtonComponentStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    width: '100%',
    height: '100%',
    cursor: 'pointer',

    img: {
      paddingLeft: '1.3rem',
      width: '1.4rem',
      height: '1.4rem',
    },

    '.inactive': {
      width: '100%',
      height: '100%',
      color: bdTheme.colors.white,
      display: 'flex',
      alignItems: 'center',
      borderRadius: '0.5rem',
    },

    '.active': {
      width: '100%',
      height: '100%',
      backgroundColor: bdTheme.colors.white,
      color: bdTheme.colors.accentBlue,
      display: 'flex',
      alignItems: 'center',
      borderRadius: '0.5rem',
    },

    '.label-container': {
      marginLeft: '1rem',
      fontSize: '1rem',
      fontFamily: bdTheme.textFont.mainFont,
      fontWeight: bdTheme.textWeight.regular,
    },
  };
});
