import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type SearchComponentStyleProps = StyledComponentProps & {};

export const SearchComponentStyle = styled('div')<SearchComponentStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;
    return {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'right',
      alignItems: 'center',

      '.search-container': {
        width: '100%',
        height: '3rem',
        borderRadius: '10px',
        borderStyle: 'none',
        fontFamily: bdTheme.textFont.mainFont,
        fontWeight: bdTheme.textWeight.regular,
        fontSize: '1rem',
        backgroundColor: bdTheme.colors.cGrey,

        input: {
          marginLeft: '-0.5rem',
        },

        '.search-icon': {
          color: bdTheme.colors.black,
          width: '1.5rem',
          height: '1.5rem',
        },
      },
    };
  }
);
