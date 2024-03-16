import React, { useState, useContext, useEffect } from 'react';
import { Button, Card, TextInput } from 'react-native-paper';
import { loginStyle } from './login.style';
import { View, SafeAreaView, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../../AuthContext'; // Import the AuthContext
import authenticateUser from './authenticateUser';
import Realm from 'realm' 

export const LoginScreen = () => {
    const navigation = useNavigation();
    const { setLoggedInUser } = useContext(AuthContext); // Get loginUser function from AuthContext
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    // useEffect(() => {
    //     // Clean up function to close Realm when the component unmounts
    //     return () => {
    //         Realm.close();
    //     };
    // }, []);

    const handleLogin = async () => {
        
        const user = await authenticateUser(phoneNumber, password);
        if (user) {
            const userData = {
                _id: user._id as string,
                username: user.username as string,
                password: user.password as string,
                email: user.email as string,
                phoneNumber: user.phoneNumber as string,
            };
            setLoggedInUser(userData);
            console.log(userData)
        }
        console.log(user)
        

        if (user) {
            // Navigate to HomeScreen if login is successful
            navigation.navigate('User');
        } else {
            // Handle failed login (e.g., display error message)
            Alert.alert('Invalid number/password');
            
        }
    };

    const handleRegisterPress = () => {
        navigation.navigate('Register'); // Navigate to the RegisterScreen
    };

    
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const toggleSecureTextEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    return (
        <SafeAreaView style={loginStyle.content}>
            <View style={loginStyle.view}>
                <Image source={require('./logo.png')} style={loginStyle.logo}/>
                
                <View style={loginStyle.view2}>
                    <TextInput
                        label="Number"
                        keyboardType="phone-pad"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        style={loginStyle.txtInput}
                    />
                    <TextInput
                        label="Password"
                        secureTextEntry={secureTextEntry}
                        value={password}
                        onChangeText={setPassword}
                        style={loginStyle.txtInput}
                        right={<TextInput.Icon icon={secureTextEntry ? 'eye-off-outline' : 'eye-outline'} onPress={toggleSecureTextEntry} />}
                    />
                    {/* <Button>Forgot Number/Password</Button> */}
                    <Button
                        style={loginStyle.btn}
                        mode="contained"
                        onPress={handleLogin} // Call handleLogin function when login button is pressed
                    >
                        Login
                    </Button>
                    <Button 
                        style={loginStyle.btn}
                        onPress={handleRegisterPress}
                    >
                        Register
                    </Button>
                </View>
                  
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;