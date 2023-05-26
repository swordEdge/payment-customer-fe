import { keyframes } from '@emotion/react';
import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type MonileAccountTableComponentStyleProps = StyledComponentProps & {};

export const MobileAccountTableComponentStyle = styled('div')<MonileAccountTableComponentStyleProps>(
  ({ theme }) => {
    const bdTheme = theme as BDTheme;

    return {
      '.each-field': {
        width: '100%',
        padding: '0 1.5rem 0 1rem',
        height: '4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box',
        backgroundColor: bdTheme.colors.white,
        borderTopStyle: 'solid',
        borderTopWidth: '1px',
        borderTopColor: bdTheme.colors.strokeGray,
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
        borderBottomColor: bdTheme.colors.strokeGray,

        '.field-info': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          '.avatar': {
            width: '3rem',
            height: '3rem'
          },
        },

        '.field-value': {
          width: '50%',
          textTransform: 'none',
          display: 'flex',
          justifyContent: 'right',
          color: bdTheme.colors.black
        },

        '.account-number': {
          fontSize: '0.9rem',
          color: bdTheme.colors.normalGray
        }
      }
    }
  }
);
