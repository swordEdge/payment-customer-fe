import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type TwoFactorSettingModalStyleProps = StyledComponentProps & {};

export const TwoFactorSettingModalStyle = styled(
  'div'
)<TwoFactorSettingModalStyleProps>(({ theme }: any) => {
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

    '.modal-container': {
      width: '36rem',
      backgroundColor: bdTheme.colors.white,
      borderRadius: '15px',
      padding: '1.5rem 1.5rem',
      paddingBottom: '3rem',
      fontFamily: bdTheme.textFont.mainFont,
      boxSizing: 'border-box',
      color: bdTheme.colors.textBlack,

      [bdTheme.breakpoints.down('md')]: {
        width: '100% !important',
      },

      '.modal-header': {
        '.cancel-button': {
          textAlign: 'right',
          color: bdTheme.colors.textGray3,
        },

        '.success-img': {
          display: 'flex',
          justifyContent: 'center',

          img: {
            margin: 'auto',
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
          },
        },
      },

      '.modal-content': {
        marginTop: '1.5rem',

        '.title-container': {
          fontWeight: bdTheme.textWeight.semibold,
          fontSize: '1.3rem',
          color: bdTheme.colors.blue,
        },

        '.description-container': {
          fontSize: '1rem',
        },
      },
    },
    '.header-title': {
      fontSize: '36px',
      textAlign: 'center',
    },
    hr: {
      border: '1px solid #f3f3f3',
    },
    '.order-model-footer': {
      marginTop: '30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '14px',
      textTransform: 'capitalize',
      textAlign: 'center',

      paddingLeft: '23px',
      paddingRight: '23px',
    },
    '.qrcode': {
      display: 'flex',
      justifyContent: 'center',
      padding: '1rem',
    },
    '.alert-container': {
      position: 'fixed',
      top: '50px',
      left: '45%',
      width: '10%',
      height: '2.5rem',
      backgroundColor: bdTheme.colors.red,
      color: bdTheme.colors.white,
      fontFamily: bdTheme.textFont.mainFont,
      fontWeight: bdTheme.textWeight.regular,
      fontSize: '0.85rem',
      lineHeight: '1rem',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    '.action-button-container': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between'
    },

    ".button": {
      width: '45%',
      height: "3rem",

      [bdTheme.breakpoints.down("md")]: {
        width: "100%",
      },
    },

    '.button-hover-grey': {
      '&:hover': {
        backgroundColor: bdTheme.colors.simplecGrey
      }
    },

    '.bg-accent-blue': {
      backgroundColor: bdTheme.colors.primary
    },

    '.color-white': {
      color: bdTheme.colors.white
    },

    '.fontweight-bold': {
      fontWeight: bdTheme.textWeight.semibold
    },

    '.border-color-grey': {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: bdTheme.colors.strokeGray
    },
  };
});
