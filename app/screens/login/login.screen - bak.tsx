import React, { useState, useContext } from 'react';
import { Button, Card, TextInput } from 'react-native-paper';
import { loginStyle } from './login.style';
import { View, SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../../AuthContext'; // Import the AuthContext

export const LoginScreen = () => {
    const navigation = useNavigation();
    const { loginUser } = useContext(AuthContext); // Get loginUser function from AuthContext
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Call the loginUser function from AuthContext
        const user = loginUser(phoneNumber, password);
        
        // Check if user is found
        if (user) {
            // Navigate to HomeScreen if login is successful
            navigation.navigate('Home');
        } else {
            // Handle failed login (e.g., display error message)
            Alert.alert('Invalid number/password');
        }
    };

    const handleRegisterPress = () => {
        navigation.navigate('Register'); // Navigate to the RegisterScreen
    };

    return (
        <SafeAreaView style={loginStyle.content}>
            <View style={loginStyle.view}>
                <Card>
                    <Card.Title title="SubayBus"></Card.Title>
                    <Card.Content>
                        <TextInput
                            label="Number"
                            keyboardType="phone-pad"
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                        />
                        <TextInput
                            label="Password"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <Button>Forgot Number/Password</Button>
                        <Button
                            style={loginStyle.card}
                            mode="contained"
                            onPress={handleLogin} // Call handleLogin function when login button is pressed
                        >
                            Login
                        </Button>
                        <Button onPress={handleRegisterPress}>REGISTER</Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;