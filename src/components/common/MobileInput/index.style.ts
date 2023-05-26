import { InputHTMLAttributes } from 'react';

import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type MobileInputComponentStyleProps = StyledComponentProps &
  Pick<InputHTMLAttributes<HTMLInputElement>, 'disabled'> & {};

export const MobileInputComponentStyle = styled(
  'div'
)<MobileInputComponentStyleProps>(({ theme, disabled }) => {
  const bdTheme = theme as BDTheme;

  return {
    color: disabled ? bdTheme.colors.black : bdTheme.colors.black,
    fontFamily: bdTheme.textFont.mainFont,

    '.text': {
      fontFamily: 'inherit',
      padding: '0px',

      '.MuiInputBase-input': {
        color: bdTheme.colors.black,
        padding: '0px',
        fontFamily: 'inherit',
      },

      '& .Mui-disabled': {
        WebkitTextFillColor: bdTheme.colors.black,
      },
    },
  };
});
