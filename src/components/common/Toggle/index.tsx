import React from 'react';
import { Link } from 'react-router-dom';

import { Box } from '@mui/material';

import { ToggleStyle } from './index.style';

import { IToggleButton } from 'models';

type Props = {
  buttons: IToggleButton[];
  width: string;
  setCurrentButtons: Function;
  currentButtons: number;
};

export const ToggleComponent: React.FC<Props> = ({
  buttons,
  width,
  setCurrentButtons,
  currentButtons,
}) => {
  return (
    <ToggleStyle>
      {buttons.map((button, index) => {
        return (
          <Box
            className={`${
              index === currentButtons ? 'active-button' : 'inactive-button'
            }`}
            key={index}
            // to={button.path}
            onClick={() => setCurrentButtons(parseInt(button.path))}
          >
            <Box className='box-container' sx={{ width: `${width}` }}>
              {button.title}
            </Box>
          </Box>
        );
      })}
    </ToggleStyle>
  );
};
