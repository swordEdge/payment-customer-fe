import { keyframes } from '@emotion/react';
import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type MobileHeaderComponentStyleProps = StyledComponentProps & {};

export const MobileHeaderComponentStyle = styled(
  'div'
)<MobileHeaderComponentStyleProps>(({ theme }) => {
  const bdTheme = theme as BDTheme;

  return {
    fontFamily: bdTheme.textFont.mainFont,
    fontWeight: bdTheme.textWeight.semibold,
    padding: '1.5rem 1.5rem 1rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'fixed',
    width: '100%',
    backgroundColor: bdTheme.colors.white,
    zIndex: 100,
    boxSizing: 'border-box',
    top: 0,
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderBottomColor: bdTheme.colors.strokeGray,

    '.header-main': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      '.title-typo': {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '1.3rem',
      },
    },

    '.extra-container': {
      width: '100%',
      marginTop: '1rem',
    },
  };
});
