import React, { useEffect, useState, useMemo, useContext } from 'react';
import PinInput from 'react-pin-input';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { BackwardButtonComponent, NewButtonComponent, NotificationComponent } from 'components/common';
import { TwoFactorStyle } from './index.style';
import { PATH, VERIFY_METHOD } from 'consts';
import { PlatformContext } from 'contexts';
import { AppActionTypes } from 'new_redux/store';
import { IUser } from 'new_models';
import { UserKYCStatus } from 'types';

type TwoFactorViewProps = {
  resendMFACode: (data: AppActionTypes.Auth.IResendMFACodeRequestAction) => void;
  verifyMFACode: (data: AppActionTypes.Auth.IVerifyMFACodeRequestAction) => void;
  notificationClose: () => void;
  isInvalid: boolean;
};

export const TwoFactorView: React.FC<TwoFactorViewProps> = ({
  resendMFACode,
  verifyMFACode,
  notificationClose,
  isInvalid
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [mfaCode, setMFACode] = useState<string>('');
  const [isBtnActive, setIsBtnActive] = useState<boolean>(false);
  const { saasUserCorporationId, getEmailFromSession, getCountryCodeFromSession, getPhoneNumberFromSession, saveKYCVeriffUuidOnSession } = useContext(PlatformContext);
  const [secondsToResend, setSeconds] = useState<number>(45);
  const [timer, setTimer] = useState<number>();

  const [verifyMethod, verifyValue, backLink] = useMemo(() => {
    const verifyMethod = location.pathname.includes(PATH.LOGIN_CHECK_EMAIL)
      ? VERIFY_METHOD.EMAIL
      : location.pathname.includes(PATH.LOGIN_CHECK_SMS)
        ? VERIFY_METHOD.PHONE
        : location.pathname.includes(PATH.LOGIN_CHECK_AUTHENTICATOR)
          ? VERIFY_METHOD.AUTHENTICATOR
          : '';

    const verifyValue = verifyMethod === VERIFY_METHOD.EMAIL
      ? getEmailFromSession()
      : verifyMethod === VERIFY_METHOD.PHONE
        ? getPhoneNumberFromSession()
        : verifyMethod === VERIFY_METHOD.AUTHENTICATOR
          ? "Google Authenticator"
          : null;

    const backLink = verifyMethod === VERIFY_METHOD.EMAIL
      ? `${PATH.LOGIN_INDEX}/${PATH.LOGIN_BY_EMAIL}`
      : verifyMethod === VERIFY_METHOD.PHONE
        ? `${PATH.LOGIN_INDEX}/${PATH.LOGIN_BY_PHONE}`
        : getEmailFromSession() !== ''
          ? `${PATH.LOGIN_INDEX}/${PATH.LOGIN_BY_EMAIL}`
          : getPhoneNumberFromSession() !== ''
            ? `${PATH.LOGIN_INDEX}/${PATH.LOGIN_BY_PHONE}`
            : `${PATH.LANDING}`;

    return [verifyMethod, verifyValue, backLink];
  }, [location]);

  const onVerifyChange = () => {
    setIsBtnActive(false);
  };

  const onVerifyComplete = (value: string) => {
    setMFACode(value);
    setIsBtnActive(true);
  };

  const onMFACodeResend = () => {
    const data: AppActionTypes.Auth.IResendMFACodeRequestAction = { saasUserCorporationId: saasUserCorporationId };
    if (verifyMethod === VERIFY_METHOD.EMAIL) {
      data.email = getEmailFromSession();
    } else if (verifyMethod === VERIFY_METHOD.PHONE) {
      data.countryCode = getCountryCodeFromSession();
      data.phoneNumber = getPhoneNumberFromSession();
    }
    resendMFACode({
      ...data
    });
    setMFACode('');
    setSeconds(45);
  }

  const onMFACodeVerify = () => {
    const data: AppActionTypes.Auth.IVerifyMFACodeRequestAction = { code: mfaCode, saasUserCorporationId: saasUserCorporationId };
    if (verifyMethod === VERIFY_METHOD.EMAIL) {
      data.email = getEmailFromSession();
      data.mfaSetting = VERIFY_METHOD.EMAIL;
    } else if (verifyMethod === VERIFY_METHOD.PHONE) {
      data.countryCode = getCountryCodeFromSession();
      data.phoneNumber = getPhoneNumberFromSession();
      data.mfaSetting = VERIFY_METHOD.PHONE;
    } else if (verifyMethod === VERIFY_METHOD.AUTHENTICATOR) {
      data.email = getEmailFromSession();
      data.countryCode = getCountryCodeFromSession();
      data.phoneNumber = getPhoneNumberFromSession();
      data.mfaSetting = VERIFY_METHOD.AUTHENTICATOR;
    }
    verifyMFACode({
      ...data,
      next: (user: IUser) => {
        saveKYCVeriffUuidOnSession(user.kycVeriffUuid);
        if (user.kycStatus === UserKYCStatus.NOT_TAKEN) {
          navigate(PATH.VERIFF_INDEX + '/' + PATH.VERIFF_SESSION);
        } else if (user.kycStatus === UserKYCStatus.PENDING) {
          navigate(PATH.VERIFF_INDEX + '/' + PATH.VERIFF_PENDING);
        } else if (user.kycStatus === UserKYCStatus.REJECTED) {
          navigate(PATH.VERIFF_INDEX + '/' + PATH.VERIFF_REJECT);
        } else {
          navigate(PATH.ACCOUNTS);
        }
      }
    });
  }

  useEffect(() => {
    if (verifyValue === null || (getEmailFromSession() === "" && (getCountryCodeFromSession() === "" && getPhoneNumberFromSession() === ""))) {
      navigate(backLink);
    }
  }, [verifyMethod, verifyValue, getEmailFromSession, getCountryCodeFromSession, getPhoneNumberFromSession])

  useEffect(() => {
    if (secondsToResend === 0) {
      window.clearInterval(timer);
    } else if (secondsToResend === 45) {
      setTimer(window.setInterval(() => { setSeconds(prev => prev - 1); }, 1000));
    }
  }, [secondsToResend]);

  return (
    <TwoFactorStyle>
      <BackwardButtonComponent to={backLink} />
      <Box sx={{ height: '2rem' }}></Box>

      {
        isInvalid &&
        <NotificationComponent
          className="color-white bg-red gap-bottom-1rem"
          content="Sorry, you have entered an invalid code. Please check and try again."
          frontIcon={<HighlightOffIcon onClick={() => notificationClose()} />}
        />
      }

      <Typography className='action-title'> 2-Factor Verification </Typography>

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
          onChange={onVerifyChange}
          onComplete={onVerifyComplete}
        />
      </Box>

      {
        verifyMethod !== VERIFY_METHOD.AUTHENTICATOR &&
        <Box className='resendLink-container' sx={{ marginTop: '1rem' }}>
          <span>Didn't receive it?</span>
          <span className='email-link color-gray'>
            {
              secondsToResend !== 0
                ? `Resend code in ${secondsToResend}s`
                : <span className="color-blue fontweight-bold resend-link" onClick={onMFACodeResend}>Resend code</span>
            }
          </span>
        </Box>
      }

      <NewButtonComponent
        className='submit-button'
        type='submit'
        onClick={onMFACodeVerify}
        disabled={!isBtnActive}
      >
        Continue
      </NewButtonComponent>
    </TwoFactorStyle>
  );
};
