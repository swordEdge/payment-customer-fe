import React, { useMemo } from 'react';
import { Grid, Box, Checkbox, FormControlLabel, BoxProps } from '@mui/material';
import { BusinessAddressViewStyle } from './index.style';
import { NewInputComponent, NewButtonComponent } from 'components/common';
import { IBusinessDetail } from 'new_models';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { AppActionTypes } from 'new_redux/store';

type BusinessAddressViewProps = BoxProps & {
  business: IBusinessDetail;
  updateBusinessAddress: (businessAddress: AppActionTypes.Business.IUpdateBusinessAddress) => void;
};

const schema = Yup.object().shape({
  businessAddress: Yup.string().required(),
  businessTown: Yup.string().required(),
  businessZipCode: Yup.string().required(),
  operatingAddress: Yup.string().required(),
  operatingTown: Yup.string().required(),
  operatingZipCode: Yup.string().required(),
  operatingCountry: Yup.string().required(),
});

export const BusinessAddressView: React.FC<BusinessAddressViewProps> = (props) => {
  const { business, updateBusinessAddress } = props;

  const { register, handleSubmit, formState: { errors, isValid }, watch, setValue } = useForm<AppActionTypes.Business.IUpdateBusinessAddress>({
    resolver: yupResolver(schema),
    defaultValues: {
      businessAddress: '',
      businessTown: '',
      businessZipCode: '',
      businessCountry: business.country,
      operatingAddress: '',
      operatingTown: '',
      operatingZipCode: '',
      operatingCountry: '',
    }
  });

  const [businessAddress, businessTown, businessZipCode, operatingAddress, operatingTown, operatingZipCode, operatingCountry] = useMemo(() => {
    if (business.businessAddress !== '' && business.registrationAddress !== '') {
      const businessAddressDetail = business.businessAddress.split(', ').slice(0, 3);
      const operatingAddressDetail = business.registrationAddress.split(', ');
      setValue('businessAddress', businessAddressDetail[0]);
      setValue('businessTown', businessAddressDetail[1]);
      setValue('businessZipCode', businessAddressDetail[2]);
      setValue('operatingAddress', operatingAddressDetail[0]);
      setValue('operatingTown', operatingAddressDetail[1]);
      setValue('operatingZipCode', operatingAddressDetail[2]);
      setValue('operatingCountry', operatingAddressDetail[3]);
      return [...businessAddressDetail, ...operatingAddressDetail];
    }
    return ['', '', '', '', '', '', ''];
  }, [business]);

  const onSubmitHandler = (data: AppActionTypes.Business.IUpdateBusinessAddress) => {
    updateBusinessAddress(data);
  }

  return <BusinessAddressViewStyle>
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Box className='panel-container'>
        <Box className='panel-title'> Business Address </Box>
        <Box className='panel-comment'> The official address registered for the Business. It can be different from the address at which you have your business or coworking space.  </Box>
        <Box className='panel'>
          <Grid container spacing={2}>
            <Grid item lg={12} xs={12}>
              <NewInputComponent
                label="Address"
                value={watch().businessAddress}
                name="businessAddress"
                register={register}
                border={true}
                error={!!errors.businessAddress}
              />
            </Grid>
            <Grid item lg={4} sm={4} xs={12}>
              <NewInputComponent
                label="Town/City"
                value={watch().businessTown}
                name="businessTown"
                register={register}
                border={true}
                error={!!errors.businessTown}
              />
            </Grid>
            <Grid item lg={4} sm={4} xs={12}>
              <NewInputComponent
                label="Post Code/Zip Code"
                value={watch().businessZipCode}
                name="businessZipCode"
                register={register}
                border={true}
                error={!!errors.businessZipCode}
              />
            </Grid>
            <Grid item lg={4} sm={4} xs={12}>
              <NewInputComponent
                label="Country"
                name="businessContry"
                value={watch().businessCountry}
                border={true}
                disabled
              />
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box className='panel-container margin-top-32px'>
        <Box className='panel-title'> Operating Address </Box>
        <Box className='panel-comment'> The address where you would usually conduct Day to Day Operations.  </Box>
        <Box className='panel'>
          <Grid container spacing={2}>
            <Grid item lg={12} xs={12}>
              <NewInputComponent
                label="Address"
                value={watch().operatingAddress}
                name="operatingAddress"
                register={register}
                border={true}
                error={!!errors.operatingAddress}
              />
            </Grid>
            <Grid item lg={4} sm={4} xs={12}>
              <NewInputComponent
                label="Town/City"
                value={watch().operatingTown}
                name="operatingTown"
                register={register}
                border={true}
                error={!!errors.operatingTown}
              />
            </Grid>
            <Grid item lg={4} sm={4} xs={12}>
              <NewInputComponent
                label="Post Code/Zip Code"
                value={watch().operatingZipCode}
                name="operatingZipCode"
                register={register}
                border={true}
                error={!!errors.operatingZipCode}
              />
            </Grid>
            <Grid item lg={4} sm={4} xs={12}>
              <NewInputComponent
                label="Country"
                value={watch().operatingCountry}
                name="operatingCountry"
                register={register}
                border={true}
                error={!!errors.operatingCountry}
              />
            </Grid>
          </Grid>
          <FormControlLabel
            className='flex'
            control={<Checkbox
              className='unchecked'
              checked={false}
            />}
            label='Same as registered business address'
          />
        </Box>
      </Box>

      <div className='margin-top-32px button-container'>
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
  </BusinessAddressViewStyle>
};