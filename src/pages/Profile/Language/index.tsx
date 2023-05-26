import React from 'react';

import { withProfileLayout } from 'components';

import { ProfileContainers } from 'containers';

export const LanguagePage = withProfileLayout(() => {
  return <ProfileContainers.LanguageContainer />;
});
