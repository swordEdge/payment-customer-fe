import React from 'react';

import { Box } from '@mui/material';

import { ConfirmModelViewStyle } from './index.style';

type ConfirmModelViewProps = {
  text: string;
  onCancel: () => void;
  onConfirm: () => void;
};

export const ConfirmModelView: React.FC<ConfirmModelViewProps> = ({
  text,
  onCancel,
  onConfirm,
}) => {
  const onCancelClick = () => {
    onCancel();
  };

  const onConfirmClick = () => {
    onConfirm();
  };
  return (
    <ConfirmModelViewStyle>
      <Box className='modal-container'>
        <Box className='modal-header'>
          <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M51.5493 47.6L37.6929 23.6C37.385 23.0667 36.6152 23.0667 36.3072 23.6L22.4508 47.6C22.1429 48.1333 22.5278 48.8 23.1437 48.8H50.8565C51.4723 48.8 51.8572 48.1333 51.5493 47.6ZM40.4642 22C38.9246 19.3333 35.0756 19.3333 33.536 22L19.6796 46C18.14 48.6667 20.0645 52 23.1437 52H50.8565C53.9357 52 55.8602 48.6667 54.3206 46L40.4642 22ZM38.4792 28.8H35.5207C34.9234 28.8 34.4593 29.3202 34.5272 29.9136L35.8986 41.9136C35.9563 42.4187 36.3838 42.8 36.8921 42.8H37.1077C37.616 42.8 38.0435 42.4187 38.1012 41.9136L39.4727 29.9136C39.5406 29.3202 39.0765 28.8 38.4792 28.8ZM37 46.9999C37.9941 46.9999 38.8 46.194 38.8 45.1999C38.8 44.2058 37.9941 43.3999 37 43.3999C36.0058 43.3999 35.2 44.2058 35.2 45.1999C35.2 46.194 36.0058 46.9999 37 46.9999Z" fill="#FFC924" />
            <rect x="1" y="0.5" width="71" height="71" rx="35.5" stroke="#FFC924" />
          </svg>

        </Box>

        <Box className='modal-content'>
          {text.split('\n').map((e) => (
            <>
              {e}
              <br />
            </>
          ))}
        </Box>

        <Box className='modal-footer'>
          <Box onClick={onCancelClick} className='cancel-button'>
            Cancel
          </Box>
          <Box onClick={onConfirmClick} className='confirm-button'>
            Confirm
          </Box>
        </Box>
      </Box>
    </ConfirmModelViewStyle>
  );
};
