import React, { useState, useRef } from 'react';
import { Box, BoxProps } from '@mui/material';
import { UploadFileComponentStyle } from './index.style';
import { UploadSvg } from 'assets/icons';

type UploadFileComponentProps = BoxProps & {
  type: string;
  getFile: (type: string, file: any) => void;
};

export const UploadFileComponent: React.FC<UploadFileComponentProps> = (props) => {
  const { type, getFile } = props;

  const [fileName, setFileName] = useState<string>();
  const [dragActive, setDragActive] = useState<boolean>(false);
  const fileInputRef = useRef<any>(null);

  const handleDrag = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dragTransfer.files && e.dataTransfer.files[0]) {

    }
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      getFile(type, e.target.files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return <UploadFileComponentStyle onClick={handleClick}>
    <img className='upload-icon' src={UploadSvg} />

    <Box className='comment-container'
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <Box className='main-comment'>
        {
          !fileName && <span className='main-comment'> Drag and drop or <Box className='color-lightBlue' sx={{ marginLeft: '5px' }}> Browse your file </Box></span>
        }
        {
          fileName && <span className='main-comment'> <Box className='color-lightBlue' sx={{ marginLeft: '5px' }}> {fileName} </Box></span>
        }
      </Box>
      <Box className='comment margin-top-8px'>
        Upload your incorporation document in JPG, PNG, or PDF format.
      </Box>
    </Box>

    <input
      ref={fileInputRef}
      accept=".pdf,.jpg,.png"
      type='file'
      style={{ display: 'none' }}
      onChange={handleChange}
    />
  </UploadFileComponentStyle>
}