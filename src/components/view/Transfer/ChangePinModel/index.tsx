import React, { useState } from 'react';
import PinInput from 'react-pin-input';
import { Box } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { TransactionVerifyModalStyle } from './index.style';
import { NotificationComponent } from 'components/common';

type ChangePinModelProps = {
  title: string;
  userEmail: string;
  onCancel: () => void;
  onConfirm: (code: string) => void;
  isVerifyTransactionInvalidCode: boolean;
  verifyTransactionModalClose: () => void;
};

export const TransactionVerifyModalComponent: React.FC<ChangePinModelProps> = ({
  title,
  userEmail,
  onCancel,
  onConfirm,
  isVerifyTransactionInvalidCode,
  verifyTransactionModalClose
}) => {
  const [verifyCode, setVerifyCode] = useState<string>('');

  const onVerifyCodeComplete = (value: string) => {
    setVerifyCode(value);
  };
  const onCancelClick = () => {
    onCancel();
  };
  const onConfirmClick = () => {
    onConfirm(verifyCode);
  };
  return (
    <TransactionVerifyModalStyle>
      <Box className='display-model-container'>
        <Box className='display-model-cancel-button' onClick={onCancelClick}>
          <svg
            width='17'
            height='17'
            viewBox='0 0 17 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.778174 16.3343C0.485282 16.0414 0.485281 15.5666 0.778174 15.2737L15.2739 0.777978C15.5668 0.485085 16.0416 0.485085 16.3345 0.777978C16.6274 1.07087 16.6274 1.54575 16.3345 1.83864L1.83884 16.3343C1.54594 16.6272 1.07107 16.6272 0.778174 16.3343Z'
              fill='#AAABAB'
            />
            <path
              d='M0.778174 0.777978C1.07107 0.485085 1.54594 0.485085 1.83883 0.777978L16.3345 15.2737C16.6274 15.5666 16.6274 16.0414 16.3345 16.3343C16.0416 16.6272 15.5668 16.6272 15.2739 16.3343L0.778175 1.83864C0.485282 1.54575 0.485282 1.07087 0.778174 0.777978Z'
              fill='#AAABAB'
            />
          </svg>
        </Box>
        <Box className='display-model-header'>{title}</Box>

        <Box className='display-model-content'>
          <Box className='display-model-content-title'>
            Enter 6-digit code sent to
          </Box>
          {
            isVerifyTransactionInvalidCode &&
            <NotificationComponent
              className="color-white bg-red gap-top-1rem"
              content="Sorry, you have entered an invalid code. Please check and try again."
              frontIcon={<HighlightOffIcon onClick={() => verifyTransactionModalClose()} />}
            />
          }
          <Box className='display-model-content-number'> {userEmail} </Box>
          <Box className='display-model-content-confirm'>
            We’ve sent you a confirmation code via Email.
          </Box>

          <Box className='verification-container'>
            {/* <SaasSixDigitsComponent
          verificationCode={verificationCode}
          isFormLable={false}
          onChange={onInputHandler}
        /> */}
            <PinInput
              length={6}
              focus
              type='numeric'
              inputMode='numeric'
              onComplete={onVerifyCodeComplete}
            />
          </Box>
        </Box>

        <Box className='display-model-footer'>
          <Box onClick={onConfirmClick} className='confirm-button'>
            Verify
          </Box>
          <Box className='model-footer-content'>
            Didn’t receive the code?
            <Box className='model-footer-content-text'>click to resend</Box>
          </Box>
        </Box>
      </Box>
    </TransactionVerifyModalStyle>
  );
};
