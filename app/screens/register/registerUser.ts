import Realm from 'realm';
import { schema } from '../../../RealmContext'; // Import the schema directly

let realmInstance: Realm | null = null;

const registerUser = async (userData: {
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
}): Promise<boolean> => {
  try {
    // Close the previously opened Realm instance if it exists
    if (realmInstance !== null) {
      realmInstance.close();
      realmInstance = null;
    }

    // Open a new Realm instance
    realmInstance = await Realm.open({ schema });

    if (realmInstance) { // Check if realm is not null before using it
      console.log('Database path:', realmInstance.path);
      realmInstance.write(() => {
        const newUser = realmInstance?.create('User', {
          _id: new Realm.BSON.ObjectId(),
          ...userData,
        });
        console.log('Registered user:', newUser);
        console.log('users', realmInstance?.objects('User'));
      });
      return true;
    } else {
      console.error('Error registering user: Realm is null');
      return false;
    }
  } catch (error) {
    console.error('Error registering user:', error);
    return false;
  }
};

export default registerUser;
