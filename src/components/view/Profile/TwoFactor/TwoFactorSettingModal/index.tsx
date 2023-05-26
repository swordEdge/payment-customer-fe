import React, { useEffect, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Typography } from '@mui/material';
import QRCode from 'qrcode';

import { TwoFactorSettingModalStyle } from './index.style';

import { InputComponent, NewButtonComponent } from 'components/common';

type TwoFactorSettingModalProps = {
  onCancel: () => void;
  onVerify: () => void;
  otpAuthUrl: string;
  optBase32: string;
  sendVerifyCode: (code: string) => void;
  verify: string;
};

export const TwoFactorSettingModal: React.FC<TwoFactorSettingModalProps> = ({
  onCancel,
  onVerify,
  otpAuthUrl,
  optBase32,
  sendVerifyCode,
  verify,
}) => {
  const [qrcodeUrl, setqrCodeUrl] = useState<string>('');
  const [verifyCode, setVerifyCode] = useState<string>('');
  const [isAlert, setAlert] = useState<boolean>(false);

  useEffect(() => {
    if (verify == 'success') {
      onVerify();
    } else if (verify === 'Request failed with status code 401') {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }
  }, [verify]);

  const onCancelClick = () => {
    onCancel();
  };

  const handleVerifyCodeChange = (event: any) => {
    setVerifyCode(event.target.value);
  };

  const onVerifySubmit = (event: React.FormEvent) => {
    event.preventDefault();
    sendVerifyCode(verifyCode);
  };

  useEffect(() => {
    if (otpAuthUrl) {
      QRCode.toDataURL(otpAuthUrl).then(setqrCodeUrl);
    }
  }, [otpAuthUrl]);

  return (
    <TwoFactorSettingModalStyle>
      <form onSubmit={onVerifySubmit}>
        <Box className='modal-container'>
          <Box className='modal-header'>
            <Box className='cancel-button'>
              <CloseIcon
                onClick={onCancelClick}
                className='cancel-button'
                sx={{ cursor: 'pointer' }}
              />
            </Box>

            <Typography className='header-title'>
              Two Factor Authenication
            </Typography>
            <hr />
          </Box>

          <Box className='modal-content'>
            <Box className='title-container'>

              Configuring Google Authenticator or Authy!
            </Box>
            <hr />
            <Box className='description-container'>
              <ol>
                <li>
                  Install Google Authenticator (IOS - Android) or Authy (IOS -
                  Android).
                </li>
                <li>In the authenticator app, select "+" icon.</li>
                <li>
                  Select "Scan a barcode (or QR code)" and use the phone's
                  camera to scan this barcode.
                </li>
              </ol>
            </Box>
            <Box className='title-container'>Scan QR Code</Box>
            <hr />
            <Box className='description-container qrcode'>
              <img src={qrcodeUrl} alt='qrcode' />
            </Box>
            <Box className='title-container'>Or Enter Code Into Your App</Box>
            <hr />
            <Box className='description-container'>
              <p>SecretKey: {optBase32}</p>
            </Box>
            <Box className='title-container'>Verify Code</Box>
            <hr />
            <Box className='description-container'>
              <InputComponent
                required={true}
                value={verifyCode}
                name='verifyCode'
                type='text'
                onChange={handleVerifyCodeChange}
              />
            </Box>
            <Box sx={{ height: '1rem' }}></Box>
            <Box className='action-button-container'>
              <NewButtonComponent onClick={onCancelClick} className="button fontweight-bold border-color-grey button-hover-grey">
                Cancel
              </NewButtonComponent>
              <NewButtonComponent type='submit' className="button bg-accent-blue fontweight-bold color-white">
                Verify
              </NewButtonComponent>
            </Box>
          </Box>
        </Box>
      </form>

      {isAlert && (
        <Box className='alert-container'>This is token is invaild</Box>
      )}
    </TwoFactorSettingModalStyle>
  );
};
