import { InputHTMLAttributes } from 'react';

import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type PasswordInputComponentStyleProps = StyledComponentProps &
  Pick<InputHTMLAttributes<HTMLInputElement>, 'disabled'>;

export const PasswordInputComponentStyle = styled(
  'div'
)<PasswordInputComponentStyleProps>(({ theme, disabled }) => {
  const bdTheme = theme as BDTheme;

  return {
    width: '100%',
    height: '100%',
    padding: '8px 16px 8px 16px',
    borderRadius: '12px',
    backgroundColor: disabled ? '#B9BCC9' : '#F7F7FA',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    color: disabled ? '#7F818A' : bdTheme.colors.textBlack,

    '.content-container': {
      flex: '0 1 100%',
      '.label': {
        fontWeight: bdTheme.textWeight.regular,
        fontSize: '12px',
        lineHeight: '18px',
        color: '#7F818A',
      },

      '.text': {
        width: '100%',
        fontWeight: bdTheme.textWeight.regular,
        fontSize: '16px',
        lineHeight: '150%',
      },
    },

    '.icon-container': {
      width: '24px',
      height: '100%',
      flex: 0,
      color: '#7F818A',
    },
  };
});
