import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Checkbox, Typography } from '@mui/material';
import { PATH, VALIDATION, VERIFY_METHOD } from 'consts';
import { BackwardButtonComponent, NewButtonComponent, NewInputComponent, PasswordPolicyComponent, NotificationComponent } from 'components/common';
import { HighlightOff } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { RegisterByEmailStyle } from './index.style';
import { PlatformContext } from 'contexts';

import { AppActionTypes } from 'new_redux/store';
import { useTimedNotification } from 'hooks';
import { UserType } from 'types';

type RegisterByEmailViewProps = {
  signUp: (user: AppActionTypes.Auth.ISignUpRequestAction) => void;
};

type IRegisterByEmailSignUpByEmailForm = {
  email: string;
  password: string;
  businessName: string;
  passwordConfirmation: string;
  termsAndPolicy: boolean;
  cookiesOption: boolean;
};

const schema = Yup.object().shape({
  businessName: Yup.string(),
  email: Yup.string().email().required(),
  password: Yup.string().required()
    .matches(VALIDATION.PASSWORD_VALIDATION.LENGTH)
    .matches(VALIDATION.PASSWORD_VALIDATION.NUMBER)
    .matches(VALIDATION.PASSWORD_VALIDATION.UPPERCASE)
    .matches(VALIDATION.PASSWORD_VALIDATION.SPECIAL),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password')]),
  termsAndPolicy: Yup.boolean().oneOf([true]),
  cookiesOption: Yup.boolean().oneOf([true]),
});

const defaultValue: IRegisterByEmailSignUpByEmailForm = {
  email: "",
  password: "",
  businessName: "",
  passwordConfirmation: "",
  termsAndPolicy: false,
  cookiesOption: false,
}

export const RegisterByEmailView: React.FC<RegisterByEmailViewProps> = ({
  signUp
}) => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors, isValid }, watch } = useForm<IRegisterByEmailSignUpByEmailForm>({
    resolver: yupResolver(schema),
    defaultValues: defaultValue
  });

  const { platformType, saasUserCorporationId, saveEmailOnSession, saveBusinessNameOnSession, resetSession } = useContext(PlatformContext);

  const {
    isShowing: isAlreadyRegisteredNotificationShowing,
    show: alreadyRegisteredNotificationShow,
    close: alreadyRegisteredNotificationClose,
  } = useTimedNotification(5000);

  const onSubmitHandler = (data: IRegisterByEmailSignUpByEmailForm) => {
    saveEmailOnSession(data.email);
    if (platformType === 'Business') {
      saveBusinessNameOnSession(data.businessName);
    }
    signUp({
      saasUserCorporationId: saasUserCorporationId,
      email: data.email,
      password: data.password,
      mfaSetting: VERIFY_METHOD.EMAIL,
      userType: platformType === 'Personal' ? UserType.INDIVIDUAL_CUSTOMER : UserType.BUSINESS_CUSTOMER,
      next: () => {
        navigate(PATH.REGISTER_INDEX + '/' + PATH.REGISTER_CHECK_EMAIL);
      },
      errors: {
        USER_IS_ALREADY_REGISTERED: () => {
          alreadyRegisteredNotificationShow();
        }
      }
    });
  };

  useEffect(() => {
    resetSession();
  }, [platformType]);

  return (
    <RegisterByEmailStyle>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <BackwardButtonComponent to={PATH.LANDING} />
        <Box sx={{ height: '2rem' }}></Box>

        {isAlreadyRegisteredNotificationShowing && (
          <NotificationComponent
            className='notification-wrap color-white bg-red'
            content={"User is already registered! Please sign in!"}
            frontIcon={<HighlightOff onClick={alreadyRegisteredNotificationClose} />}
          />
        )}

        <Box className='each-field'>
          <Typography className='title-typo'>
            <span>Create Your</span>
            <span className={`${platformType === 'Personal' ? 'color-green' : 'color-feed-red'}`}>{platformType === 'Personal' ? "Personal" : "Business"} Account</span>
          </Typography>
        </Box>

        <Box className='each-field' sx={{ marginTop: '1rem' }}>
          <span className='comment-typo fontWeight-semibold'>
            Enter your email address, we will send you a confirmation code
            there.
          </span>
        </Box>

        <Box sx={{ paddingTop: '1rem' }}>
          {
            platformType === 'Business' &&
            <Box className='email-phone'>
              <Box className='left-container'>
                <NewInputComponent
                  label='Registered Company Name'
                  name='businessName'
                  className='text-input'
                  register={register}
                  error={!!errors.businessName}
                  border={true}
                />
              </Box>
            </Box>
          }
          <Box className='email-phone'>
            <Box className='left-container'>
              <Box className='input-container'>
                <NewInputComponent
                  label='Email'
                  name='email'
                  className='text-input'
                  register={register}
                  error={!!errors.email}
                  border={true}
                />
              </Box>
            </Box>
            <Link
              className='phone-link'
              to={PATH.REGISTER_INDEX + '/' + PATH.REGISTER_BY_PHONE}
            >
              Sign Up with Phone
            </Link>
          </Box>
        </Box>

        <Box className='password-container'>
          <Box className='left-container'>
            <Box className='input-container'>
              <NewInputComponent
                name='password'
                label='Password'
                className='text-input'
                type='password'
                register={register}
                error={!!errors.password}
                border={true}
              />
            </Box>
            <br />
            <Box className='input-container'>
              <NewInputComponent
                name='passwordConfirmation'
                label='Confirm Password'
                className='text-input'
                type='password'
                register={register}
                error={!!errors.passwordConfirmation}
                border={true}
              />
            </Box>
          </Box>
          <Box className='right-container'>
            <Typography
              className='main-font color-gray'
              sx={{ fontSize: '0.8rem' }}
            >
              Your password must contain:
            </Typography>
            <PasswordPolicyComponent password={watch().password} />
          </Box>
        </Box>

        <Box className='rule-container'>
          <Box className='each-field'>
            <Checkbox
              className='check-box'
              {...register('termsAndPolicy')}
            />
            <span className='comment-typo'>I agree with Payment System's</span>
            <Link className='color-blue margin-left-right no-underline' to=''>
              Terms of use
            </Link>
            <span>and</span>
            <Link className='color-blue margin-left-right no-underline' to=''>
              Privacy Policy.
            </Link>
          </Box>
          <Box className='each-field' sx={{ marginTop: '0.5rem' }}>
            <Checkbox
              className='check-box'
              {...register('cookiesOption')}
            />
            <Typography className='comment-typo' sx={{ fontSize: '0.8rem' }}>
              Send me news and exclusive offers from Payment System and its partners. I'll get marketing cookies. I know I can optout at any time.
            </Typography>
          </Box>
        </Box>

        <NewButtonComponent
          className='submit-button'
          type='submit'
          disabled={!isValid}
        >
          Continue
        </NewButtonComponent>

        <Box className='each-field' sx={{ marginTop: '2rem' }}>
          <Typography className='comment-typo' sx={{ fontSize: '0.8rem' }}>
            <span>Already have an account?</span>
            <Link
              className='color-blue margin-left-right no-underline'
              to={PATH.LOGIN_ALL}
            >
              Log In
            </Link>
          </Typography>
        </Box>
      </form>
    </RegisterByEmailStyle>
  );
};
