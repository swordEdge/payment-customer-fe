import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type TransactionModalStyleProps = StyledComponentProps & {};

export const TransactionModalStyle = styled('div')<TransactionModalStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;
    return {
      '.modal-container': {
        width: '56rem',
        backgroundColor: bdTheme.colors.white,
        borderRadius: '15px',
        padding: '2rem 2rem',
        fontFamily: bdTheme.textFont.mainFont,
        color: bdTheme.colors.textBlack,

        '.modal-header': {
          fontWeight: bdTheme.textWeight.semibold,
          fontSize: '1.2rem',
          marginTop: '1rem',

          '.description-title': {
            marginTop: '1rem',
            fontWeight: bdTheme.textWeight.regular,
            fontSize: '0.8rem',
          },
        },

        '.modal-content': {
          marginTop: '1.5rem',
          marginLeft: '1rem',

          '.detail-container': {
            borderRadius: '10px',
            borderColor: bdTheme.colors.lightGray,
            borderWidth: '1px',
            borderStyle: 'solid',
            paddingBottom: '1rem',

            '.grid-title-container': {
              fontWeight: bdTheme.textWeight.semibold,
            },
          },
        },

        '.control-container': {
          marginTop: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'right',

          '.close-button': {
            width: '5rem',
            height: '2rem',
            backgroundColor: bdTheme.colors.btnLogo,
            color: bdTheme.colors.white,
            textTransform: 'none',
          },
        },
      },
    };
  }
);
