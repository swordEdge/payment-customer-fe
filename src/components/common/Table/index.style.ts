import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type TableComponentStyleProps = StyledComponentProps & {};

export const TableComponentStyle = styled('div')<TableComponentStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;
    return {
      width: '100%',

      '.table-container': {
        width: '100%',
        maxHeight: '450px',
        borderStyle: 'solid',
        borderLeft: 'none',
        borderRight: 'none',
        borderColor: bdTheme.colors.lightGray,
        borderWidth: '1px',
        borderRadius: '10px !important',

        '.MuiTableHead-root': {
          borderStyle: 'solid',
          borderColor: bdTheme.colors.lightGray,
          borderWidth: '1px',
          borderRadius: '8px !important',
          height: '1rem',

          '.MuiTableCell-root': {
            paddingTop: '0.7rem',
            paddingBottom: '0.7rem',
            fontFamily: bdTheme.textFont.oneFont,
            fontWeight: bdTheme.textWeight.semibold,
            color: '#7F818A',
          },
        },

        '.MuiTableBody-root': {
          borderStyle: 'solid',
          borderColor: bdTheme.colors.lightGray,
          borderWidth: '1px',
          borderRadius: '10px !important',

          '.table-cell': {
            cursor: 'pointer',
            fontFamily: bdTheme.textFont.oneFont,
            fontWeight: bdTheme.textWeight.regular,
            fontSize: '0.9rem',
          },

          '.table-cell-in': {
            cursor: 'pointer',
            fontFamily: bdTheme.textFont.oneFont,
            fontWeight: bdTheme.textWeight.semibold,
            color: '#3BB861',
            fontSize: '0.9rem',
          },

          '.table-cell-out': {
            cursor: 'pointer',
            fontFamily: bdTheme.textFont.oneFont,
            fontWeight: bdTheme.textWeight.semibold,
            color: '#FF2445',
            fontSize: '0.9rem',
          },
        },
      },
    };
  }
);
