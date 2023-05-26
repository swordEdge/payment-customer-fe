import React from 'react';

import {
  CheckBoxRounded,
  CloseOutlined,
  ErrorOutlineRounded,
} from '@mui/icons-material';

import { NewModalComponentRootStyle } from './index.style';

type NewModalComponentRootProps = {
  children?: React.ReactNode;
  isClosable?: boolean;
  onClose?: () => void;
  alert?: 'success' | 'error';
};

const defaultProps: Pick<NewModalComponentRootProps, 'isClosable'> = {
  isClosable: false,
};

export const NewModalComponentRoot: React.FC<NewModalComponentRootProps> = (
  props
) => {
  props = { ...defaultProps, ...props };

  const { children, alert, isClosable, onClose } = props;

  return (
    <NewModalComponentRootStyle>
      <div className='modal'>
        {isClosable && (
          <div className='close-button-container'>
            <CloseOutlined className='close-button' onClick={onClose} />
          </div>
        )}
        {alert && alert === 'success' && (
          <CheckBoxRounded className='alert-icon-container' />
        )}
        {alert && alert === 'error' && (
          <ErrorOutlineRounded className='alert-icon-container' />
        )}

        {children}
      </div>
    </NewModalComponentRootStyle>
  );
};
