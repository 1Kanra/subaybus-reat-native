User
import Realm from 'realm';

// Define the schema for user registration data
const UserSchema = {
  name: 'User',
  properties: {
    username: 'string',
    email: 'string',
    password: 'string',
    phoneNumber: 'string',
    location: { type: 'int', default: 0 }, // Initial value 0 for location
    selectedBus: { type: 'int', default: 0 }, // Initial value 0 for selectedBus
  },
};

// Initialize your Realm app
const app = new Realm.App({ id: 'subaybus-rhuqh' });

// Function to save user registration data to MongoDB Realm
const registerUser = async (userData) => {
  try {
    const credentials = Realm.Credentials.anonymous();
    await app.logIn(credentials);

    const user = await app.currentUser();
    const realm = await Realm.open({
      schema: [UserSchema],
      sync: {
        user: user,
        partitionValue: 'public',
      },
    });

    realm.write(() => {
      realm.create('User', userData);
    });

    return true; // Registration successful
  } catch (error) {
    console.error('Error registering user:', error);
    return false; // Registration failed
  }
};

export default registerUser;