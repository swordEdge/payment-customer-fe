import React, { useEffect } from 'react';
import { Box, Grid, BoxProps } from '@mui/material';
import { NewInputComponent, NewButtonComponent } from 'components/common';
import { BusinessDetailViewStyle } from './index.style';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { IBusinessDetail } from 'new_models';
import { AppActionTypes } from 'new_redux/store';

type IUpdateBusinessDetail = {
  country: string;
  businessName: string;
  businessNo: string;
  registrationDate: string;
  industry: string;
  supplierName: string;
  sideIndustry: string;
  website?: string;
  station?: string;
};

const schema = Yup.object().shape({
  country: Yup.string().required(),
  businessName: Yup.string().required(),
  businessNo: Yup.string().required(),
  registrationDate: Yup.date().required(),
  industry: Yup.string().required(),
  supplierName: Yup.string().required(),
  sideIndustry: Yup.string().required(),
  website: Yup.string(),
  station: Yup.string(),
});

type BusinessDetailViewProps = BoxProps & {
  business: IBusinessDetail;
  updateBusinessDetail: (business: AppActionTypes.Business.IUpdateBusinessDetail) => void;
};

export const BusinessDetailView: React.FC<BusinessDetailViewProps> = (props) => {
  const { business, updateBusinessDetail } = props;

  const { register, handleSubmit, formState: { errors, isValid }, watch, setValue } = useForm<IUpdateBusinessDetail>({
    resolver: yupResolver(schema),
    defaultValues: {
      country: business.country,
      businessName: business.businessName,
      businessNo: business.businessNo,
      registrationDate: business.registrationDate,
      industry: business.industry,
      supplierName: business.supplierName,
      sideIndustry: business.sideIndustry,
      website: business.website,
      station: business.station,
    }
  });

  const onSubmitHandler = (data: IUpdateBusinessDetail) => {
    updateBusinessDetail(data);
  };

  useEffect(() => {
    if (business) {
      setValue('country', business.country);
      setValue('businessName', business.businessName);
      setValue('businessNo', business.businessNo);
      setValue('registrationDate', business.registrationDate);
      setValue('industry', business.industry);
      setValue('supplierName', business.supplierName);
      setValue('sideIndustry', business.sideIndustry ?? '');
      setValue('website', business.website);
      setValue('station', business.station);
    }
  }, [business])

  return <BusinessDetailViewStyle>
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Grid container spacing={4}>
        <Grid item lg={7} md={7} xs={12}>
          <Box className="info-panel">
            <Box className="panel-comment"> Business Detail </Box>
            <Box className="panel">
              <Grid container spacing={2}>
                <Grid item lg={5} sm={5} xs={12}>
                  <NewInputComponent
                    label="Country"
                    border={true}
                    name="country"
                    register={register}
                    value={watch().country}
                    error={!!errors.country}
                  />
                </Grid>
                <Grid item lg={7} sm={7} xs={12}>
                </Grid>
                <Grid item lg={12} sm={12} xs={12}>
                  <NewInputComponent
                    label="Legal Name"
                    border={true}
                    name="businessName"
                    value={watch().businessName}
                    register={register}
                    error={!!errors.businessName}
                  />
                </Grid>
                <Grid item lg={6} sm={6} xs={12}>
                  <NewInputComponent
                    label="Company house registration number"
                    border={true}
                    name="businessNo"
                    value={watch().businessNo}
                    register={register}
                    error={!!errors.businessNo}
                  />
                </Grid>
                <Grid item lg={6} sm={6} xs={12}>
                  <NewInputComponent
                    type='date'
                    label="Date of Incorporation"
                    border={true}
                    name="registrationDate"
                    value={watch().registrationDate}
                    register={register}
                    error={!!errors.registrationDate}
                  />
                </Grid>
                <Grid item lg={6} sm={6} xs={12}>
                  <NewInputComponent
                    label="Business Type"
                    border={true}
                    name="industry"
                    value={watch().industry}
                    register={register}
                    error={!!errors.industry}
                  />
                </Grid>
                <Grid item lg={6} sm={6} xs={12}>
                  <NewInputComponent
                    label="Trading Name"
                    border={true}
                    name="supplierName"
                    value={watch().supplierName}
                    register={register}
                    error={!!errors.supplierName}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={5} md={5} xs={12}>
          <Box className="info-panel">
            <Box className="panel-comment"> Type of Business </Box>
            <Box className="panel">
              <Grid container spacing={2}>
                <Grid item lg={12} xs={12}>
                  <NewInputComponent
                    label="Category"
                    border={true}
                    name="sideIndustry"
                    value={watch().sideIndustry}
                    register={register}
                    error={!!errors.sideIndustry}
                  />
                </Grid>
                <Grid item lg={12} xs={12}>
                  <NewInputComponent
                    label="Website"
                    border={true}
                    name="website"
                    value={watch().website}
                    register={register}
                  />
                </Grid>
                <Grid item lg={12} xs={12}>
                  <NewInputComponent
                    label="Description"
                    border={true}
                    multiline={true}
                    maxRows={4}
                    name="station"
                    value={watch().station}
                    register={register}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>

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
  </BusinessDetailViewStyle>
};