import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type ChangePinModelViewStyleProps = StyledComponentProps & {};

export const ChangePinModelViewStyle = styled(
  'div'
)<ChangePinModelViewStyleProps>(({ theme }: any) => {
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

    '.change-model-container': {
      width: '535px',
      height: '254px',
      padding: '34px 32px 56px 32px',
      backgroundColor: theme.colors.white,
      borderRadius: '15px',
      // padding: "2rem 1.5rem",
      fontFamily: theme.textFont.mainFont,
      color: theme.colors.textBlack,

      '.change-model-header': {
        fontSize: '20px',
        fontWeight: theme.textWeight.semibold,
      },

      '.change-model-content': {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '14px',
        fontWeight: theme.textWeight.regular,

        '.change-model-content-body': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '14px',
          fontWeight: theme.textWeight.regular,
          width: '72%',
          marginTop: '30px',
        },
      },
      '.change-model-footer': {
        marginTop: '48px',
        display: 'flex',
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
