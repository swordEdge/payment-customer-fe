import React, { useState } from 'react';

import { Box } from '@mui/material';

import { ChangePinModelView } from '../ChangePinModel';
import { SuccessChangePinModelView } from '../ChangePinModel/SuccessModel';
//sub components
import { ConfirmModelView } from '../ConfirmModel';
import { DisplayPinModelView } from '../DisplayPinModel';
import { VerifyModelView } from '../DisplayPinModel/VerifyModel';
import { OrderCardModelView } from '../OrderCardModel';
import { VisaCardViewStyle } from './index.style';

type VisaCardViewProps = {
  cardName: string;
  status: boolean;
  currentBalance: number;
  cashType: string;
  cardNumber: string;
  lastDate: string;
  bgColor: string;
};

const confirmTexts = [
  'This card will be cancelled and no longer \n available for processing! Please confirm to \n proceed.',
  ' This card will be Blocked and will be unavailable \n for use until Unblocked.Please confirm to \n proceed.',
  'This card will be Unblocked and available again \n for use. Please confirm to proceed.',
  'This card will be now Activited and will be \n available for use. Please confirm to proceed.',
];

const orderCardTitles = [
  'Order Card',
  'Confirm Cancelation and Card Re-order',
  'Confirm Replacement Card Order',
];

const activeColor = '#3937DE';

