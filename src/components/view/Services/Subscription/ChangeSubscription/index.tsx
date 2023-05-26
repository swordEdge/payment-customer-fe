import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Radio } from '@mui/material';

import { SubscriptionCardView } from '../SubscriptionCard';
import { ConfirmModelView } from '../ConfirmModal';
import { ServiceSubscriptionViewStyle } from './index.style';

import { PATH } from 'consts';

import { IFee, ISubscription } from 'new_models';
import { MobileHeaderComponent, NewButtonComponent } from 'components/common';
import { AddCircleOutlineOutlined, SearchOffOutlined } from '@mui/icons-material';
import { EditSvg } from "assets/icons";

type ChangeSubscriptionViewProps = {
  subscription: ISubscription;
  subscriptions: ISubscription[];
  updateSubscription: (status: number) => void;
};

export const ChangeSubscriptionView: React.FC<
  ChangeSubscriptionViewProps
> = ({ subscription, subscriptions, updateSubscription }) => {

  const [selectedId, setSelectedId] = useState(subscription?.id || -1)
  const [isConfirm, setIsConfirm] = useState(false)

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
      <Box className='main-container change-subscription-page'>
        <Box className='page-title-container'>
          Change Subscription
        </Box>
        <Box className='cards-wrapper'>
          {subscriptions.map((cur, index) => {
            return (
              <Box className='subscription-card-container' onClick={() => {
                setSelectedId(cur.id)
              }}>
                <SubscriptionCardView key={cur.id} subscription={cur} isCurrentSubscription={false} isSelected={selectedId == cur.id} isRadio={true} />
              </Box>
            )
          })}
        </Box>
      </Box>
      <div className='margin-top-32 button-container'>
        <NewButtonComponent className='button-item'>
          <Link to={`${PATH.SERVICES_INDEX + '/' + PATH.SERVICES_SUBSCRIPTION}`}>
            Cancel
          </Link>
        </NewButtonComponent>
        <NewButtonComponent
          type='submit'
          className='button-item'
          disabled={selectedId == subscription?.id}
          onClick={() => {
            setIsConfirm(true)
          }}
        >
          Change Subscription
        </NewButtonComponent>
        {isConfirm && (
          <ConfirmModelView
            text={"You are about to change your \n subscription, Please confirm to proceed."}
            onCancel={() => { setIsConfirm(false) }}
            onConfirm={() => { updateSubscription(selectedId) }}
          />
        )}
      </div>
    </ServiceSubscriptionViewStyle>
  );
};
