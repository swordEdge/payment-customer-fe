import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { LoginByPhoneViewStyle } from './index.style';
import { NewInputComponent, BackwardButtonComponent, PhoneInputComponent, NewButtonComponent } from 'components/common';
import { VALIDATION, PATH } from 'consts';
import { Error } from 'models';
import { PlatformContext } from 'contexts';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { AppActionTypes } from 'new_redux/store';
import { UserMFASetting } from 'types';

type LoginByPhoneViewProps = {
  signIn: (data: AppActionTypes.Auth.ISignInRequestAction) => void;
  errorContent: string;
  isError: boolean;
  closeError: () => void;
};

type ILoginByPhoneForm = {
  countryCode: string;
  phoneNumber: string;
  password: string;
};

const schema = Yup.object().shape({
  countryCode: Yup.string().required(),
  phoneNumber: Yup.string().required(),
  password: Yup.string().required()
    .matches(VALIDATION.PASSWORD_VALIDATION.LENGTH)
    .matches(VALIDATION.PASSWORD_VALIDATION.NUMBER)
    .matches(VALIDATION.PASSWORD_VALIDATION.UPPERCASE)
    .matches(VALIDATION.PASSWORD_VALIDATION.SPECIAL),
});

export const LoginByPhoneView: React.FC<LoginByPhoneViewProps> = ({
  signIn,
  errorContent,
  isError,
  closeError
}) => {
  const navigate = useNavigate();

  const [countryCode, setDigitCode] = React.useState('+44');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const { platformType, saasUserCorporationId, savePhoneNumberOnSession, saveCountryCodeOnSession, resetSession } = useContext(PlatformContext);

  const { register, handleSubmit, formState: { errors, isValid }, setValue } = useForm<ILoginByPhoneForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      countryCode: "+44",
      phoneNumber: "",
      password: ""
    }
  })

  const handleDigitCodeChange = (digitCode: string) => {
    setDigitCode(digitCode);
    setValue("countryCode", digitCode);
  }

  const handlePhoneNumberChange = (number: string) => {
    setPhoneNumber(number);
    setValue("phoneNumber", number);
  }

  const onSubmitHandler = (data: ILoginByPhoneForm) => {
    saveCountryCodeOnSession(data.countryCode);
    savePhoneNumberOnSession(data.phoneNumber);
    signIn({
      saasUserCorporationId: saasUserCorporationId,
      ...data,
      next: (mfaSeting: UserMFASetting) => {
        const nextLink = mfaSeting === UserMFASetting.EMAIL
          ? `${PATH.LOGIN_INDEX}/${PATH.LOGIN_CHECK_EMAIL}`
          : mfaSeting === UserMFASetting.SMS
            ? `${PATH.LOGIN_INDEX}/${PATH.LOGIN_CHECK_SMS}`
            : mfaSeting === UserMFASetting.AUTHENTICATOR
              ? `${PATH.LOGIN_INDEX}/${PATH.LOGIN_CHECK_AUTHENTICATOR}`
              : PATH.LANDING;
        navigate(nextLink);
      }
    });
  }

  useEffect(() => {
    resetSession();
  }, [platformType]);

  return (
    <LoginByPhoneViewStyle>
      <BackwardButtonComponent to={PATH.LANDING} />
      <Box sx={{ height: '2rem ' }}></Box>

      <Box className='each-field'>
        <Typography className='title-typo'>
          Log In to
          <span className={`${platformType === 'Personal' ? 'color-green' : 'color-feed-red'}`}>{platformType === 'Personal' ? "Personal" : "Business"} Account</span>
        </Typography>
      </Box>

      <Box className='each-field' sx={{ marginTop: '0.5rem' }}>
        <Typography className='comment-typo' sx={{ fontSize: '1rem' }}>
          Switch to
          <Link
            className='color-blue margin-left-right no-underline'
            to={PATH.LOGIN_ALL}
          >
            {`${platformType === 'Personal' ? 'Business' : 'Personal'}`} Account
          </Link>
        </Typography>
      </Box>

      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Box className='email-phone'>
          <Box className='phone-input-container'>
            <PhoneInputComponent
              digitCode={countryCode}
              phoneNumber={phoneNumber}
              onChangeDigit={handleDigitCodeChange}
              onChangePhoneNumber={handlePhoneNumberChange}
            />
          </Box>
          <Link
            className='phone-link'
            to={PATH.LOGIN_INDEX + '/' + PATH.LOGIN_ALL}
          >
            Log In with Email
          </Link>
        </Box>

        <Box className='email-phone'>
          <Box className='left-container'>
            <NewInputComponent
              name='password'
              type='password'
              className='text-input'
              label='Password'
              border={true}
              register={register}
            />
          </Box>
          <Link
            className='phone-link'
            to={''}
          >
            Forgot password?
          </Link>
        </Box>

        <NewButtonComponent
          className='submit-button bg-primary'
          type='submit'
          disabled={!isValid}
        >
          Continue
        </NewButtonComponent>
      </form>

      <Box className='each-field' sx={{ marginTop: '2rem' }}>
        <Typography className='comment-typo' sx={{ fontSize: '0.9rem' }}>

          Don't have an account yet?
          <Link
            className='color-blue margin-left-right no-underline'
            to={PATH.REGISTER}
          >
            Sign Up
          </Link>
        </Typography>
      </Box>
    </LoginByPhoneViewStyle>
  );
};
