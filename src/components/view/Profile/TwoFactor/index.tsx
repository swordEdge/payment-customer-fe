import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { MobileHeaderComponent } from 'components/common';
import { TwoFactorSettingModal } from './TwoFactorSettingModal';
import { TwoFactorViewStyle } from './index.style';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { PATH } from 'consts';
import {
  NewButtonComponent,
  ProfilePromptedMessageComponent,
} from 'components/common';
import { IUser, IMFASetting } from 'new_models';
import { VERIFY_METHOD } from 'consts';

type TwoFactorViewProps = {
  user: IUser;
  mfaSetting: IMFASetting;
  isShowGA: boolean;
  verify: string;
  changeTwoFactorMethod: (indexOption: number) => void;
  verifyGAToken: (token: string) => void;
};

type IUpdateMFA = {
  mfaSetting: number;
};

const schema = Yup.object().shape({
  mfaSetting: Yup.number().required(),
});


export const TwoFactorView: React.FC<TwoFactorViewProps> = ({
  user,
  mfaSetting,
  verify,
  isShowGA,
  changeTwoFactorMethod,
  verifyGAToken,
}) => {
  const navigate = useNavigate();

  const [isOpen, setModal] = useState<boolean>(isShowGA);
  const [indexOption, setIndexOption] = useState<number>(user.mfaSetting ?? VERIFY_METHOD.EMAIL);

  const { register, handleSubmit, formState: { errors, isValid }, watch, setValue, getValues } = useForm<IUpdateMFA>({
    resolver: yupResolver(schema),
  });

  const handleAuthenticatorVerifyModalClose = () => {
    setModal(false);
  };

  const handleAuthenticatorVerifyModalOk = () => {
    // changeTwoFactorMethod(indexOption);
    setModal(false);
  };

  const onMobileHeaderPrevClick = (path: string) => {
    navigate(path);
  };

  const onSubmitHandler = (data: IUpdateMFA) => {
    changeTwoFactorMethod(data.mfaSetting);
  }

  useEffect(() => {
    if (user.mfaSetting) {
      setIndexOption(user.mfaSetting);
    }
  }, [user.mfaSetting]);

  useEffect(() => {
    setModal(isShowGA);
  }, [isShowGA])

  return (
    <TwoFactorViewStyle>
      <Box className='mobile-header-container'>
        <MobileHeaderComponent
          title='Two Factor'
          backPath={PATH.PROFILE_INDEX + '/' + PATH.PROFILE_OVERVIEW}
          prevAction={onMobileHeaderPrevClick}
          actionIcon={
            <NewButtonComponent
              className='button-item mobile-header-button'
              type="submit"
              onClick={() => onSubmitHandler(getValues())}
              disabled={indexOption === (user.mfaSetting ?? VERIFY_METHOD.EMAIL)}
            >
              Update
            </NewButtonComponent>
          }
        />
        <Box sx={{ height: '5rem' }}> </Box>
      </Box>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Box className='main-container'>
          <Box className='header'>Two Factor Authentication Method</Box>
          <Box sx={{ height: '0.5rem' }}> </Box>
          <Box className='content'>
            <RadioGroup value={indexOption}>
              <FormControlLabel
                value='Email'
                control={
                  <Radio
                    value={VERIFY_METHOD.EMAIL}
                    checked={indexOption === VERIFY_METHOD.EMAIL}
                    onChange={() => {
                      setIndexOption(VERIFY_METHOD.EMAIL);
                      setValue("mfaSetting", VERIFY_METHOD.EMAIL)
                    }}
                  />
                }
                label='Email'
              />
              <FormControlLabel
                value='SMS'
                control={
                  <Radio
                    value={VERIFY_METHOD.PHONE}
                    checked={indexOption === VERIFY_METHOD.PHONE}
                    onChange={() => {
                      setIndexOption(VERIFY_METHOD.PHONE);
                      setValue("mfaSetting", VERIFY_METHOD.PHONE)
                    }}
                  />
                }
                label='SMS'
              />
              <FormControlLabel
                value='Authenticator'
                control={
                  <Radio
                    value={VERIFY_METHOD.AUTHENTICATOR}
                    checked={indexOption === VERIFY_METHOD.AUTHENTICATOR}
                    onChange={() => {
                      setIndexOption(VERIFY_METHOD.AUTHENTICATOR);
                      setValue("mfaSetting", VERIFY_METHOD.AUTHENTICATOR)
                    }}
                  />
                }
                label='Authenticator'
              />
            </RadioGroup>
          </Box>
        </Box>

        <div className='margin-top-32 button-container'>
          <NewButtonComponent className='button-item' disabled={true}>
            Cancel
          </NewButtonComponent>
          <NewButtonComponent
            type='submit'
            className='button-item'
            disabled={indexOption === (user.mfaSetting ?? VERIFY_METHOD.EMAIL)}
          >
            Update
          </NewButtonComponent>
        </div>
      </form>
      {
        isOpen && (
          <TwoFactorSettingModal
            onCancel={handleAuthenticatorVerifyModalClose}
            onVerify={handleAuthenticatorVerifyModalOk}
            optBase32={mfaSetting.optBase32}
            otpAuthUrl={mfaSetting.optAuthUrl}
            sendVerifyCode={verifyGAToken}
            verify={verify}
          />
        )
      }
    </TwoFactorViewStyle >
  );
};
