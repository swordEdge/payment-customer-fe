import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';

import { SubscriptionTableView } from '../SubscriptionTable';
import { SubscriptionModalStyle } from './index.style';

import { IFee, ISubscription } from 'models';

const tableData: ISubscription[] = [
  {
    memo: 'Registratrion',
    flat: '600',
    percentage: '',
  },
  {
    memo: 'Monthly Subscription',
    flat: '70',
    percentage: '',
  },
  {
    memo: 'Add Account',
    flat: '10',
    percentage: '',
  },
  {
    memo: 'Deposit In',
    flat: '',
    percentage: '0.2%',
  },
  {
    memo: 'Transfer Out',
    flat: '€ 0.20',
    percentage: '0.1%',
  },
];

type SubscriptionModalProps = {
  subscriptions: IFee[];
  subscriptionId: number;
  updateSubscription: (status: number) => void;
  onCancel: () => void;
};

export const SaasSubscriptionModal: React.FC<SubscriptionModalProps> = ({
  subscriptions,
  subscriptionId,
  updateSubscription,
  onCancel,
}) => {
  const [expanded, setExpanded] = React.useState<string | false>('null');
  const [status, setStatus] = React.useState<number>(subscriptionId);

  const checked = (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' r='12' fill='#2869FF' />
      <g clipPath='url(#clip0_164_4927)'>
        <path
          d='M11.0624 13.9487L15.1247 10.125L15.75 10.7131L11.0624 15.125L8.25 12.478L8.87489 11.8898L11.0624 13.9487Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_164_4927'>
          <rect
            width='15'
            height='15'
            fill='white'
            transform='translate(4.5 4.5)'
          />
        </clipPath>
      </defs>
    </svg>
  );

  const unChecked = (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' r='12' fill='white' stroke='#E6E9EB' />
      <g clipPath='url(#clip0_164_4102)'>
        <path
          d='M11.0624 13.9487L15.1247 10.125L15.75 10.7131L11.0624 15.125L8.25 12.478L8.87489 11.8898L11.0624 13.9487Z'
          fill='#9E9EA7'
        />
      </g>
      <defs>
        <clipPath id='clip0_164_4102'>
          <rect
            width='15'
            height='15'
            fill='white'
            transform='translate(4.5 4.5)'
          />
        </clipPath>
      </defs>
    </svg>
  );

  const onCancelClick = () => {
    onCancel();
  };

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const handleStatus = (id: number) => {
    setStatus(id);
  };

  return (
    <SubscriptionModalStyle>
      <Box className='modal-container'>
        <Box className='modal-header'>
          <Box className='cancel-button'>
            <CloseIcon
              onClick={onCancelClick}
              className='cancel-button'
              sx={{ cursor: 'pointer' }}
            />
          </Box>

          <Box className='title-typo'> Change Subscription </Box>

          <Box>
            {subscriptions.map((subscription, index) => (
              <Accordion
                key={index}
                expanded={expanded === subscription.id.toString()}
                onChange={handleChange(subscription.id.toString())}
              >
                <AccordionSummary
                  aria-controls='panel1d-content'
                  id='panel1d-header'
                >
                  <div onClick={() => handleStatus(subscription.id)}>
                    {status === subscription.id ? checked : unChecked}
                  </div>
                  <Typography>{subscription.model}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <SubscriptionTableView
                      data={
                        subscriptions
                          ? JSON.parse(
                              subscription.optionJson
                                .replace(/([a-zA-Z0-9]+?):/g, '"$1":')
                                .replace(/'/g, '"')
                            )
                          : tableData
                      }
                      currency={subscription ? subscription?.currency : 'USD'}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
          <Box
            className='action-button-container'
            style={{
              marginTop: '30px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Button
              type='submit'
              className='create-button-item'
              style={{ backgroundColor: 'lightgray', color: 'black' }}
              onClick={onCancelClick}
            >
              Cancel
            </Button>
            <Button
              type='submit'
              className='create-button-item'
              style={{ backgroundColor: '#3937DE', color: 'white' }}
              onClick={() => updateSubscription(status)}
            >
              Confirm
            </Button>
          </Box>
        </Box>
      </Box>
    </SubscriptionModalStyle>
  );
};
