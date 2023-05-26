import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { ChangePasswordViewStyle } from './index.style';
import {
  MobileHeaderComponent,
  NewButtonComponent,
  PasswordInputComponent,
  PasswordPolicyComponent
} from 'components/common';
import { NotificationComponent } from 'components/common';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { PATH, VALIDATION } from 'consts';
import { NOTIFICATION_TYPE } from 'consts';

type ChangePwdViewProps = {
  updatePassword: (formValues: any) => void;
  isShowNotification: boolean;
  notificationClose: () => void;
  notificationType: string;
  notificationContent: string;
};

type IChangePasswordForm = {
  oldPassword: string;
  newPassword: string;
  passwordConfirmation: string;
};

const schema = Yup.object().shape({
  oldPassword: Yup.string().required(),
  newPassword: Yup.string().required()
    .matches(VALIDATION.PASSWORD_VALIDATION.LENGTH)
    .matches(VALIDATION.PASSWORD_VALIDATION.NUMBER)
    .matches(VALIDATION.PASSWORD_VALIDATION.UPPERCASE)
    .matches(VALIDATION.PASSWORD_VALIDATION.SPECIAL),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('newPassword')])
});

export const ChangePasswordView: React.FC<ChangePwdViewProps> = (props) => {
  const { updatePassword, isShowNotification, notificationClose, notificationType, notificationContent } = props;

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors, isValid }, watch, getValues } = useForm<IChangePasswordForm>({
    resolver: yupResolver(schema),
  });

  const [notificationColor, notificationBgColor] = useMemo(() => {
    if (notificationType) {
      if (notificationType === NOTIFICATION_TYPE.SUCCESS) return ["color-black", "bg-light-green"];
      if (notificationType === NOTIFICATION_TYPE.FAILURE) return ["color-white", "bg-red"];
    }
    return ["", ""];
  }, [notificationType]);

  const onMobileHeaderPrevClick = (path: string) => {
    navigate(path);
  };

  const onSubmitHandler = (data: IChangePasswordForm) => {
    updatePassword(data);
  }

  return (
    <ChangePasswordViewStyle>
      <Box className='mobile-header-container'>
        <MobileHeaderComponent
          title='Change Password'
          backPath={PATH.PROFILE_INDEX + '/' + PATH.PROFILE_OVERVIEW}
          prevAction={onMobileHeaderPrevClick}
          actionIcon={
            <NewButtonComponent
              className='button-item mobile-header-button'
              type="submit"
              onClick={() => onSubmitHandler(getValues())}
              disabled={!isValid}
            >
              Update
            </NewButtonComponent>
          }
        />
        <Box sx={{ height: '5rem' }}> </Box>
      </Box>
      {isShowNotification && (
        <NotificationComponent
          className={`notification-wrap ${notificationColor} ${notificationBgColor} margin-bottom-gap`}
          content={notificationContent}
          frontIcon={<HighlightOffIcon onClick={notificationClose} />}
        />
      )}
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className='header'>Change Password</div>
        <div className='content'>
          <div className='old-password password-item'>
            <PasswordInputComponent
              label='Old Password'
              name="oldPassword"
              register={register}
            />
          </div>

          <div className='margin-top-32 new-data-container'>
            <div className='new-password-container'>
              <div className='password-item'>
                <PasswordInputComponent
                  label='New Password'
                  name="newPassword"
                  register={register}
                />
              </div>
              <div className='password-item margin-top-8'>
                <PasswordInputComponent
                  label='Confirm Password'
                  name="passwordConfirmation"
                  register={register}
                />
              </div>
            </div>

            <div className='password-rule-container'>
              <Box sx={{ fontSize: '0.9rem' }}> You password mush contains </Box>
              <PasswordPolicyComponent password={watch().newPassword} />
            </div>
          </div>
        </div>
        <div className='margin-top-32 button-container'>
          <NewButtonComponent className='button-item' disabled={true}>
            Cancel
          </NewButtonComponent>
          <NewButtonComponent
            type='submit'
            className='button-item'
            disabled={!isValid}
          >
            Update
          </NewButtonComponent>
        </div>
      </form>
    </ChangePasswordViewStyle>
  );
};
