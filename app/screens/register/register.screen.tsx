import React, { useContext, useState } from 'react';
import { SafeAreaView, ScrollView, View, Alert, Image, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import AuthContext, { AuthProvider } from '../../../AuthContext'; 
import { registerStyle } from './register.style';
import registerUser from './registerUser';
import { useRealm } from '../../../RealmContext'; // Import the useRealm hook

export const RegisterScreen = () => {
  const realm = useRealm(); // Access the Realm context
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegister = async () => {
    // Check if passwords match
    

    const userData = { username, email, password, phoneNumber };
    const success = await registerUser(userData);
    if (success) {
      console.log('User registered successfully!');
      Alert.alert('Registered.');
    } else {
      console.log('Failed to register user.');
      Alert.alert('Failed to register user. Please try again.');
      // Display error message to the user
    }

    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }

    // Optionally, clear the form fields after registration
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setEmail('');
    setPhoneNumber('');
  };

  const [passwordSecureTextEntry, setPasswordSecureTextEntry] = useState(true);
  const [confirmPasswordSecureTextEntry, setConfirmPasswordSecureTextEntry] = useState(true);

  const togglePasswordSecureTextEntry = () => {
    setPasswordSecureTextEntry(!passwordSecureTextEntry);
  };

  const toggleConfirmPasswordSecureTextEntry = () => {
    setConfirmPasswordSecureTextEntry(!confirmPasswordSecureTextEntry);
  };

  return (
    <SafeAreaView style={registerStyle.content}>
        <View style={registerStyle.view}>
        <Image source={require('./logo.png')} style={registerStyle.logo}/>
        <ScrollView style={registerStyle.view2} keyboardShouldPersistTaps="handled">
        <TextInput
            label="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={text => setEmail(text)}
            style={registerStyle.txtInput}
          />
        <TextInput
            label="Phone Number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
            style={registerStyle.txtInput}
          />
          <TextInput
            label="Username"
            value={username}
            onChangeText={text => setUsername(text)}
            style={registerStyle.txtInput}
          />
          <TextInput
            label="Password"
            secureTextEntry={passwordSecureTextEntry}
            value={password}
            onChangeText={text => setPassword(text)}
            style={registerStyle.txtInput}
            right={<TextInput.Icon icon={passwordSecureTextEntry ? 'eye-off-outline' : 'eye-outline'} onPress={togglePasswordSecureTextEntry} />}
          />
          <TextInput
            label="Confirm Password"
            secureTextEntry={confirmPasswordSecureTextEntry}
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            style={registerStyle.txtInput}
            right={<TextInput.Icon icon={confirmPasswordSecureTextEntry ? 'eye-off-outline' : 'eye-outline'} onPress={toggleConfirmPasswordSecureTextEntry} />}
          />
          
          
          <Button style={registerStyle.btn} onPress={handleRegister} mode="contained">Register</Button>
          </ScrollView>
        </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
