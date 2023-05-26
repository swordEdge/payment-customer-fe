import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type MobileTransferViewStyleProps = StyledComponentProps & {};

export const MobileTransferViewStyle = styled(
  'div'
)<MobileTransferViewStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    width: '100%',
    height: '100vh',
    backgroundColor: bdTheme.colors.simplecGrey,

    '.mobile-header-container': {
      display: 'none',
      [bdTheme.breakpoints.down('md')]: {
        display: 'block',
      },
    },

    '.item-container': {
      width: '100%'
    },

    '.info-container': {
      padding: '0.5rem 1rem',
      display: 'flex',
      alignItems: 'center',
      fontSize: '1rem'
    },

    '.amount-container': {
      backgroundColor: bdTheme.colors.white,
      display: 'grid',
      padding: '1.5rem 1rem',

      '.amount-input': {
        padding: '1rem 1rem'
      },

      '.input-container': {
        width: '100%',
        fontSize: '4rem',

        '.input': {
          color: theme.colors.red,
          fontWeight: theme.textWeight.semibold,
          fontSize: '2rem'
        }
      }
    },

    '.memo': {
      backgroundColor: bdTheme.colors.white,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 1rem',
      height: '3.5rem',
      boxSizing: 'border-box',

      '.memo-input': {
        // padding: '5px 0',
        height: '100%',
        width: '50%'
      }
    },

    ".text-input": {
      outline: "none",

      ".MuiTextField-root": {
        borderBottom: "none",
        margin: 0,
      },

      ".MuiFormLabel-root": {
        "&::active": {
          fontSize: "0.5rem",
        },
      },

      ".MuiFilledInput-root": {
        borderRadius: "15px",
        borderBottom: "none",

        "&:hover::before": {
          borderBottom: "none !important",
          outline: "none",
        },

        "&::before": {
          borderBottom: "none",
        },

        "&::after": {
          borderBottom: "none",
        },
      },
    },

    '.next-button': {
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

    '.transfer-status-container': {
      display: 'flex',
      justifyContent: 'space-between'
    },

    '.transfer-status': {

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

    '.row-gap-16px': {
      marginLeft: '1rem'
    },

    '.row-gap-8px': {
      marginLeft: '0.5rem'
    },

    '.column-gap-1rem': {
      marginTop: '1rem'
    },

    '.font-family-main': {
      fontFamily: bdTheme.textFont.mainFont
    },

    '.font-weight-semibold': {
      fontWeight: bdTheme.textWeight.semibold
    },

    '.font-size-big': {
      fontSize: '1.2rem'
    },

    '.font-size-small': {
      fontSize: '0.9rem'
    }
  }
});
