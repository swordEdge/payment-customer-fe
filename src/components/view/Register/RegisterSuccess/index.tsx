import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { RegisterSuccessStyle } from './index.style';

import { ButtonComponent } from 'components/common';

import { IUser } from 'models';

type RegisterSuccessViewProps = {
  user: IUser;
  getVendor: (emailAddress: string) => void;
};

export const RegisterSuccessView: React.FC<RegisterSuccessViewProps> = ({
  user,
  getVendor,
}) => {
  const gotoVerify = () => {
    getVendor(user.emailAddress || '');
    //TODO
  };

  return (
    <RegisterSuccessStyle>
      <Box className='register-success-svg'>
        <svg
          width='66'
          height='58'
          viewBox='0 0 66 58'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='30' cy='17' r='13.8' stroke='#2869FF' strokeWidth='2.4' />
          <path
            d='M8.23404 54.8C8.8557 43.8709 17.9153 35.2 29 35.2H31C42.0847 35.2 51.1443 43.8709 51.766 54.8H8.23404Z'
            stroke='#2869FF'
            strokeWidth='2.4'
          />
          <circle cx='53' cy='45' r='13' fill='#08CC7D' />
          <path
            d='M51.6134 47.1993L57.9865 40.8254L58.9676 41.8058L51.6134 49.16L47.201 44.7476L48.1814 43.7673L51.6134 47.1993Z'
            fill='white'
          />
        </svg>
      </Box>
      <Typography className='action-title'>

        Registered Successfully
      </Typography>

      <Box className='notice-container'>
        <Typography className='notice-title'>

          Thanks for the registering. You can get a higher limit by verifying
          <br></br> your identify. This process will take a minite
        </Typography>
        <Link className='email-link' to=''>

        </Link>
      </Box>

      <Box className='notice-container' sx={{ justifyContent: 'center' }}>
        <Typography className='notice-title'>

          We will verify your passport and face authentication
        </Typography>
      </Box>
      <Box className='continueButton-container' onClick={gotoVerify}>
        <ButtonComponent label='Continue' />
      </Box>
      {/* <Box className="skipButton-container" onClick={gotoDashboard}>
        <ButtonComponent label="Skip" />
      </Box> */}
    </RegisterSuccessStyle>
  );
};
