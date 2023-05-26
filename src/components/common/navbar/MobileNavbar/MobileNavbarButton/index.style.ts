import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type MobileNavbarButtonComponentStyleProps = StyledComponentProps & {};

export const MobileNavbarButtonComponentStyle = styled(
  'div'
)<MobileNavbarButtonComponentStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    width: '100%',
    height: '100%',
    cursor: 'pointer',

    img: {
      width: '1.8rem',
      height: '1.8rem',
    },

    '.inactive': {
      width: '100%',
      height: '100%',
      color: bdTheme.colors.normalGray,
      alignItems: 'center',
      borderRadius: '0.5rem',

      '.icon-container': {
        display: 'flex',
        justifyContent: 'center',
      },
    },

    '.active': {
      width: '100%',
      height: '100%',
      backgroundColor: bdTheme.colors.white,
      color: bdTheme.colors.accentBlue,
      alignItems: 'center',
      borderRadius: '0.5rem',

      '.icon-container': {
        display: 'flex',
        justifyContent: 'center',
      },
    },

    '.label-container': {
      fontSize: '0.8rem',
      fontFamily: bdTheme.textFont.mainFont,
      fontWeight: bdTheme.textWeight.regular,
      display: 'flex',
      justifyContent: 'center',
    },
  };
});
