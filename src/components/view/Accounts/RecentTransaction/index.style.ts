import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type TransactionViewStyleProps = StyledComponentProps & {};

export const TransactionViewStyle = styled('div')<TransactionViewStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;

    return {
      width: '100%',
      height: '100%',
      paddingTop: '3.2rem',

      '.title-container': {
        width: '100%',
        height: '4rem',
        fontFamily: bdTheme.textFont.mainFont,
        fontWeight: bdTheme.textWeight.semibold,
        color: bdTheme.colors.black,
        fontSize: '1.2rem',
      },

      '.transaction-table-container': {
        [bdTheme.breakpoints.down('md')]: {
          display: 'none'
        }
      },

      '.mobile-transaction-table': {
        [bdTheme.breakpoints.up('md')]: {
          display: 'none'
        }
      },

      '.red-currency': {
        fontFamily: bdTheme.textFont.mainFont,
        fontWeight: bdTheme.textWeight.semibold,
        fontSize: '1rem',
        color: bdTheme.colors.red,
      },

      '.green-currency': {
        fontFamily: bdTheme.textFont.mainFont,
        fontWeight: bdTheme.textWeight.semibold,
        fontSize: '1rem',
        color: bdTheme.colors.green,
      },
    };
  }
);
