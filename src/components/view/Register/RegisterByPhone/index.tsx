import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HighlightOff } from '@mui/icons-material';
import { Box, Checkbox, Typography } from '@mui/material';
import { RegisterByPhoneViewStyle } from './index.style';
import { PasswordPolicyComponent } from 'components/common';
import { NewInputComponent, PhoneInputComponent, BackwardButtonComponent, NewButtonComponent, NotificationComponent } from 'components/common';
import { PATH, VALIDATION, VERIFY_METHOD } from 'consts';
import { IUser } from 'models';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { PlatformContext } from 'contexts';
import { useForm } from 'react-hook-form';
import { AppActionTypes } from 'new_redux/store';
import { UserType } from 'types';
import { useTimedNotification } from 'hooks';

type RegisterByPhoneViewProps = {
  signUp: (user: AppActionTypes.Auth.ISignUpRequestAction) => void;
};

type IRegisterByPhoneSignUpByPhoneForm = {
  businessName: string;
  countryCode: string;
  phoneNumber: string;
  password: string;
  passwordConfirmation: string;
  termsAndPolicy: boolean;
  cookiesOption: boolean;
};

const schema = Yup.object().shape({
  businessName: Yup.string(),
  countryCode: Yup.string().required(),
  phoneNumber: Yup.string().required(),
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

const defaultValue: IRegisterByPhoneSignUpByPhoneForm = {
  countryCode: "+44",
  phoneNumber: "",
  password: "",
  businessName: "",
  passwordConfirmation: "",
  termsAndPolicy: false,
  cookiesOption: false,
}

export const RegisterByPhoneView: React.FC<RegisterByPhoneViewProps> = ({
  signUp,
}) => {
  const navigate = useNavigate();

  const [countryCode, setDigitCode] = React.useState('+44');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const { register, handleSubmit, formState: { errors, isValid }, reset, getValues, watch, setValue } = useForm<IRegisterByPhoneSignUpByPhoneForm>({
    resolver: yupResolver(schema),
    // defaultValues: defaultValue
  });

  const { platformType, saasUserCorporationId, savePhoneNumberOnSession, saveCountryCodeOnSession, saveBusinessNameOnSession, resetSession } = useContext(PlatformContext);

  const {
    isShowing: isAlreadyRegisteredNotificationShowing,
    show: alreadyRegisteredNotificationShow,
    close: alreadyRegisteredNotificationClose,
  } = useTimedNotification(5000);

  const handleDigitCodeChange = (digitCode: string) => {
    setDigitCode(digitCode);
    setValue("countryCode", digitCode);
  }

  const handlePhoneNumberChange = (number: string) => {
    setPhoneNumber(number);
    setValue("phoneNumber", number);
  }

  const onSubmitHandler = (data: IRegisterByPhoneSignUpByPhoneForm) => {
    saveCountryCodeOnSession(data.countryCode);
    savePhoneNumberOnSession(data.phoneNumber);
    if (platformType === 'Business') {
      saveBusinessNameOnSession(data.businessName);
    }
    signUp({
      saasUserCorporationId: saasUserCorporationId,
      countryCode: data.countryCode,
      phoneNumber: data.phoneNumber,
      password: data.password,
      mfaSetting: VERIFY_METHOD.PHONE,
      userType: platformType === 'Personal' ? UserType.INDIVIDUAL_CUSTOMER : UserType.BUSINESS_CUSTOMER,
      next: () => {
        navigate(PATH.REGISTER_INDEX + '/' + PATH.REGISTER_CHECK_SMS);
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
    <RegisterByPhoneViewStyle>
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
            Create Your
            <span className={`${platformType === 'Personal' ? 'color-green' : 'color-feed-red'}`}>{platformType === 'Personal' ? "Personal" : "Business"} Account</span>
          </Typography>
        </Box>
        <Box className='each-field' sx={{ marginTop: '1rem' }}>
          <Typography className='comment-typo fontWeight-semibold'>
            Enter your phone number, we will send you a confirmation code there.
          </Typography>
        </Box>

        <Box className='email-phone'>
          <Box className='phone-input-container'>
            <PhoneInputComponent
              onChangeDigit={handleDigitCodeChange}
              onChangePhoneNumber={handlePhoneNumberChange}
              digitCode={countryCode}
              phoneNumber={phoneNumber}
            />
          </Box>
          <Link
            className='phone-link'
            to={PATH.REGISTER_INDEX + '/' + PATH.REGISTER_BY_EMAIL}
          >
            Sign Up with Email
          </Link>
        </Box>

        <Box className='password-container'>
          <Box className='left-container'>
            <Box className='input-container'>
              <NewInputComponent
                name='password'
                className='text-input'
                label='Password'
                register={register}
                type='password'
                error={!!errors.password}
                border={true}
              />
            </Box>
            <br />
            <Box className='input-container'>
              <NewInputComponent
                name='confirmPassword'
                className='text-input'
                label='Confirm Password'
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
            <Checkbox className='check-box' required={true} />
            <span className='comment-typo'>
              I agree with Payment System's
              <Link className='color-blue margin-left-right no-underline' to=''>
                Terms of use
              </Link>
              and
              <Link className='color-blue margin-left-right no-underline' to=''>
                Privacy Policy.
              </Link>
            </span>
          </Box>
          <Box className='each-field' sx={{ marginTop: '0.5rem' }}>
            <Checkbox className='check-box' required={true} />
            <Typography className='comment-typo' sx={{ fontSize: '0.8rem' }}>
              Send me news and exclusive offers from Payment System and its
              partners. I'll get marketing cookies. I know I can optout at any
              time.
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
            Already have an account?
            <Link
              className='color-blue margin-left-right no-underline'
              to={PATH.LOGIN_ALL}
            >
              Log In
            </Link>
          </Typography>
        </Box>
      </form>
    </RegisterByPhoneViewStyle>
  );
};
