import React from 'react';

import { withProfileLayout } from 'components';

import { ProfileContainers } from 'containers';

export const TwoFactorPage = withProfileLayout(() => {
  return <ProfileContainers.TwoFactorContainer />;
});
