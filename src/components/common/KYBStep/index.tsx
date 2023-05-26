import React from 'react';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, BoxProps } from '@mui/system';

import { KYBStepComponentStyle } from './index.style';

type KYBStepComponentProps = BoxProps & {
  stepTitle: string;
  stepAction: () => void;
};

export const KYBStepComponent: React.FC<KYBStepComponentProps> = (props) => {
  const { stepTitle, stepAction, ...rest } = props;

  return (
    <KYBStepComponentStyle onClick={() => stepAction()} className={rest.className}>
      <Box className='step-title fontweight-bold' sx={{ fontSize: '1.3rem' }}>
        {stepTitle}
      </Box>
      <Box className='step-next'>
        <ArrowForwardIcon />
      </Box>
    </KYBStepComponentStyle>
  );
};
