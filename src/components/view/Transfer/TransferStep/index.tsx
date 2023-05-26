import React from 'react';

import { Box, Grid } from '@mui/material';

import { TransferStepStyle } from './index.style';

type TransferStepComponentProps = {
  step: number;
};

export const TransferStepComponent: React.FC<TransferStepComponentProps> = ({
  step,
}) => {
  const steps = [
    {
      steps: 'Step 1',
      content: 'Select Account',
    },
    {
      steps: 'Step 2',
      content: 'Select Beneficiary',
    },
    {
      steps: 'Step 3',
      content: 'Transfer Amount',
    },
    {
      steps: 'Step 4',
      content: 'Transaction Overview',
    },
  ];
  const checked = (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='16' cy='16' r='16' fill='#0A33FF' />
      <g clipPath='url(#clip0_164_4094)'>
        <path
          d='M14.7499 18.5983L20.1662 13.5L21 14.2842L14.7499 20.1667L11 16.6373L11.8332 15.8531L14.7499 18.5983Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_164_4094'>
          <rect
            width='20'
            height='20'
            fill='white'
            transform='translate(6 6)'
          />
        </clipPath>
      </defs>
    </svg>
  );

  const unChecked = (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='16' cy='16' r='15.5' fill='white' stroke='#E6E9EB' />
      <g clipPath='url(#clip0_164_4102)'>
        <path
          d='M14.7499 18.5983L20.1662 13.5L21 14.2842L14.7499 20.1667L11 16.6373L11.8332 15.8531L14.7499 18.5983Z'
          fill='#9E9EA7'
        />
      </g>
      <defs>
        <clipPath id='clip0_164_4102'>
          <rect
            width='20'
            height='20'
            fill='white'
            transform='translate(6 6)'
          />
        </clipPath>
      </defs>
    </svg>
  );
  return (
    <TransferStepStyle>
      <Grid container spacing={2}>
        {steps.map((e, index) => (
          <Grid item lg={3} md={6} xs={12} key={index}>
            <Box className='step-item'>
              <Box className='step-item-check'>
                {index <= step ? checked : unChecked}
              </Box>
              <Box className='step-item-title'>{e.steps}</Box>
              <Box className='step-item-content'>{e.content}</Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </TransferStepStyle>
  );
};
