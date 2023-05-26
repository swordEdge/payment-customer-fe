import React, { FormEvent, useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box, Typography } from '@mui/material';
import { LoginByEmailViewStyle } from './index.style';
import { NewInputComponent, NotificationComponent, NewButtonComponent, BackwardButtonComponent } from 'components/common';
import { VALIDATION, PATH } from 'consts';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { AppActionTypes } from 'new_redux/store';
import { UserMFASetting } from 'types';
import { PlatformContext } from 'contexts';

type LoginByEmailViewProps = {
  signIn: (data: AppActionTypes.Auth.ISignInRequestAction) => void;
  errorContent: string;
  isError: boolean;
  closeError: () => void;
};

type ILoginByEmailForm = {
  email: string;
  password: string;
};

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required()
    .matches(VALIDATION.PASSWORD_VALIDATION.LENGTH)
    .matches(VALIDATION.PASSWORD_VALIDATION.NUMBER)
    .matches(VALIDATION.PASSWORD_VALIDATION.UPPERCASE)
    .matches(VALIDATION.PASSWORD_VALIDATION.SPECIAL),
});

export const LoginByEmailView: React.FC<LoginByEmailViewProps> = ({
  signIn,
  errorContent,
  isError,
  closeError
}) => {
  const navigate = useNavigate();

  const { platformType, saasUserCorporationId, saveEmailOnSession, resetSession } = useContext(PlatformContext);

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<ILoginByEmailForm>({
    resolver: yupResolver(schema),
  })

  const onSubmitHandler = (data: ILoginByEmailForm) => {
    saveEmailOnSession(data.email);
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
              : PATH.LANDING
        navigate(nextLink);
      }
    });
  }

  useEffect(() => {
    resetSession();
  }, [platformType]);

  return (
    <LoginByEmailViewStyle>
      <BackwardButtonComponent to={PATH.LANDING} />
      <Box sx={{ height: '2rem ' }}></Box>

      {isError && (
        <NotificationComponent
          className='notification-wrap color-white bg-red'
          // title="Error Message"
          content={errorContent}
          frontIcon={<HighlightOffIcon onClick={closeError} />}
        // backIcon={<HighlightOffIcon onClick={notificationClose} />}
        />
      )}

      <Box className='each-field'>
        <Typography className='title-typo'>
          <span> Log In to </span>
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
          <Box className='input-container'>
            {/* <Box className='each-field'> */}
            <NewInputComponent
              name='email'
              className='text-input'
              label='Email'
              error={!!errors.email}
              register={register}
              border={true}
            />
          </Box>
          <Link
            className='phone-link'
            to={PATH.LOGIN_INDEX + '/' + PATH.LOGIN_BY_PHONE}
          >
            Log In with Phone
          </Link>
        </Box>

        <Box className='email-phone'>
          <Box className='input-container'>
            <NewInputComponent
              name='password'
              type='password'
              className='text-input'
              label='Password'
              error={!!errors.password}
              register={register}
              border={true}
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
    </LoginByEmailViewStyle>
  );
};
