import { InputHTMLAttributes } from 'react';

import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type PasswordPolicyComponentStyle = StyledComponentProps & {};

export const PasswordPolicyComponentStyle = styled(
  'div'
)<PasswordPolicyComponentStyle>(({ theme }) => {
  const bdTheme = theme as BDTheme;

  return {
    width: '100%',
    color: bdTheme.colors.normalGray,
    fontFamily: bdTheme.textFont.mainFont,
    fontSize: '0.9rem',

    '.ul-list': {
      marginTop: 0,
      paddingLeft: '1rem',
    },

    '.color-red': {
      color: bdTheme.colors.red,
    },

    '.color-green': {
      color: bdTheme.colors.green,
    },
  };
});
