import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type DeleteBeneficiaryConfirmModalStyleProps = StyledComponentProps & {};

export const DeleteBeneficiaryConfirmModalStyle = styled(
  'div'
)<DeleteBeneficiaryConfirmModalStyleProps>(({ theme }: any) => {
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
      width: '27rem',
      backgroundColor: bdTheme.colors.white,
      borderRadius: '15px',
      padding: '2rem 1.5rem',
      fontFamily: bdTheme.textFont.mainFont,
      color: bdTheme.colors.textBlack,

      '.modal-header': {
        marginTop: '1rem',
        display: 'flex',
        justifyContent: 'center',

        img: {
          margin: 'auto',
          width: '5rem',
          height: '5rem',
          borderRadius: '50%',
        },
      },

      '.modal-content': {
        margin: 'auto',
        marginTop: '2rem',
        fontSize: '1.2rem',
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        lineHeight: '2rem',
      },

      '.modal-footer': {
        marginTop: '3rem',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',

        '.cancel-button': {
          width: '40%',
          height: '2rem',
          backgroundColor: bdTheme.colors.grayLightBlue,
          borderColor: bdTheme.colors.grayLightBlue,
          color: bdTheme.colors.textBlack,
          textTransform: 'none',
        },

        '.confirm-button': {
          width: '40%',
          height: '2rem',
          backgroundColor: bdTheme.colors.btnLogo,
          color: bdTheme.colors.white,
          textTransform: 'none',
        },
      },
    },
  };
});
