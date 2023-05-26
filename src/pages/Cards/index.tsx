import React from 'react';

import { CardContainers } from '../../containers';

import { withDashboardLayout } from 'components/common';

export const CardsPage = withDashboardLayout(() => {
  return <CardContainers.CardsContainer />;
});
