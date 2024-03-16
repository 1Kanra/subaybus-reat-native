import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/screens/home/home.screen';
import LoginScreen from './app/screens/login/login.screen';
import RegisterScreen from './app/screens/register/register.screen';
import UserScreen from './app/screens/user/user.screen';
import { theme } from './app.style';
import { RealmProvider } from './RealmContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <RealmProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={{
              headerStyle:{
                backgroundColor:'rgba(135,161,255,1)'
              }
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen}/>
            <Stack.Screen name="User" component={UserScreen} options={{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </RealmProvider>
  );
};

export default App;
