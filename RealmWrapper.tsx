import React, { useEffect, useState } from 'react';
import { SafeAreaView, ActivityIndicator } from 'react-native';
import { OpenRealmBehaviorType } from 'realm';
import { RealmProvider } from './RealmContext'; // Import RealmProvider from your Realm context file
import App from './App'; // Import your main app component

const RealmWrapper = () => {
  const isLoggedIn = true; // Simulate successful login
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isLoggedIn ? (
        <RealmProvider
          sync={{
            flexible: true,
            newRealmFileBehavior: {
              type: OpenRealmBehaviorType.DownloadBeforeOpen,
            },
            existingRealmFileBehavior: {
              type: OpenRealmBehaviorType.OpenImmediately,
            },
          }}>
          {/* Render your main app component here */}
          <App />
        </RealmProvider>
      ) : (
        <ActivityIndicator size={'large'} />
      )}
    </SafeAreaView>
  );
};

export default RealmWrapper;
