import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type OrderTableViewStyleProps = StyledComponentProps & {};

export const OrderTableViewStyle = styled('div')<OrderTableViewStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;

    return {
      '.table-container': {
        width: '100%',
        borderStyle: 'solid',
        borderLeft: 'none',
        borderRight: 'none',
        borderColor: bdTheme.colors.strokeGray,
        borderWidth: '1px',
        borderRadius: '8px !important',

        '.MuiTableHead-root': {
          height: '1rem',

          '.MuiTableCell-root': {
            padding: '0.7rem 2rem',
            fontFamily: bdTheme.textFont.mainFont,
            fontWeight: bdTheme.textWeight.regular,
            color: bdTheme.colors.textBlack,
            backgroundColor: bdTheme.colors.lightGray,
          },
        },

        '.MuiTableBody-root': {
          borderStyle: 'solid',
          borderColor: bdTheme.colors.strokeGray,
          borderWidth: '1px',
          borderRadius: '10px !important',

          '.table-cell': {
            padding: '0.8rem 2rem',
            fontFamily: bdTheme.textFont.mainFont,
            fontWeight: bdTheme.textWeight.regular,
            fontSize: '0.8rem',
          },
        },
      },
    };
  }
);
