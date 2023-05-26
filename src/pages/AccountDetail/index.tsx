import React from 'react';

import { AccountDetailContainers } from '../../containers';

import { withDashboardLayout } from 'components/common';

export const AccountDetailPage = withDashboardLayout(() => {
  return <AccountDetailContainers.AccountDetailContainer />;
});
