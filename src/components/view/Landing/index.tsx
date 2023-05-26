import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { Feed1Svg, Feed2Svg, Feed3Svg, generatePersonalLandingUrl, generateBusinessLandingUrl } from 'utils';
import { PATH } from 'consts';
import { PlatformContext } from 'contexts';
import { LandingViewStyle } from './index.style';
import { NewDropDownComponent } from 'components/common';

export const LandingView = () => {
  const { platformType } = useContext(PlatformContext);

  return (
    <LandingViewStyle>
      <Box className='landing-container'>
        <Box className='img-container'>
          {/* <img
            className='logo-img'
            src='/asset/Logo/MainLogo/logo_primary.png'
            alt='logo image'
          /> */}
          <Box className='logo-img'> </Box>
        </Box>

        <Box className='each-field'>
          <Typography className='title-typo'>
            We Make Banking Simple
          </Typography>
        </Box>

        <Box className='each-field'>
          <Typography className='comment-typo fontWeight-semibold column-gap-small'>
            <span>Open your</span>
            <span className={`${platformType === 'Personal' ? 'color-green' : 'color-feed-red'} fontWeight-semibold`}>
              {platformType === 'Personal' ? "Personal" : "Business"} Account
            </span>
            <span>in minutes.</span>
          </Typography>
        </Box>

        <Box className='feedback-typo feedback-comp bg-attention margin-top-32'>
          <img src={Feed1Svg} />
          {/* <img className="img-bg-feed1" /> */}
          <Typography
            className='fontWeight-semibold'
            sx={{ marginLeft: '1rem' }}
          >
            Confirm Your Email / Phone Number
          </Typography>
        </Box>

        <Box className='feedback-typo feedback-comp bg-warning-tint margin-top-16'>
          <img src={Feed2Svg} />
          <Typography
            className='fontWeight-semibold'
            sx={{ marginLeft: '1rem' }}
          >
            Verify Your Identity
          </Typography>
        </Box>

        <Box className='feedback-typo feedback-comp bg-primary-tint margin-top-16'>
          <img src={Feed3Svg} />
          <Typography
            className='fontWeight-semibold'
            sx={{ marginLeft: '1rem' }}
          >
            Get Your Account / Card
          </Typography>
        </Box>

        <Box className='buttons-container'>
          <Link to={PATH.REGISTER} className='no-underline'>
            <Button className='button bg-primary'>Create Account</Button>
          </Link>
          <Link to={PATH.LOGIN_ALL} className='no-underline'>
            <Button className='button bg-primary-light'>Log In</Button>
          </Link>
        </Box>

        <Box className='each-field'>
          <Typography className='comment-typo fontWeight-semibold column-gap-medium'>
            <span>Are you a company?</span>
            <a href={platformType === 'Business' ? generatePersonalLandingUrl() : generateBusinessLandingUrl()} className='no-underline'>
              Switch to {platformType === 'Business' ? "Personal" : "Business"} Account Account
            </a>
          </Typography>
        </Box>
      </Box>
    </LandingViewStyle>
  );
};
