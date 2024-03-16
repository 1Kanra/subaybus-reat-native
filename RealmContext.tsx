import React from 'react';
import { createRealmContext } from '@realm/react';
import Realm from 'realm';

// Define your schema here
const UserSchema: Realm.ObjectSchema = {
  name: 'User',
  primaryKey: '_id',
  properties: {
    _id: 'objectId',
    username: 'string',
    email: 'string',
    password: 'string',
    phoneNumber: 'string',
    location: { type: 'string', default: '0' },
    selectedBus: { type: 'int', default: 0 }, // Default value for selectedBus
  },
};

// const BusSchema: Realm.ObjectSchema = {
//   name: 'Bus',
//   primaryKey: '_id',
//   properties: {
//     _id: 'objectId',
//     busNumber: { type: 'int', default: 0 },
//     location: { type: 'string', default: '0' },
//     message: { type: 'string', default: 0 }, // Default value for selectedBus
//   },
// };

// Define your Realm context using createRealmContext
export const RealmContext = createRealmContext({
  schema: [UserSchema],
  // Optionally, you can define other configurations such as initialSyncConfiguration
});

export const { RealmProvider, useRealm } = RealmContext;
export const schema = [UserSchema]; // Export the schema directly

