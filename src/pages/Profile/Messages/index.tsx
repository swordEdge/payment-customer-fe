import React from 'react';

import { withProfileLayout } from 'components';

import { ProfileContainers } from 'containers';

export const MessagesPage = withProfileLayout(() => {
  return <ProfileContainers.MessagesContainer />;
});
