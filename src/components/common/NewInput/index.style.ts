import { InputHTMLAttributes } from 'react';

import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type NewInputComponentStyleProps = StyledComponentProps &
  Pick<InputHTMLAttributes<HTMLInputElement>, 'disabled'> & {
    label?: string;
    error?: boolean;
    border?: boolean;
    inputSize: 'regular' | 'large';
    multiLine?: boolean;
  };

export const NewInputComponentStyle = styled(
  'div'
)<NewInputComponentStyleProps>(({ theme, disabled, error, border, inputSize, multiLine }) => {
  const bdTheme = theme as BDTheme;

  return {
    paddingLeft: '16px',
    paddingRight: '16px',
    backgroundColor: disabled
      ? bdTheme.colors.disabledBackgroundColor
      : border
        ? bdTheme.colors.surfaceSecondary
        : bdTheme.colors.white,
    color: bdTheme.colors.textSubtle,
    borderRadius: '12px',
    outline: 'none',
    // height: inputSize === 'regular' ? '58px' : '70px',
    height: multiLine
      ? 'auto'
      : inputSize === 'regular' ? '58px' : '70px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    // border: border ? 'solid' : 'none',
    border: 'none',

    ':has(div.focused)': {
      outline: border && `1px solid ${bdTheme.colors.colorPrimary}`,
    },

    ':has(div.error)': {
      outline: border && `1px solid ${bdTheme.colors.colorFeedbackWarning}`,
    },

    '.text-container': {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: bdTheme.textFont.oneFont,
      width: '100%',
      flex: 1,

      '.label': {
        fontSize: inputSize === 'regular' ? '12px' : '16px',
      },

      '.text': {
        fontFamily: 'inherit',
        fontSize: inputSize === 'regular' ? '16px' : '25px',
        padding: '0px',

        '.MuiInputBase-input': {
          color: 'inherit',
          padding: '0px',
          fontFamily: 'inherit',
        },
      },
    },

    '.icon-container': {
      flex: '0 0 24px',
      height: '24px',
    },

    '.front': {
      marginRight: '8px',
    },

    '.back': {
      marginLeft: '8px',
    },
  };
});
