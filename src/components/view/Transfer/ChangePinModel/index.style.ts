import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type TransactionVerifyModalStyleProps = StyledComponentProps & {};

export const TransactionVerifyModalStyle = styled(
  'div'
)<TransactionVerifyModalStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;
  return {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '.display-model-container': {
      width: '410px',
      position: 'relative',
      padding: '40px 46px 30px 46px',
      backgroundColor: bdTheme.colors.white,
      borderRadius: '15px',
      // padding: "2rem 1.5rem",
      fontFamily: bdTheme.textFont.mainFont,
      color: bdTheme.colors.textBlack,

      [bdTheme.breakpoints.down('md')]: {
        width: '70%'
      },

      '.verification-container': {
        display: 'flex',
        gap: '4%',
        marginTop: '1rem',

        '.code-box': {
          width: '15%',
          textAlign: 'center',
        },

        '.pincode-input-container': {
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',

          '.pincode-input-text': {
            borderRadius: '5px',
            border: '2px solid #999999 !important',
            display: 'flex',
            fontFamily: bdTheme.textFont.mainFont,
            fontWeight: bdTheme.textWeight.regular,
            fontSize: '18px',
            width: '60px !important',
            height: '60px !important',

            [bdTheme.breakpoints.down('md')]: {
              width: '40px !important',
              height: '40px !important',
            }
          },
        },
      },

      '.display-model-cancel-button': {
        position: 'absolute',
        right: '46px',
      },
      '.display-model-header': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '26px',
        color: bdTheme.colors.textBlack,
        fontWeight: bdTheme.textWeight.semibold,
      },

      '.display-model-content': {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        '.display-model-content-title': {
          fontSize: '16px',
          marginTop: '17px',
        },
        '.display-model-content-number': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '34px',
          marginTop: '24px',
        },
        '.display-model-content-confirm': {
          fontSize: '16px',
          marginTop: '17px',
        },
        '.display-model-content-input-group': {
          display: 'flex',
          width: '90%',
          paddingLeft: '5%',
          height: '58px',
          gaps: '10px',
          justifyContent: 'space-between',
          marginTop: '30px',
        },
      },
      '.display-model-footer': {
        marginTop: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '14px',
        textTransform: 'capitalize',
        textAlign: 'center',

        paddingLeft: '23px',
        paddingRight: '23px',

        '.cancel-button': {
          width: '45%',
          background: '#F0F5FD',
          paddingTop: '12px',
          paddingBottom: '12px',
          borderRadius: '6px',
        },
        '.confirm-button': {
          width: '100%',
          paddingTop: '12px',
          paddingBottom: '12px',
          background: '#2869FF',
          borderRadius: '6px',
          color: 'white',
          cursor: 'pointer',
        },
        '.model-footer-content': {
          display: 'flex',
          fontSize: '13px',
          fontWeight: bdTheme.textWeight.regular,
          marginTop: '17px',
          '.model-footer-content-text': {
            marginLeft: '5px',
            color: bdTheme.colors.blue,
          },
        },
      },
    },

    ".color-white": {
      color: bdTheme.colors.white,
    },

    ".color-blue": {
      color: bdTheme.colors.activeConfirmButtonBgColor,
    },

    ".fontweight-bold": {
      fontWeight: bdTheme.textWeight.semibold,
    },

    '.bg-primary': {
      backgroundColor: theme.colors.primary,
    },

    '.bg-red': {
      backgroundColor: theme.colors.red,
    },

    '.gap-top-1rem': {
      marginTop: '1rem'
    },
  };
});
