import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarMonth } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import { PersonalInfoViewStyle } from './index.style';
import {
  NewButtonComponent,
  NewInputComponent,
  PhoneNumberInputComponent,
  NotificationComponent,
  MobileHeaderComponent
} from 'components/common';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { PATH } from 'consts';
import { IUserProfile, IAddress } from 'new_models';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { NOTIFICATION_TYPE } from 'consts';

type PersonalInfoViewProps = {
  userProfile: IUserProfile;
  updateAddress: (newUser: IAddress) => void;
  isShowNotification: boolean,
  notificationContent: string;
  notificationType: string;
  notificationClose: () => void;
};

const schema = Yup.object().shape({
  address1: Yup.string().required(),
  address2: Yup.string(),
  city: Yup.string(),
  postCode: Yup.string().required(),
  state: Yup.string().required(),
  countryName: Yup.string().required()
});

export const PersonalInfoView: React.FC<PersonalInfoViewProps> = (props) => {
  const { userProfile, updateAddress, notificationClose, isShowNotification, notificationContent, notificationType, ...rest } = props;
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors, isValid }, setValue } = useForm<IAddress>({
    resolver: yupResolver(schema),
    defaultValues: {
      address1: userProfile.address1,
      address2: userProfile.address2,
      state: userProfile.state,
      city: userProfile.city,
      postCode: userProfile.postCode,
      countryName: userProfile.countryName
    }
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

  const onSubmitHandler = (data: IAddress) => {
    updateAddress(data);
  }

  useEffect(() => {
    if (userProfile) {
      setValue("address1", userProfile.address1 ?? "");
      setValue("address2", userProfile.address2 ?? "");
      setValue("city", userProfile.city ?? "");
      setValue("countryName", userProfile.countryName ?? "");
      setValue("postCode", userProfile.postCode ?? "");
      setValue("state", userProfile.state ?? "");
    }
  }, [userProfile])

  return (
    <PersonalInfoViewStyle>
      <Box className='mobile-header-container'>
        <MobileHeaderComponent
          title='Profile Info'
          backPath={PATH.PROFILE_INDEX + '/' + PATH.PROFILE_OVERVIEW}
          prevAction={onMobileHeaderPrevClick}
          actionIcon={
            <NewButtonComponent className='button-item mobile-header-button'>
              Update
            </NewButtonComponent>
          }
        />
        <Box sx={{ height: '4rem' }}> </Box>
      </Box>

      {
        isShowNotification &&
        <NotificationComponent
          className={`notification-wrap ${notificationColor} ${notificationBgColor} margin-bottom-gap`}
          content={notificationContent}
          frontIcon={<HighlightOffIcon onClick={notificationClose} />}
        />
      }

      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className='personal-detail-email-phone column-gap-32'>
          <div className='data-container personal-detail'>
            <div className='header'>Personal Detail</div>
            <div className='content'>
              <div className='detail-container column-gap-32'>
                <div className='avatar-container'>
                  <img
                    src='/asset/Profile/DefaultAvatar.svg'
                    className='avatar'
                  ></img>
                  <button className='upload-button margin-top-16'>
                    Upload Image
                  </button>
                </div>
                <div className='info-container'>
                  <div className='name-container'>
                    <NewInputComponent
                      label='First Name'
                      value={userProfile.firstName}
                      disabled={true}
                    />
                    <NewInputComponent
                      label='Last Name'
                      value={userProfile.lastName}
                      disabled={true}
                    />
                  </div>
                  <div>
                    <NewInputComponent
                      label='Date of Birth'
                      value={userProfile.birthday}
                      disabled={true}
                      backIcon={<CalendarMonth color='inherit' />}
                    />
                  </div>
                </div>
              </div>
              <div className='message-container margin-top-32'>
                <div className='text-black'>
                  Want to change your personal detail?
                </div>
                <div className='text-blue'>Contact customer service</div>
              </div>
            </div>
          </div>

          <div className='data-container email-phone'>
            <div className='header'>Email and Phone Number</div>
            <div className='content'>
              <NewInputComponent
                label='Email'
                value='eoin@paymentsystem.io'
                disabled={true}
              />
              <div className='margin-top-16'>
                <PhoneNumberInputComponent code='' number='' />
              </div>
            </div>
          </div>
        </div>

        <div className='data-container address margin-top-32'>
          <div className='header'>Address</div>
          <div className='content'>
            <Grid
              container
              spacing={2}
            >
              <Grid item lg={12} xs={12}>
                <NewInputComponent
                  name='address1'
                  label='Address 1'
                  register={register}
                  border={true}
                />
              </Grid>
              <Grid item lg={12} xs={12}>
                <NewInputComponent
                  name='address2'
                  label='Address 2'
                  register={register}
                  border={true}
                />
              </Grid>
              <Grid item lg={6} xs={6}>
                <NewInputComponent
                  name="city"
                  label='Town / City'
                  register={register}
                  border={true}
                />
              </Grid>
              <Grid item lg={6} xs={6}>
                <NewInputComponent
                  name="postCode"
                  label='Post Code / Zip Code'
                  register={register}
                  border={true}
                />
              </Grid>
              <Grid item lg={6} xs={6}>
                <NewInputComponent
                  name="state"
                  label='State / Province'
                  register={register}
                  border={true}
                />
              </Grid>
              <Grid item lg={6} xs={6}>
                <NewInputComponent
                  name="countryName"
                  label='Country'
                  register={register}
                  border={true}
                />
              </Grid>
            </Grid>
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
        <Box sx={{ height: '10rem' }}> </Box>
      </form>
    </PersonalInfoViewStyle>
  );
};
