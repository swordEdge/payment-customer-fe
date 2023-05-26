import React, { useEffect, useState } from 'react';
import PinInput from 'react-pin-input';
import { Link, useNavigate } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';

import { ConfirmStyle } from './index.style';

import { InputComponent } from 'components/common';

import { Error, IUser } from 'models';

type Props = {
  verifyUser: (emailAddress: string, code: string, newPassword: string) => void;
  verifyEmail: (user: IUser) => void;
  user: IUser;
  error: Error;
};

export const ConfirmView: React.FC<Props> = ({
  verifyUser,
  verifyEmail,
  user,
  error,
}) => {
  const navigate = useNavigate();

  const [isError, setIsError] = useState<boolean>(false);

  const [verifyCode, setVerifyCode] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleInputChange = (e: any) => {
    setPassword(e.target.value);
  };

  const onVerifyComplete = (e: any) => {
    setVerifyCode(e);
  };

  const onVerifyCode = (e: any) => {
    e.preventDefault();
    verifyUser(user.emailAddress || '', verifyCode, password);
  };

  const onVerifyResend = () => {
    verifyEmail(user);
  };

  useEffect(() => {
    if (error.res === false) {
      setIsError(true);
      setTimeout(() => {
        setIsError((prev) => !prev);
      }, 5000);
    }
  }, [error]);

  useEffect(() => {
    if (!user.emailAddress) {
      navigate('/login/recovery');
    }
  }, []);

  return (
    <ConfirmStyle>
      <Typography className='action-title'> Confirm Your Email </Typography>
      <Box className='notice-container'>
        <Typography className='notice-title'>
          
          We sent a verification link to
        </Typography>
        <Link className='email-link' to=''>
          
          <pre> {user.emailAddress} </pre>
        </Link>
      </Box>

      <Box className='verification-container'>
        <PinInput
          length={6}
          focus
          type='numeric'
          inputMode='numeric'
          onComplete={onVerifyComplete}
        />
      </Box>
      <form onSubmit={onVerifyCode}>
        <Box className='input-container'>
          <Box className='individual-input'>
            <InputComponent
              label='New Password'
              type='password'
              name='password'
              required={true}
              value={password}
              onChange={handleInputChange}
            />
          </Box>
        </Box>

        <Box className='resetButton-container'>
          <Button className='resetButton-button-item' type='submit'>
            Reset Password
          </Button>
        </Box>
      </form>

      <Box className='resendLink-container'>
        <Box> Didn't receive the email? </Box>
        <Typography className='email-link' onClick={onVerifyResend}>
          
          click to resend
        </Typography>
      </Box>
      {isError && <Box className='alert-container'>{error.message}</Box>}
    </ConfirmStyle>
  );
};
