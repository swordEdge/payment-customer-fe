import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type MsgItemComponentStyleProps = StyledComponentProps & {};

export const MsgItemComponentStyle = styled('div')<MsgItemComponentStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;

    return {
      borderRadius: '5px',
      backgroundColor: bdTheme.colors.white,
      cursor: 'pointer',
      fontFamily: bdTheme.textFont.mainFont,
      color: bdTheme.colors.textBlack,
      fontWeight: bdTheme.textWeight.regular,

      '.selected-active': {
        borderLeftWidth: '4px',
        borderRadius: '5px',
        borderLeftColor: bdTheme.colors.logoBlue,
        borderLeftStyle: 'solid',
      },

      '.main-box': {
        height: '3.5rem',
        display: 'flex',
        flexDirection: 'column',
        padding: '0.5rem 1rem',
        justifyContent: 'space-evenly',

        '.title-container': {
          fontSize: '0.9rem',
        },

        '.date-container': {
          fontSize: '0.8rem',
        },
      },
    };
  }
);
