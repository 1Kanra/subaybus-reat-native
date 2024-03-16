import Realm from 'realm';
import { schema } from '../../../RealmContext';

const authenticateUser = async (phoneNumber: string, password: string) => {
    let realm: Realm | null = null;

    try {
        realm = await Realm.open({
            schema: schema,
        });

        const userData = realm.objects('User').filtered(`phoneNumber = '${phoneNumber}'`);

        if (userData.length > 0 && userData[0].password === password) {
            // Retrieve the required data before closing the Realm instance
            const authenticatedUser = { ...userData[0] };
            realm.close(); // Close the Realm instance
            return authenticatedUser; // Return the authenticated user data
        } else {
            realm.close(); // Close the Realm instance if user doesn't exist or password doesn't match
            return null; // Return null if user doesn't exist or password doesn't match
        }
    } catch (error: any) {
        console.error('Error authenticating user:', error);
        throw new Error('Failed to authenticate user');
    }
};

export default authenticateUser;
