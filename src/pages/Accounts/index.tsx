import React from 'react';

import { AccountContainers } from '../../containers';

import { withDashboardLayout } from 'components/common/';

export const AccountsPage = withDashboardLayout(() => {
  return <AccountContainers.AccountsContainer />;
});
