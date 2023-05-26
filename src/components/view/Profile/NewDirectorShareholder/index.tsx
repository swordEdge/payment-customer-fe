import React, { useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CalendarMonth } from '@mui/icons-material';
import { Box, Grid, Checkbox, Typography } from '@mui/material';
import { NewDirectorShareholderViewStyle } from './index.style';
import {
  NewButtonComponent,
  NewInputComponent,
} from 'components/common';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { AppActionTypes } from 'new_redux/store';
import { BUSINESS_MEMBER_TYPE } from 'consts';

type NewDirectorShareholderViewProps = {
  createBusinessMember: (member: AppActionTypes.Business.INewBusinessMember) => void;
};

const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  birthday: Yup.date().required(),
  email: Yup.string().email().required(),
  countryCode: Yup.string().required(),
  phoneNumber: Yup.string().required(),
  address: Yup.string().required(),
  city: Yup.string().required(),
  postCode: Yup.string().required(),
  country: Yup.string().required(),
  memberType: Yup.number().required()
});

export const NewDirectorShareholderView: React.FC<NewDirectorShareholderViewProps> = (props) => {
  const { createBusinessMember } = props;

  const navigate = useNavigate();
  const location = useLocation();

  const checkBoxRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, formState: { errors, isValid }, setValue } = useForm<AppActionTypes.Business.INewBusinessMember>({
    resolver: yupResolver(schema),
  })

  const businessMemberType: number = useMemo(() => {
    if (location.pathname.includes('director')) {
      setValue('memberType', BUSINESS_MEMBER_TYPE.DIRECTOR);
      return 0;
    }
    setValue('memberType', BUSINESS_MEMBER_TYPE.SHAREHOLDER);
    return 1;
  }, [location]);

  const onMobileHeaderPrevClick = (path: string) => {
    navigate(path);
  };

  const onSubmitHandler = (data: AppActionTypes.Business.INewBusinessMember) => {
    if (checkBoxRef.current && checkBoxRef.current.checked) {
      data.memberType = BUSINESS_MEMBER_TYPE.DIRECTOR_SHAREHOLDER;
    }
    createBusinessMember(data);
  }

  return (
    <NewDirectorShareholderViewStyle>
      {/* <Box className='mobile-header-container'>
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
      </Box> */}

      <div className='title'> {`Add New ${businessMemberType ? 'Shareholder' : 'Director'}`} </div>

      <Box sx={{ height: '1rem' }}></Box>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className='personal-detail-email-phone column-gap-32'>
          <div className='data-container personal-detail'>
            <div className='header'>Personal Detail</div>
            <div className='content'>
              <div className='detail-container column-gap-32'>
                <div className='info-container'>
                  <div className='name-container'>
                    <NewInputComponent
                      label='First Name'
                      border={true}
                      name='firstName'
                      register={register}
                    />
                    <NewInputComponent
                      label='Last Name'
                      border={true}
                      name='lastName'
                      register={register}
                    />
                  </div>
                  <div className='margin-top-16'>
                    <NewInputComponent
                      type='date'
                      label='Date of Birth'
                      border={true}
                      name='birthday'
                      register={register}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='data-container email-phone'>
            <div className='header'>Email and Phone Number</div>
            <div className='content'>
              <NewInputComponent
                label='Email'
                border={true}
                name='email'
                register={register}
              />
              <div className='margin-top-16'>
                {/* <PhoneNumberInputComponent code='' number='' /> */}
                <Grid container spacing={2}>
                  <Grid item xs={5}>
                    <NewInputComponent
                      label='Country Code'
                      border={true}
                      name='countryCode'
                      register={register}
                    />
                  </Grid>
                  <Grid item xs={7}>
                    <NewInputComponent
                      label='Phone Number'
                      border={true}
                      name='phoneNumber'
                      register={register}
                    />
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </div>

        <div className='data-container address margin-top-32'>
          <div className='header'>Residential Address</div>
          <div className='content'>
            <Grid
              container
              spacing={2}
            >
              <Grid item lg={12} xs={12}>
                <NewInputComponent
                  name='address'
                  label='Address'
                  border={true}
                  register={register}
                />
              </Grid>
              <Grid item lg={4} xs={4}>
                <NewInputComponent
                  name="city"
                  label='Town / City'
                  border={true}
                  register={register}
                />
              </Grid>
              <Grid item lg={4} xs={4}>
                <NewInputComponent
                  name="postCode"
                  label='Post Code / Zip Code'
                  border={true}
                  register={register}
                />
              </Grid>
              <Grid item lg={4} xs={4}>
                <NewInputComponent
                  name="country"
                  label='Country'
                  border={true}
                  register={register}
                />
              </Grid>
            </Grid>
          </div>
        </div>

        <Box className='each-field' sx={{ marginTop: '0.5rem' }}>
          <Checkbox
            inputRef={checkBoxRef}
            className='check-box'
          />
          <Typography className='comment-typo' sx={{ fontSize: '1.2rem' }}>
            {`Add this profile as ${businessMemberType ? 'director' : 'shareholder'} too`}
          </Typography>
        </Box>

        <div className='margin-top-32 button-container'>
          <NewButtonComponent className='button-item' disabled={true}>
            Cancel
          </NewButtonComponent>
          <NewButtonComponent
            type='submit'
            className='button-item'
          >
            Update
          </NewButtonComponent>
        </div>
        <Box sx={{ height: '10rem' }}> </Box>
      </form>
    </NewDirectorShareholderViewStyle>
  );
};
