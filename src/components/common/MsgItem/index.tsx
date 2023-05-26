import React from 'react';

import { Box } from '@mui/material';

import { MsgItemComponentStyle } from './index.style';

type MsgItemComponentProps = {
  title: string;
  date: string;
  setCurrent: (msgIndex: number) => void;
  msgIndex: number;
  currentIndex: number;
};

export const MsgItemComponent: React.FC<MsgItemComponentProps> = ({
  title,
  date,
  setCurrent,
  msgIndex,
  currentIndex,
}) => {
  return (
    <MsgItemComponentStyle onClick={() => setCurrent(msgIndex)}>
      <Box
        className={`main-box ${
          msgIndex === currentIndex ? 'selected-active' : ''
        }`}
      >
        <Box className='title-container'>{title}</Box>
        <Box className='date-container'>{date}</Box>
      </Box>
    </MsgItemComponentStyle>
  );
};
