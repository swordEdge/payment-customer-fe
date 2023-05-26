import React, { useEffect } from 'react';

import { ServiceViews } from 'components';

import { ServiceCategories } from 'consts';

export const ServiceOverviewContainer = () => {
  useEffect(() => {
    sessionStorage.removeItem("step");
    sessionStorage.removeItem("transfer");
  }, []);
  return <ServiceViews.ServiceOverviewView serviceCategories={ServiceCategories} />;
};
