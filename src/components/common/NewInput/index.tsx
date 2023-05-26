import React, { useEffect, useRef } from 'react';
import { UseFormRegister, RegisterOptions } from 'react-hook-form';
import { Box, InputBase, InputBaseProps } from '@mui/material';
import { NewInputComponentStyle } from './index.style';

type NewInputComponentProps = InputBaseProps & {
  label?: string;
  border?: boolean;
  frontIcon?: React.ReactNode;
  backIcon?: React.ReactNode;
  inputSize?: 'regular' | 'large';
  register?: UseFormRegister<any>;
  options?: RegisterOptions;
};

const defaultProps: Pick<NewInputComponentProps, 'inputSize'> = {
  inputSize: 'regular',
};

export const NewInputComponent: React.FC<NewInputComponentProps> = (props) => {
  props = { ...defaultProps, ...props };

  const { label, frontIcon, backIcon, inputSize, error, name: fieldName, register, options, ...rest } = props;

  const parentRef = useRef<HTMLDivElement>(null);

  const onFocus = () => {
    parentRef.current?.classList.add('focused');
  };

  const onBlur = () => {
    parentRef.current?.classList.remove('focused');
  };

  useEffect(() => {
    if (error) {
      parentRef.current?.classList.add('error');
    } else {
      parentRef.current?.classList.remove('error');
    }
  }, [error]);

  return (
    <NewInputComponentStyle
      disabled={props.disabled}
      border={props.border}
      error={error}
      inputSize={inputSize!}
      label={label}
    >
      {!!frontIcon && <Box className='icon-container front'>{frontIcon}</Box>}
      <Box className='text-container' ref={parentRef}>
        {!!label && <Box className='label'>{label}</Box>}
        <InputBase
          className='text'
          {...rest}
          {...(register && register(fieldName!, options))}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </Box>
      {!!backIcon && <Box className='icon-container back'>{backIcon}</Box>}
    </NewInputComponentStyle>
  );
};
