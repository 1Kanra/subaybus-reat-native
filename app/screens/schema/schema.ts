// // schema.ts

// import Realm from 'realm';

// export class User extends Realm.Object {
//   _id!: Realm.BSON.ObjectId;
//   username!: string;
//   email!: string;
//   password!: string;
//   phoneNumber!: string;
//   location!: number; // Assuming location is a number
//   selectedBus!: number; // Assuming selectedBus is a number

//   static schema: Realm.ObjectSchema = {
//     name: 'User',
//     primaryKey: '_id',
//     properties: {
//       _id: 'objectId',
//       username: 'string',
//       email: 'string',
//       password: 'string',
//       phoneNumber: 'string',
//       location: { type: 'int', default: 0 },
//       selectedBus: { type: 'int', default: 0 },
//     },
//   };
// }
