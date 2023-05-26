import React from 'react';

import { TransferContainers } from 'containers';

import { withDashboardLayout } from 'components/common';

export const TransferPage = withDashboardLayout(() => {
  return <TransferContainers.TransferContainer />;
});
