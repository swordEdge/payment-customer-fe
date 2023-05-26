import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type SelectAccountTableStyleProps = StyledComponentProps & {};

export const SelectAccountTableStyle = styled(
  'div'
)<SelectAccountTableStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;
  return {
    '.table-container': {
      width: '100%',
      overflowY: 'hidden',

      '.MuiTableHead-root': {
        '.MuiTableCell-root': {
          padding: '0.8rem 2rem',
          fontFamily: bdTheme.textFont.mainFont,
          fontWeight: bdTheme.textWeight.regular,
          color: bdTheme.colors.textBlack,
        },
      },

      '.MuiTableBody-root': {
        '.table-body': {
          marginTop: '20px',
        },
        '.table-row': {
          '.table-cell': {
            padding: '0.8rem 2rem',
            fontFamily: bdTheme.textFont.mainFont,
            fontWeight: bdTheme.textWeight.regular,
            fontSize: '0.8rem',

            '.name-container': {
              display: 'flex',
              alignItems: 'center',

              '.img-container': {
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '50%',
              },
            },
          },
        },
      },
    },
  };
});
