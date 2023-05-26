import React from 'react';

import { Box, BoxProps } from '@mui/material';

import { BeneficiaryComponentStyle } from './index.style';

type BeneficiaryComponentProps = BoxProps & {
  beneficiaryId: number;
  avatar: string;
  name: string;
  accountNumber: string;
};

export const BeneficiaryComponent: React.FC<BeneficiaryComponentProps> = (
  props
) => {
  const { beneficiaryId, avatar, name, accountNumber } = props;
  return (
    <BeneficiaryComponentStyle>
      <img className='avatar' src={avatar} alt='avatar image' />
      <Box className='info-container'>
        <Box className='fontweight-bold'> {name} </Box>
        <Box className='color-gray'> {accountNumber} </Box>
      </Box>
    </BeneficiaryComponentStyle>
  );
};
