import React from 'react';

import { Grid, Box } from '@mui/material';

import { ServicesOverviewViewStyle } from './index.style';

import { MobileHeaderComponent, ServiceCardComponent } from 'components/common';

import { IServiceCategory } from 'models';

type ServiceOverviewProps = {
  serviceCategories: IServiceCategory[];
};

export const ServiceOverviewView: React.FC<ServiceOverviewProps> = ({
  serviceCategories,
}) => {
  return (
    <ServicesOverviewViewStyle>
      <Box className='mobile-header-container'>
        <MobileHeaderComponent title='Profile' prevAction={() => { }} />
        <Box sx={{ height: '4rem' }}> </Box>
      </Box>
      <Box className='mobile-container'>

        <Grid className='card-container' container spacing={2}>
          {serviceCategories.map((card, index) => {
            return (
              <Grid item lg={4} xs={6} key={index}>
                <ServiceCardComponent
                  src={card.src}
                  name={card.name}
                  color={card.color}
                  path={card.path}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </ServicesOverviewViewStyle>
  );
};
