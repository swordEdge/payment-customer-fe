import { InputHTMLAttributes } from 'react';

import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type MobileTableElementComponentStyleProps = StyledComponentProps & {
  border?: boolean;
  last?: boolean;
};

export const MobileTableElementComponentStyle = styled(
  'div'
)<MobileTableElementComponentStyleProps>(({ theme, border, last }) => {
  const bdTheme = theme as BDTheme;

  return {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: bdTheme.textFont.mainFont,
    borderTopStyle: border ? 'solid' : 'none',
    borderTopWidth: border ? '1px' : '0',
    borderTopColor: border ? bdTheme.colors.strokeGray : '',
    borderBottomStyle: border ? 'solid' : 'none',
    borderBottomWidth: border ? '1px' : '0',
    borderBottomColor: border ? bdTheme.colors.strokeGray : '',
    width: '100%',
    height: '4.5rem',
    padding: '0.5rem 0',
    boxSizing: 'border-box',

    '.left-container': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },

    '.fontsize-big': {
      fontSize: '1.4rem'
    },

    '.fontsize-semibig': {
      fontSize: '1.2rem'
    },

    '.fontsize-regular': {
      fontSize: '1rem'
    },

    '.fontweight-bold': {
      fontWeight: bdTheme.textWeight.semibold
    },

    '.color-red': {
      color: bdTheme.colors.red
    },

    '.color-green': {
      color: bdTheme.colors.green
    },

    '.color-gray': {
      color: bdTheme.colors.normalGray
    }
  }
});
