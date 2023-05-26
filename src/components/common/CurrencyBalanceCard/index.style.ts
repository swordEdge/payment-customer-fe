import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type CurrencyBalanceCardComponentStyleProps = StyledComponentProps & {};

export const CurrencyBalanceCardComponentStyle = styled(
  'div'
)<CurrencyBalanceCardComponentStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundColor: bdTheme.colors.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',

    '.card-header': {
      paddingLeft: '1.5rem',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      fontFamily: bdTheme.textFont.mainFont,
      fontWeight: bdTheme.textWeight.regular,
      fontSize: '1rem',
    },

    '.card-content': {
      paddingLeft: '1.5rem',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      fontFamily: bdTheme.textFont.mainFont,
      fontWeight: bdTheme.textWeight.semibold,
      fontSize: '1.7rem',
    },

    '.card-footer': {
      paddingLeft: '1.5rem',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      fontFamily: bdTheme.textFont.mainFont,
      fontWeight: bdTheme.textWeight.regular,
      fontSize: '0.8rem',
    },
  };
});
