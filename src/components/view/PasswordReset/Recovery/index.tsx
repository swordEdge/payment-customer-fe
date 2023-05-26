import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Box, Button, Divider, Typography } from '@mui/material';

import { RecoveryStyle } from './index.style';

import { InputComponent } from 'components/common';

import { Error } from 'models';

type Props = {
  veifyEmail: (emailAddress: string) => void;
  error: Error;
};

export const RecoveryView: React.FC<Props> = ({ veifyEmail, error }) => {
  const [isError, setIsError] = useState<boolean>(false);

  const [emailAddress, setEmailAddress] = useState<string>('');
  const handleInputChange = (e: any) => {
    setEmailAddress(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    veifyEmail(emailAddress);
  };

  useEffect(() => {
    if (error.res === false) {
      setIsError(true);
      setTimeout(() => {
        setIsError((prev) => !prev);
      }, 5000);
    }
  }, [error]);

  return (
    <RecoveryStyle>
      <Typography className='page-title'> Password Recovery </Typography>
      <Typography className='action-title'>
        
        Please Enter Your Email
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box className='input-container'>
          <Box className='individual-input'>
            <InputComponent
              required={true}
              label='Email Address'
              value={emailAddress}
              type='email'
              name='mail'
              onChange={handleInputChange}
            />
          </Box>
        </Box>

        <Box className='recoveryButton-container'>
          <Button className='recovery-button-item' type='submit'>
            Request New Password
          </Button>
        </Box>
      </form>
      <Divider className='divider-box'> Or </Divider>

      <Box className='loginLink-container'>
        <Link className='login-link link' to='/login'>
          
          Log In
        </Link>
      </Box>
      {isError && <Box className='alert-container'>{error.message}</Box>}
    </RecoveryStyle>
  );
};
