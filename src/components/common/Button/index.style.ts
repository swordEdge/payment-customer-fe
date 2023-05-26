import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type ButtonComponentStyleProps = StyledComponentProps & {};

export const ButtonComponentStyle = styled('div')<ButtonComponentStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;

    return {
      width: '100%',
      backgroundColor: bdTheme.colors.accentBlue,
      height: '3rem',
      fontFamily: bdTheme.textFont.mainFont,
      fontWeight: bdTheme.textWeight.light,
      fontSize: '1rem',
      color: bdTheme.colors.white,
      borderRadius: '0.5rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };
  }
);
