import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type BeneficiaryTableViewStyleProps = StyledComponentProps & {};

export const BeneficiaryTableViewStyle = styled(
  'div'
)<BeneficiaryTableViewStyleProps>(({ theme }: any) => {
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
      overflowY: 'hidden',

      [theme.breakpoints.down('md')]: {
        display: 'none',
      },

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

          '.name-container': {
            display: 'flex',
            alignItems: 'center',

            '.img-container': {
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
            },
          },

          '.edit-button': {
            color: bdTheme.colors.textGray3,
          },
        },
      },
    },
  };
});
