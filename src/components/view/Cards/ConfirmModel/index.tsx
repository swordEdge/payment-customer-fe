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
          <svg
            width='84'
            height='84'
            viewBox='0 0 84 84'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='42' cy='42' r='42' fill='#FFC800' />
            <path
              d='M37.0512 32.4447C36.621 29.571 38.9578 27 42 27C45.0422 27 47.379 29.571 46.9488 32.4447L44.9905 45.5251C44.7779 46.9452 43.5033 48 42 48C40.4967 48 39.2221 46.9452 39.0095 45.5251L37.0512 32.4447Z'
              fill='white'
            />
            <path
              d='M45.668 54.5C45.668 56.433 44.0258 58 42 58C39.9742 58 38.332 56.433 38.332 54.5C38.332 52.567 39.9742 51 42 51C44.0258 51 45.668 52.567 45.668 54.5Z'
              fill='white'
            />
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
