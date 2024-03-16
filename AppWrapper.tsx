import React from 'react';
import { AppProvider, UserProvider } from '@realm/react';
import RealmWrapper from './RealmWrapper';

const AppWrapper = () => {
  return (
    <AppProvider id={'subaybus-rhuqh'}>
      <UserProvider fallback={<RealmWrapper />}>
        <RealmWrapper />
      </UserProvider>
    </AppProvider>
  );
};

export default AppWrapper;
