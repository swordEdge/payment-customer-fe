import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type AccountCardComponentStyleProps = StyledComponentProps & {
  color: string;
};

export const AccountCardComponentStyle = styled(
  'div'
)<AccountCardComponentStyleProps>(({ theme, color }) => {
  const bdTheme = theme as BDTheme;
  return {
    background: bdTheme.colors[color],
    height: '100%',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    cursor: 'pointer',
    padding: '1rem 2rem',
    boxSizing: 'border-box',
    borderWidth: '0px',
    gap: '10px',

    '.card-header': {
      fontFamily: bdTheme.textFont.mainFont,
      fontWeight: bdTheme.textWeight.semibold,
      fontSize: '1.1rem',
      color: bdTheme.colors.white,
    },

    '.card-content': {
      fontFamily: bdTheme.textFont.mainFont,
      fontWeight: bdTheme.textWeight.regular,
      fontSize: '0.8rem',
      color: bdTheme.colors.white,
    },

    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      fontFamily: bdTheme.textFont.mainFont,
      fontWeight: bdTheme.textWeight.semibold,
      fontSize: '1.2rem',
      color: bdTheme.colors.white,

      '.currency-container': {
        marginLeft: '1rem',
        fontFamily: bdTheme.textFont.mainFont,
        fontWeight: bdTheme.textWeight.semibold,
        fontSize: '0.8rem',
      },
    },
  };
});
