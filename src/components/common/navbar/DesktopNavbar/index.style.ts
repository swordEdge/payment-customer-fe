import styled from '@emotion/styled';
import { BDTheme } from 'styles';

export const DesktopNavbarComponentStyle = styled('div')(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    width: '100%',
    backgroundColor: bdTheme.colors.accentBlue,
    paddingTop: '3.5rem',
    paddingBottom: '2.5rem',

    '.logo-img-container': {
      margin: 'auto',
      width: bdTheme.sidebarLogoWidth,
      height: bdTheme.sidebarLogoHeight,
      backgroundImage: `url('${bdTheme.sidebarLogoImg}')`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      zIndex: 100,
    },

    '.button-container': {
      marginTop: '2.8rem',
      width: '100%',
      paddingLeft: '7.5%',

      '.each-button': {
        marginTop: '1.2rem !important',
        width: '85%',
        height: '3.3rem',
      },
    },

    '.divider-container': {
      marginTop: '3rem',
      borderColor: bdTheme.colors.grayBlue,
    },

    '.help-box-container': {
      width: '85%',
      paddingLeft: '7.5%',
      marginTop: '8rem',
    },

    '.platform-type': {
      margin: 'auto',
      fontSize: '1.3rem',
      fontWeight: bdTheme.textWeight.semibold,
      fontFamily: bdTheme.textFont.mainFont,
      display: 'flex',
      justifyContent: 'center'
    },

    '.color-red': {
      color: bdTheme.colors.red
    }
  };
});
