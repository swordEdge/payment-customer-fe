import React, { useEffect, useState, useContext, useMemo } from 'react';
import PinInput from 'react-pin-input';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { HighlightOff } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { CheckEmailPhoneViewStyle } from './index.style';
import { NewButtonComponent, NotificationComponent, BackwardButtonComponent } from 'components/common';
import { PATH, VERIFY_METHOD } from 'consts';
import { PlatformContext } from 'contexts';

import { AppActionTypes } from 'new_redux/store';

import { useTimedNotification } from 'hooks';
import { IUser } from 'new_models';

type CheckEmailPhoneViewProps = {
  resendSignUpCode: (data: AppActionTypes.Auth.IResendSignUpCodeRequestAction) => void;
  verifySignUpCode: (data: AppActionTypes.Auth.IVerifySignUpCodeRequestAction) => void;
};

export const CheckEmailPhoneView: React.FC<CheckEmailPhoneViewProps> = ({
  resendSignUpCode,
  verifySignUpCode
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { saasUserCorporationId, platformType, getEmailFromSession, getCountryCodeFromSession, getPhoneNumberFromSession, getBusinessNameFromSession, saveKYCVeriffUuidOnSession } = useContext(PlatformContext);

  const [signUpCode, setSignUpCode] = useState<string>('');
  const [isBtnActive, setIsBtnActive] = useState<boolean>(false);
  const [secondsToResend, setSeconds] = useState<number>(45);
  const [timer, setTimer] = useState<number>();

  const {
    isShowing: isAlreadyRegisteredNotificationShowing,
    show: alreadyRegisteredNotificationShow,
    close: alreadyRegisteredNotificationClose,
  } = useTimedNotification(5000);

  const [verifyMethod, verifyTitle, verifyValue] = useMemo(() => {
    const verifyMethod = location.pathname.includes(PATH.REGISTER_CHECK_EMAIL)
      ? VERIFY_METHOD.EMAIL
      : location.pathname.includes(PATH.REGISTER_CHECK_SMS)
        ? VERIFY_METHOD.PHONE
        : '';

    const verifyTitle = verifyMethod === VERIFY_METHOD.EMAIL
      ? "Email"
      : verifyMethod === VERIFY_METHOD.PHONE
        ? "Phone"
        : ""

    const verifyValue = verifyMethod === VERIFY_METHOD.EMAIL
      ? getEmailFromSession()
      : verifyMethod === VERIFY_METHOD.PHONE
        ? getCountryCodeFromSession() + getPhoneNumberFromSession()
        : '';

    return [verifyMethod, verifyTitle, verifyValue];
  }, [location]);

  useEffect(() => {
    if (!verifyValue) {
      const backLink = verifyMethod === VERIFY_METHOD.EMAIL
        ? `${PATH.REGISTER_INDEX}/${PATH.REGISTER_BY_EMAIL}`
        : verifyMethod === VERIFY_METHOD.PHONE
          ? `${PATH.REGISTER_INDEX}/${PATH.REGISTER_BY_PHONE}`
          : `${PATH.LANDING}`;
      navigate(backLink);
    }
  }, [verifyMethod, verifyValue]);

  useEffect(() => {
    if (secondsToResend === 0) {
      window.clearInterval(timer);
    } else if (secondsToResend === 45) {
      setTimer(window.setInterval(() => { setSeconds(prev => prev - 1); }, 1000));
    }
  }, [secondsToResend]);

  const onSignUpCodeChange = () => {
    setIsBtnActive(false);
  };

  const onCompleteSignUpCode = (value: string) => {
    setSignUpCode(value);
    setIsBtnActive(true);
  };

  const onResendSignUpVerificationCode = () => {
    const data: AppActionTypes.Auth.IResendSignUpCodeRequestAction = { saasUserCorporationId: saasUserCorporationId };
    if (verifyMethod === VERIFY_METHOD.EMAIL) {
      data.email = getEmailFromSession();
    } else if (verifyMethod === VERIFY_METHOD.PHONE) {
      data.countryCode = getCountryCodeFromSession();
      data.phoneNumber = getPhoneNumberFromSession();
    }
    resendSignUpCode({
      ...data,
      errors: {
        USER_IS_ALREADY_REGISTERED: () => {
          alreadyRegisteredNotificationShow();
        }
      }
    });
    setSeconds(45);
  };

  const onVerifySignUpCode = () => {
    const data: AppActionTypes.Auth.IVerifySignUpCodeRequestAction = { code: signUpCode, saasUserCorporationId: saasUserCorporationId };
    if (verifyMethod === VERIFY_METHOD.EMAIL) {
      data.email = getEmailFromSession();
      data.mfaSetting = VERIFY_METHOD.EMAIL;
    } else if (verifyMethod === VERIFY_METHOD.PHONE) {
      data.countryCode = getCountryCodeFromSession();
      data.phoneNumber = getPhoneNumberFromSession();
      data.mfaSetting = VERIFY_METHOD.PHONE;
    }
    if (platformType === 'Business') {
      data.businessName = getBusinessNameFromSession();
    }
    verifySignUpCode({
      ...data,
      next: (user: IUser) => {
        saveKYCVeriffUuidOnSession(user.kycVeriffUuid);
        console.log("123123123");
        navigate(PATH.VERIFF_INDEX + '/' + PATH.VERIFF_SESSION);
      }
    });
  }

  return (
    <CheckEmailPhoneViewStyle>
      <BackwardButtonComponent to={PATH.LANDING} />
      <Box sx={{ height: '2rem' }}></Box>

      {isAlreadyRegisteredNotificationShowing && (
        <NotificationComponent
          className='notification-wrap color-white bg-red'
          content={"User is already registered! Please sign in!"}
          frontIcon={<HighlightOff onClick={alreadyRegisteredNotificationClose} />}
        />
      )}

      <Typography className='action-title'> {`Verify Your ${verifyTitle}`} </Typography>

      <Box className='notice-container'>
        <Typography className='notice-title'>
          Please enter the verification code sent to your
        </Typography>
        <Link className='email-link' to=''>
          <pre> {verifyValue} </pre>
        </Link>
      </Box>

      <Box className='verification-container'>
        <PinInput
          length={6}
          focus
          type='numeric'
          inputMode='numeric'
          onChange={onSignUpCodeChange}
          onComplete={onCompleteSignUpCode}
        />
      </Box>

      <Box className='resendLink-container' sx={{ marginTop: '1rem' }}>
        <span>Didn't receive it?</span>
        <span className='email-link color-gray'>
          {
            secondsToResend !== 0
              ? `Resend code in ${secondsToResend}s`
              : <span className="color-blue fontweight-bold resend-link" onClick={onResendSignUpVerificationCode}>Resend code</span>
          }
        </span>
      </Box>

      <NewButtonComponent
        className='submit-button'
        type='submit'
        disabled={!isBtnActive}
        onClick={onVerifySignUpCode}
      >
        Continue
      </NewButtonComponent>
    </CheckEmailPhoneViewStyle>
  );
};