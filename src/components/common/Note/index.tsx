import React from 'react';
import { Box, BoxProps } from '@mui/material';
import { NoteComponentStyle } from './index.style';

type NoteComponentProps = BoxProps & {
  iconElement: React.ReactElement,
  title?: string;
  content?: string;
};

export const NoteComponent: React.FC<NoteComponentProps> = (props) => {
  const { iconElement, title, content, ...rest } = props;
  return <NoteComponentStyle className={rest.className}>
    {iconElement}
    <Box className="title"> {title} </Box>
    <Box className="content"> {content} </Box>
  </NoteComponentStyle>
};