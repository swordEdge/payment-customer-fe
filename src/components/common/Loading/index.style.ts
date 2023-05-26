import { keyframes } from '@emotion/react';
import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type LoadingComponentStyleProps = StyledComponentProps & {};

const ldsRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingComponentStyle = styled('div')<LoadingComponentStyleProps>(
  ({ theme }) => {
    const bdTheme = theme as BDTheme;

    const spinner = keyframes`
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    `;

    return {
      position: 'fixed',
      left: '0px',
      right: '0px',
      top: '0px',
      bottom: '0px',
      zIndex: 200,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',

      '.loading-spinner': {
        width: '50px',
        height: '50px',
        border: '10px solid #f3f3f3', /* Light grey */
        borderColor: bdTheme.colors.cGrey,
        borderTop: '10px solid #383636', /* Black */
        borderTopColor: bdTheme.colors.blue,
        borderRadius: '50%',
        animation: `${spinner} 1.5s linear infinite`
      }
    }
  }
);
