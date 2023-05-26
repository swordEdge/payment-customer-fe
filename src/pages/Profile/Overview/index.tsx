import React from 'react';

import { withProfileLayout } from 'components';

import { ProfileContainers } from 'containers';

export const OverviewPage = withProfileLayout(() => {
  return <ProfileContainers.OverviewContainer />;
});