export const VisaCardView: React.FC<VisaCardViewProps> = ({
  cardName,
  status,
  currentBalance,

  cardNumber,
  lastDate,
  bgColor,
  // setsubmenu,
  // submenu,
}) => {
  const dropDownFillColor = '#AAABAB';
  const [submenu, setsubmenu] = useState(false);
  const [dropdownColor, setDropDownColor] = useState<string>(dropDownFillColor);

  //confirm care
  const [confirmCard, setconfirmCard] = useState<boolean>(false);
  const [confirmText, setConfirmText] = useState<string>(confirmTexts[0]);

  //order card
  const [orderCard, setorderCard] = useState<boolean>(false);
  const [orderText, setorderText] = useState<string>(orderCardTitles[0]);

  //display Pin
  const [displayPin, setdisplayPin] = useState<boolean>(false);

  //change Pin
  const [changePin, setChangePin] = useState<boolean>(false);

  //confirm card model
  const onconfirmCard = (index: number) => {
    setConfirmText(confirmTexts[index]);
    setconfirmCard(true);
  };

  const onconfirmCardCancel = () => {
    setconfirmCard(false);
  };

  const onconfirmCardConfirm = () => {
    setconfirmCard(false);
  };

  //order card model

  const onOrderCard = (index: number) => {
    setorderText(orderCardTitles[index]);
    setorderCard(true);
  };

  const onOrderCardCancel = () => {
    setorderCard(false);
  };

  const onOrderCardConfirm = () => {
    setorderCard(false);
  };

  //display Pin model

  const onDisplayPin = () => {
    setdisplayPin(true);
  };

  const onDisplayPinCancel = () => {
    setdisplayPin(false);
  };

  const onDisplayPinConfirm = () => {
    onVerify();
    setdisplayPin(false);
  };

  const [verify, setVerify] = useState<boolean>(false);

  const onVerify = () => {
    setVerify(true);
  };

  const onVerifyCancel = () => {
    setVerify(false);
  };

  const onVerifyConfirm = () => {
    setVerify(false);
  };

  //change the Pin model
  const onChangePin = () => {
    setChangePin(true);
  };

  const onChangePinCancel = () => {
    setChangePin(false);
  };

  const onChangePinConfirm = () => {
    setChangePin(false);
    onSuccessModel();
  };

  const [successModel, setSuccessModel] = useState<boolean>(false);

  const onSuccessModel = () => {
    setSuccessModel(true);
  };

  const onSuccessModelCancel = () => {
    setSuccessModel(false);
  };

  const onSuccessModelConfirm = () => {
    setSuccessModel(false);
  };

  //dropdown menu
  const showDropDown = () => {
    setDropDownColor(
      dropdownColor === activeColor ? dropDownFillColor : activeColor
    );
    setsubmenu(!submenu);
  };

  return (
    <VisaCardViewStyle>
      <Box className='visa-card-header-container'>
        <Box className='visa-card-name-text'>{cardName}</Box>
        <Box className='visa-card-setting-group'>
          <Box className='visa-status-button'>
            {status ? 'Active' : 'Block'}
          </Box>
          <Box className='visa-status-dropdown' onClick={showDropDown}>
            <svg
              width='18'
              height='4'
              viewBox='0 0 18 4'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M18 2C18 0.9 17.1 -3.93402e-08 16 -8.74228e-08C14.9 -1.35505e-07 14 0.9 14 2C14 3.1 14.9 4 16 4C17.1 4 18 3.1 18 2ZM4 2C4 0.899999 3.1 -6.513e-07 2 -6.99382e-07C0.9 -7.47465e-07 -3.93403e-08 0.899999 -8.74228e-08 2C-1.35505e-07 3.1 0.899999 4 2 4C3.1 4 4 3.1 4 2ZM11 2C11 0.9 10.1 -3.4532e-07 9 -3.93402e-07C7.9 -4.41485e-07 7 0.899999 7 2C7 3.1 7.9 4 9 4C10.1 4 11 3.1 11 2Z'
                fill={dropdownColor}
              />
            </svg>
          </Box>
          {submenu && (
            <Box className='visa-card-menu'>
              <Box
                className='visa-card-menuItem-header'
                onClick={() => {
                  onconfirmCard(0);
                }}
              >
                <Box className='visa-card-menuItem'>Cancel Card</Box>
              </Box>
              <Box
                className='visa-card-menuItem-container'
                onClick={() => {
                  onconfirmCard(1);
                }}
              >
                <Box className='visa-card-menuItem'>Block Card</Box>
              </Box>
              <Box
                className='visa-card-menuItem-container'
                onClick={() => {
                  onconfirmCard(2);
                }}
              >
                <Box className='visa-card-menuItem'>Unlock Card</Box>
              </Box>
              <Box
                className='visa-card-menuItem-container'
                onClick={onDisplayPin}
              >
                <Box className='visa-card-menuItem'>Display Pin</Box>
              </Box>
              <Box
                className='visa-card-menuItem-container'
                onClick={onChangePin}
              >
                <Box className='visa-card-menuItem'>Change Pin</Box>
              </Box>
              <Box
                className='visa-card-menuItem-container'
                onClick={() => onOrderCard(1)}
              >
                <Box className='visa-card-menuItem'>Cancel and Re-order</Box>
              </Box>
              <Box
                className='visa-card-menuItem-container'
                onClick={() => onOrderCard(2)}
              >
                <Box className='visa-card-menuItem'>Replace Card</Box>
              </Box>
              <Box
                className='visa-card-menuItem-footer'
                onClick={() => {
                  onconfirmCard(3);
                }}
              >
                <Box className='visa-card-menuItem'>Activite Card</Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      <Box
        className='visa-card-body-container'
        sx={{ background: `${bgColor}` }}
      >
        <Box className='visa-card-body-header'>
          <Box className='visa-current-text'>Current Balance</Box>
          <Box className='visa-name-text'>
            <svg
              width='18'
              height='16'
              viewBox='0 0 18 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M13.6601 0.777832L9.86561 10.7778L9.48617 8.74079L8.1581 1.98154C7.96838 1.05561 7.20949 0.777832 6.35573 0.777832H0.189723C0.0948617 0.777832 0.0948617 0.870425 0 0.870425C0 0.963017 0 1.05561 0.0948617 1.05561C1.04348 1.33339 1.89723 1.61117 2.65613 1.98154C3.50988 2.35191 4.07905 3.09265 4.36364 3.92598L7.49407 15.4075H11.5731L17.6443 0.777832C17.6443 0.777832 13.6601 0.777832 13.6601 0.777832Z'
                fill='#333333'
              />
            </svg>
            <svg
              width='8'
              height='16'
              viewBox='0 0 8 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3.35166 0.777832L0.885254 15.4075H4.77458L7.24099 0.777832H3.35166Z'
                fill='#333333'
              />
            </svg>
            <svg
              width='12'
              height='16'
              viewBox='0 0 12 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8.02 6.7037C6.69194 6.05556 5.83818 5.59259 5.83818 4.85185C5.83818 4.2037 6.50222 3.55556 8.02 3.55556C9.25321 3.55556 10.2018 3.83333 10.9607 4.11111L11.3402 4.2963L11.9093 1.14815C11.1504 0.87037 9.91723 0.5 8.39945 0.5C4.60498 0.5 1.854 2.53704 1.854 5.31481C1.854 7.44444 3.75123 8.64815 5.26901 9.2963C6.7868 10.037 7.26111 10.5 7.26111 11.1481C7.26111 12.1667 6.02791 12.537 4.88957 12.537C3.37178 12.537 2.51803 12.3519 1.18996 11.7963L0.715655 11.5185L0.146484 14.7593C1.0951 15.1296 2.70775 15.5 4.51012 15.5C8.58917 15.5 11.2453 13.5556 11.2453 10.5C11.3402 9.01852 10.2967 7.72222 8.02 6.7037Z'
                fill='#333333'
              />
            </svg>
            <svg
              width='14'
              height='16'
              viewBox='0 0 14 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.83383 0.777832C6.88521 0.777832 6.22118 1.05561 5.84174 1.98154L0.0551758 15.5001H4.13423C4.13423 15.5001 4.79826 13.6482 4.98798 13.2778C5.46229 13.2778 9.35162 13.2778 9.92079 13.2778C10.0156 13.8334 10.3951 15.5001 10.3951 15.5001H13.9998L10.8694 0.777832H7.83383ZM6.03146 10.2223C6.31604 9.38894 7.54924 6.1482 7.54924 6.1482C7.54924 6.1482 7.83383 5.31487 8.02355 4.75931L8.30814 6.05561C8.30814 6.05561 9.06703 9.57413 9.25675 10.3149L6.03146 10.2223Z'
                fill='#333333'
              />
            </svg>
          </Box>
        </Box>
        <Box className='visa-current-balance-container'>
          <Box className='current-balance-text'>€ {currentBalance}</Box>
          <Box className='current-cash-type'>
            <svg
              width='41'
              height='15'
              viewBox='0 0 41 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0.708984 0.154297H11.168V1.91211H2.60352V6.26758H10.5234V7.92773H2.60352V12.791H11.3145V14.5H0.708984V0.154297ZM15.9727 0.154297V9.02148C15.9727 10.0632 16.168 10.929 16.5586 11.6191C17.138 12.6608 18.1146 13.1816 19.4883 13.1816C21.1354 13.1816 22.2552 12.6185 22.8477 11.4922C23.1667 10.8802 23.3262 10.0566 23.3262 9.02148V0.154297H25.2988V8.21094C25.2988 9.97526 25.0612 11.3327 24.5859 12.2832C23.7135 14.015 22.0664 14.8809 19.6445 14.8809C17.2227 14.8809 15.5788 14.015 14.7129 12.2832C14.2376 11.3327 14 9.97526 14 8.21094V0.154297H15.9727ZM34.9863 6.72656C35.8978 6.72656 36.6172 6.54427 37.1445 6.17969C37.6784 5.8151 37.9453 5.15755 37.9453 4.20703C37.9453 3.1849 37.5742 2.48828 36.832 2.11719C36.4349 1.92188 35.9043 1.82422 35.2402 1.82422H30.4941V6.72656H34.9863ZM28.5508 0.154297H35.1914C36.2852 0.154297 37.1868 0.313802 37.8965 0.632812C39.2441 1.24479 39.918 2.37435 39.918 4.02148C39.918 4.88086 39.7389 5.58398 39.3809 6.13086C39.0293 6.67773 38.5345 7.11719 37.8965 7.44922C38.4564 7.67708 38.8763 7.97656 39.1562 8.34766C39.4427 8.71875 39.6022 9.32096 39.6348 10.1543L39.7031 12.0781C39.7227 12.625 39.7682 13.0319 39.8398 13.2988C39.957 13.7546 40.1654 14.0475 40.4648 14.1777V14.5H38.082C38.0169 14.3763 37.9648 14.2168 37.9258 14.0215C37.8867 13.8262 37.8542 13.4486 37.8281 12.8887L37.7109 10.4961C37.6654 9.55859 37.3171 8.93034 36.666 8.61133C36.2949 8.43555 35.7122 8.34766 34.918 8.34766H30.4941V14.5H28.5508V0.154297Z'
                fill='#333333'
              />
            </svg>
          </Box>
        </Box>
        <Box className='visa-card-body-footer'>
          <Box>{cardNumber}</Box>
          <Box>{lastDate}</Box>
        </Box>
      </Box>

      {confirmCard && (
        <ConfirmModelView
          text={confirmText}
          onCancel={onconfirmCardCancel}
          onConfirm={onconfirmCardConfirm}
        />
      )}

      {orderCard && (
        <OrderCardModelView
          title={orderText}
          onCancel={onOrderCardCancel}
          onConfirm={onOrderCardConfirm}
        />
      )}

      {displayPin && (
        <DisplayPinModelView
          title={'2 Factor Authentication'}
          onCancel={onDisplayPinCancel}
          onConfirm={onDisplayPinConfirm}
        />
      )}

      {verify && (
        <VerifyModelView
          onConfirm={onVerifyConfirm}
          onCancel={onVerifyCancel}
        />
      )}

      {changePin && (
        <ChangePinModelView
          title={'Change PIN'}
          onCancel={onChangePinCancel}
          onConfirm={onChangePinConfirm}
        />
      )}

      {successModel && (
        <SuccessChangePinModelView
          title={'Change PIN'}
          onCancel={onSuccessModelCancel}
          onConfirm={onSuccessModelConfirm}
        />
      )}
    </VisaCardViewStyle>
  );
};
