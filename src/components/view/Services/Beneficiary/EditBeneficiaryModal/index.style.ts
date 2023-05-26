import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type EditBeneficiaryModalStyleProps = StyledComponentProps & {};

export const EditBeneficiaryModalStyle = styled(
  'div'
)<EditBeneficiaryModalStyleProps>(({ theme }: any) => {
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
      padding: '2rem 1.75rem',
      fontFamily: bdTheme.textFont.mainFont,
      color: bdTheme.colors.textBlack,

      '.modal-header': {
        display: 'flex',
        justifyContent: 'space-between',
        fontWeight: bdTheme.textWeight.semibold,
        fontSize: '1.2rem',

        '.edit-button-container': {
          display: 'flex',
          alignItems: 'center',
          width: '3.5rem',
          fontSize: '1rem',
          justifyContent: 'space-between',
          color: bdTheme.colors.textGray3,
          cursor: 'pointer',
        },
      },

      '.modal-content': {
        marginTop: '2.5rem',
      },

      '.modal-footer': {
        marginTop: '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',

        '.delete-button': {
          border: 'none',
          color: bdTheme.colors.white,
          backgroundColor: bdTheme.colors.red,
        },

        '.cancel-button': {
          borderRadius: '7px',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: bdTheme.colors.strokeGray,
          color: bdTheme.colors.textBlack,
          textTransform: 'none',
        },

        '.close-button': {
          marginLeft: '1rem',
          borderRadius: '7px',
          backgroundColor: bdTheme.colors.btnLogo,
          color: bdTheme.colors.white,
          textTransform: 'none',
        },
      },
    },
  };
});
