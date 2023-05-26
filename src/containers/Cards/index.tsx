import React, { useEffect } from 'react';

import { CardViews } from 'components';

export const CardsContainer = () => {
  useEffect(() => {
    sessionStorage.removeItem("step");
    sessionStorage.removeItem("transfer");
  }, []);

  return <CardViews.CardsView />;
};
