import React from 'react';
import { Typography, BoxProps } from '@mui/material';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { KYBStepViewStyle } from './index.style';
import { KYBStepComponent } from 'components/common';
import { KYB_STEPS } from 'consts';
import { IBusinessDetail } from 'new_models';

type KYBStepViewProps = BoxProps & {
  business: IBusinessDetail
}

export const KYBStepView: React.FC<KYBStepViewProps> = (props) => {
  const { business } = props;

  const handleStepAction = (step: number) => {

  };

  return (
    <KYBStepViewStyle>
      <Typography className='title-typo'>
        Complete Your Verification
      </Typography>
      <Swiper
        className='slide'
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          1100: {
            slidesPerView: 4,
          },
          321: {
            slidesPerView: 2,
          },
          250: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <KYBStepComponent
            className={`bg-gray`}
            stepTitle='Submit personal details'
            stepAction={() =>
              handleStepAction(KYB_STEPS.SUBMIT_PERSONAL_DETAIL)
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <KYBStepComponent
            className={`bg-gray`}
            stepTitle='Upload identification documents'
            stepAction={() => handleStepAction(KYB_STEPS.UPLOAD_IDENTFICATION)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <KYBStepComponent
            className={`bg-gray`}
            stepTitle='Submit business information'
            stepAction={() => handleStepAction(KYB_STEPS.SUBMIT_BUSINESS_INFO)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <KYBStepComponent
            className={`${business.businessProfileStatus === 'bg-green10' ? '' : 'bg-gray'}`}
            stepTitle='Upload business documents'
            stepAction={() => handleStepAction(KYB_STEPS.UPLOAD_BUSINESS_DOC)}
          />
        </SwiperSlide>
      </Swiper>
    </KYBStepViewStyle>
  );
};
