import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type BeneficiaryTableStyleProps = StyledComponentProps & {};

export const BeneficiaryTableStyle = styled('div')<BeneficiaryTableStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;

    return {
      '.table-container': {
        width: '100%',
        // borderStyle: 'solid',
        // borderLeft: 'none',
        // borderRight: 'none',
        // borderColor: bdTheme.colors.strokeGray,
        // borderWidth: '1px',
        // borderRadius: '8px !important',
        overflowY: 'hidden',

        '.MuiTableHead-root': {
          height: '1rem',

          '.MuiTableCell-root': {
            padding: '0.8rem 2rem',
            fontFamily: bdTheme.textFont.mainFont,
            fontWeight: bdTheme.textWeight.regular,
            color: bdTheme.colors.textBlack,
            // backgroundColor: bdTheme.colors.lightGray,
          },
        },

        '.MuiTableBody-root': {
          // borderStyle: 'solid',
          // borderColor: bdTheme.colors.strokeGray,
          // borderWidth: '1px',
          // borderRadius: '10px !important',

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
    };
  }
);
