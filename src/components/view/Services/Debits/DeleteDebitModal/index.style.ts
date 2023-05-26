import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type DeleteDebitModalStyleProps = StyledComponentProps & {};

export const DeleteDebitModalStyle = styled('div')<DeleteDebitModalStyleProps>(
  ({ theme }: any) => {
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
        width: '55rem',
        backgroundColor: bdTheme.colors.white,
        borderRadius: '15px',
        padding: '2rem 2.5rem',
        fontFamily: bdTheme.textFont.mainFont,
        color: bdTheme.colors.textBlack,

        '.modal-header': {
          fontWeight: bdTheme.textWeight.semibold,
          fontSize: '1.4rem',

          '.subtitle-container': {
            marginTop: '1rem',
            fontWeight: bdTheme.textWeight.regular,
            fontSize: '1rem',
            lineHeight: '1.7rem',
          },
        },

        '.modal-content': {
          paddingLeft: '1rem',
          paddingRight: '1rem',
          marginTop: '2.5rem',

          '.grid-item': {
            marginTop: '1rem',
          },
        },
      },

      '.modal-footer': {
        marginTop: '1.5rem',
        display: 'flex',
        justifyContent: 'right',

        '.cancel-button': {
          borderRadius: '7px',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: bdTheme.colors.strokeGray,
          color: bdTheme.colors.textBlack,
          textTransform: 'none',
        },

        '.confirm-button': {
          marginLeft: '1rem',
          borderRadius: '7px',
          backgroundColor: bdTheme.colors.btnLogo,
          color: bdTheme.colors.white,
          textTransform: 'none',
        },
      },
    };
  }
);
