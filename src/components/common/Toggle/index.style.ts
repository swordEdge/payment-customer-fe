import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type ToggleStyleProps = StyledComponentProps & {};

export const ToggleStyle = styled('div')<ToggleStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    padding: '0.3rem',
    paddingLeft: 0,
    paddingRight: '0.5rem',
    backgroundColor: bdTheme.colors.lightGray,
    borderRadius: '5px',
    height: '2rem',
    display: 'flex',
    alignItems: 'center',

    '.active-button': {
      height: '100%',
      marginLeft: '0.5rem',
      // backgroundColor: bdTheme.colors.btnAccent,
      backgroundColor: '#0A33FF',
      borderRadius: '5px',
      color: bdTheme.colors.white,
      fontFamily: bdTheme.textFont.mainFont,
      fontWeight: bdTheme.textWeight.regular,
      fontSize: '0.9rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      textDecoration: 'none',

      '.box-container': {
        display: 'flex',
        justifyContent: 'center',
      },
    },

    '.inactive-button': {
      height: '100%',
      marginLeft: '0.5rem',
      backgroundColor: bdTheme.colors.white,
      borderRadius: '5px',
      color: bdTheme.colors.black,
      fontFamily: bdTheme.textFont.mainFont,
      fontWeight: bdTheme.textWeight.regular,
      fontSize: '0.9rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      textDecoration: 'none',

      '.box-container': {
        display: 'flex',
        justifyContent: 'center',
      },
    },
  };
});
