import React from 'react';
import { BoxProps, Box } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { MobileItemComponentStyle } from './index.style';

type MobileItemComponentProps = BoxProps & {
  title: string;
  value: string;
  valueAction: () => void;
  setValue: (newValue: string) => void;
};

export const MobileItemComponent: React.FC<MobileItemComponentProps> = (props) => {
  const { title, value, valueAction, setValue, ...rest } = props;

  return <MobileItemComponentStyle>
    <Box> {title} </Box>
    <Box className="value-container" onClick={() => valueAction()}>
      {value}
      <ArrowForwardIosIcon className="color-gray" />
    </Box>
  </MobileItemComponentStyle>
}