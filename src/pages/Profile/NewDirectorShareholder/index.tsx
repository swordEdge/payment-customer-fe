import React from 'react';

import { withProfileLayout } from 'components';

import { ProfileContainers } from 'containers';

export const NewDirectorShareholderPage = withProfileLayout(() => {
  return <ProfileContainers.NewDirectorShareholderContainer />;
});
