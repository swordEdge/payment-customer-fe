import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Grid, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material';

import { SubscriptionCardView } from '../SubscriptionCard';
import { ServiceSubscriptionViewStyle } from './index.style';

import { PATH } from 'consts';

import { IFee, ISubscription } from 'new_models';
import { MobileHeaderComponent } from 'components/common';
import { AddCircleOutlineOutlined, SearchOffOutlined } from '@mui/icons-material';
import { EditSvg } from "assets/icons";

type ServiceSubscriptionViewProps = {
  subscription: ISubscription;
  subscriptions: ISubscription[];
  updateSubscription: (status: number) => void;
};

export const ServiceSubscriptionView: React.FC<
  ServiceSubscriptionViewProps
> = ({ subscription, subscriptions, updateSubscription }) => {

  const navigate = useNavigate();

  const onMobileHeaderPrevClick = (path: string) => {
    navigate(path);
  };

  return (
    <ServiceSubscriptionViewStyle>
      <Box className='mobile-header-container'>
        <Link className='back-button' to={PATH.SERVICES_ALL}>
          <ArrowBackIosIcon sx={{ fontSize: '1rem' }} />
          Back
        </Link>
        <MobileHeaderComponent
          title='My Subscription'
          backPath={PATH.SERVICES}
          prevAction={onMobileHeaderPrevClick}
        />
      </Box>
      <Box className='main-container'>
        <Box className='page-title-container'>
          My Subscription
        </Box>
        <Box className='title-container'>
          <Box className='title-div'>
            Current Subscription
          </Box>
          <Box className='change-btn-div'>
            <img src={EditSvg} />
            <Box>
              <Link className='back-button' to={PATH.SERVICES_INDEX + '/' + PATH.SERVICES_SUBSCRIPTION_CHANGE} style={{ marginTop: "0" }}>
                Change Subscription
              </Link>
            </Box>
          </Box>
        </Box>
        <Box className='subscription-card-container'>
          <SubscriptionCardView subscription={subscription} isCurrentSubscription={true} isSelected={false} />
        </Box>
      </Box>
    </ServiceSubscriptionViewStyle >
  );
};
