import React, { useEffect } from 'react';

import { LandingViews } from 'components';

export const LandingContainer = () => {
  useEffect(() => {
    sessionStorage.removeItem("step");
    sessionStorage.removeItem("transfer");
  }, []);

  return <LandingViews.LandingView />;
};
