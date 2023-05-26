import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type MobileTransactionOverviewViewStyleProps = StyledComponentProps & {};

export const MobileTransactionOverviewViewStyle = styled(
  'div'
)<MobileTransactionOverviewViewStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    fontFamily: bdTheme.textFont.mainFont,
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

    '.amount-container': {
      backgroundColor: bdTheme.colors.white,
      display: 'grid',

      '.amount-input': {
        padding: '1rem 1rem'
      },

      '.input-container': {
        width: '100%',
        fontSize: '4rem',

        '.input': {
          fontWeight: theme.textWeight.semibold,
          fontSize: '2rem'
        }
      }
    },

    '.confirm-button': {
      padding: '1rem 1rem',
      boxSizing: 'border-box',
    },

    ".submit-button": {
      width: '100%',
      height: "3rem",
      borderRadius: '10px',
      fontSize: '1.1rem',
      color: bdTheme.colors.white
    },

    '.state': {
      height: '3rem',
      padding: '0 1.5rem 0 1.5rem',
      fontSize: '1.2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },

    '.row-gap-1rem': {
      marginTop: '1rem'
    },

    '.col-gap-1rem': {
      marginLeft: '1rem'
    },

    '.color-gray': {
      color: bdTheme.colors.normalGray
    },

    '.color-red': {
      color: bdTheme.colors.red
    },

    '.color-black': {
      color: bdTheme.colors.black
    },

    '.bg-color-white': {
      backgroundColor: bdTheme.colors.white
    },

    '.font-family-main': {
      fontFamily: bdTheme.textFont.mainFont
    },

    '.font-weight-semibold': {
      fontWeight: bdTheme.textWeight.semibold
    },

    '.font-size-big': {
      fontSize: '1.2rem'
    }
  }
});
