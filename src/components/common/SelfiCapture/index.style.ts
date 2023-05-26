import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type SelfiCaptureComponentStyleProps = StyledComponentProps & {};

export const SelfiCaptureComponentStyle = styled(
  'div'
)<SelfiCaptureComponentStyleProps>(({ theme }) => {
  return {
    margin: 'auto',
    width: '70%',
    height: '100%',
    background: '#333333',
    padding: '20px',

    '.selfi-image-container': {
      width: '100%',
      height: '70%',

      img: {
        width: 'inherit',
      },
    },

    '.selfi-main-container': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0px 10px 0px 10px',
      color: 'white',
      gap: '20px',
      textAlign: 'center',
      '.selfi-capture-button-container': {
        cursor: 'pointer',
      },
    },
  };
});
