import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type SelectAccountStyleProps = StyledComponentProps & {};

export const SelectAccountStyle = styled('div')<SelectAccountStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;

    return {
      width: '100%',
      color: bdTheme.colors.textBlack,
      fontFamily: bdTheme.textFont.mainFont,

      '.transfer-amount-title': {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '20px',
        fontWeight: bdTheme.textWeight.regular,
        alignItems: 'center',

        '.transfer-amount-title-content': {
          fontWeight: bdTheme.textWeight.semibold,
          marginLeft: '10px',
        },

        '.search-container': {
          width: '160px',
          height: '34px',
          borderColor: bdTheme.colors.grayLightBlue,
          borderRadius: '10px',
          fontFamily: bdTheme.textFont.mainFont,
          fontWeight: bdTheme.textWeight.regular,
          fontSize: '1rem',
          padding: '20px 16px ',
          background: '#F7F7FA',

          input: {
            // marginLeft: "-0.5rem",
          },

          '.search-icon': {
            color: bdTheme.colors.textGray2,
            width: '1.5rem',
            height: '1.5rem',
          },
        },
      },

      '.select-account-body': {
        marginTop: '30px',
      },
    };
  }
);
