import React from 'react';
import { Link } from 'react-router-dom';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box } from '@mui/material';

import { ServiceReferralsViewStyle } from './index.style';

import { PATH } from 'consts';

export const ServiceReferralsView: React.FC = () => {
  return (
    <ServiceReferralsViewStyle>
      <Box className='main-container'>
        <Link className='back-button' to={PATH.SERVICES_ALL}>
          <ArrowBackIosIcon sx={{ fontSize: '1rem' }} />
          Back
        </Link>
      </Box>
    </ServiceReferralsViewStyle>
  );
};
