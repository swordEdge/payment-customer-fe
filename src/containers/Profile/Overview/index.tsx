import React, { useEffect } from 'react';

import { ProfileViews } from 'components';

export const OverviewContainer = () => {
  useEffect(() => {
    sessionStorage.removeItem("step");
    sessionStorage.removeItem("transfer");
  }, []);
  return (
    <ProfileViews.OverviewView
      avatar='/asset/Avatars/sample1.jpg'
      name='Eoin Cronan'
      emailAddress='eoin@paymentsystem.io'
    />
  );
};
