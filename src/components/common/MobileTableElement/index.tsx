import React from 'react';

import { Box, BoxProps } from '@mui/material';
import { MobileTableElementComponentStyle } from './index.style';

type MobileTableElementComponentProps = BoxProps & {
  elementId: number;
  create_at: string;
  inOuts: boolean;
  amount: number;
  currencySymbol: string;
};

export const MobileTableElementComponent: React.FC<MobileTableElementComponentProps> = (props) => {
  const { elementId, create_at, inOuts, amount, currencySymbol, ...rest } = props;
  return <MobileTableElementComponentStyle>
    <Box className="left-container">
      <Box className="fontsize-big"> Transfer Between Members </Box>
      <Box className="fontsize-regular color-gray"> {create_at} </Box>
    </Box>
    <Box className={`fontweight-bold fontsize-semibig ${inOuts ? 'color-green' : 'color-red'}`}> {`${inOuts ? '' : '-'}`} {currencySymbol} {amount} </Box>
  </MobileTableElementComponentStyle>
}