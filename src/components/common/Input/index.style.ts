import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type InputComponentStyleProps = StyledComponentProps & {};

export const InputComponentStyle = styled('div')<InputComponentStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;

    return {
      width: '100%',

      '.label-container': {
        display: 'flex',
        fontFamily: bdTheme.textFont.mainFont,
        fontWeight: bdTheme.textWeight.regular,
        color: 'red',

        '.label-show': {
          color: 'black',
          marginLeft: '0.5rem',
          fontSize: '1rem',
        },
      },

      '.saas-input-container': {
        marginTop: '0.5rem',
        width: '100%',
        height: '2.7rem',
      },
    };
  }
);
