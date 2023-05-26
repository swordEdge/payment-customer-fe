import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type DisplayPinModelViewStyleProps = StyledComponentProps & {};

export const DisplayPinModelViewStyle = styled(
  'div'
)<DisplayPinModelViewStyleProps>(({ theme }: any) => {
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
      height: '350px',
      position: 'relative',
      padding: '40px 46px 30px 46px',
      backgroundColor: bdTheme.colors.white,
      borderRadius: '15px',
      // padding: "2rem 1.5rem",
      fontFamily: bdTheme.textFont.mainFont,
      color: bdTheme.colors.textBlack,
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
  };
});
