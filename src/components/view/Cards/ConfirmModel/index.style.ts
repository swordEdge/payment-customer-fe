import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type ConfirmModelViewStyleProps = StyledComponentProps & {};

export const ConfirmModelViewStyle = styled('div')(({ theme }: any) => {
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
      width: '420px',
      height: '270px',
      padding: '46px 55px 42px 55px',
      backgroundColor: theme.colors.white,
      borderRadius: '15px',
      // padding: "2rem 1.5rem",
      fontFamily: theme.textFont.mainFont,
      color: theme.colors.textBlack,

      '.modal-header': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },

      '.modal-content': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.colors.textBlack,
        fontSize: '18px',
        lineHeight: '30px',
        textAlign: 'center',
        marginTop: '30px',
      },
      '.modal-footer': {
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '14px',
        textTransform: 'capitalize',
        textAlign: 'center',

        '.cancel-button': {
          width: '45%',
          background: '#F0F5FD',
          paddingTop: '12px',
          paddingBottom: '12px',
          borderRadius: '6px',
        },
        '.confirm-button': {
          width: '45%',
          paddingTop: '12px',
          paddingBottom: '12px',
          background: '#2869FF',
          borderRadius: '6px',
          color: 'white',
        },
      },
    },
  };
});
