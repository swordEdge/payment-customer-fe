import React from 'react';

import { withProfileLayout } from 'components';

import { ProfileContainers } from 'containers';

export const NotificationsPage = withProfileLayout(() => {
  return <ProfileContainers.NotificationsContainer />;
});
