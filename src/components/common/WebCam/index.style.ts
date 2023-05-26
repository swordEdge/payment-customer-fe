import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type WebCamComponentStyleProps = StyledComponentProps & {};

export const WebCamComponentStyle = styled('div')<WebCamComponentStyleProps>(
  () => {
    return {
      margin: 'auto',
      width: 'inherit',
      heigth: 'inherit',

      '.webcam-frame': {
        width: '100%',
        height: 'auto',
      },
    };
  }
);
