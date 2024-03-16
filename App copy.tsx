import React, { useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider, Text } from 'react-native-paper';
import { theme } from './app.style';
import HomeScreen from './app/screens/home/home.screen';
import LoginScreen from './app/screens/login/login.screen';
import RegisterScreen from './app/screens/register/register.screen';
import UserScreen from './app/screens/user/user.screen';
import { AuthProvider } from './AuthContext';
import { RealmContext, Task } from './task';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { BSON } from 'realm';

const Stack = createStackNavigator();

const { useQuery, useRealm } = RealmContext;

const App = () => {

  // const realm = useRealm();
  // const tasks = useQuery(Task);

  // const addTask = useCallback(() => {
  //   realm.write(() => {
  //     realm.create(
  //       'Task',
  //       {
  //         _id: new BSON.ObjectId(),
  //         title: 'Walk the dog',
  //         description: 'Bring an umbrella',
  //       }
  //     )
  //   })
  // }, [])

  // useEffect(() => {
  //   realm.subscriptions.update(mutableSubs => {
  //     mutableSubs.add(realm.objects(Task));
  //   })
  // })

  // return (
  //   <View style={{flex:1}}>
  //     <FlatList data={tasks} renderItem={({ item }) => <Text>{`${item.title} - ${item.description}`}</Text>} />
  //     <TouchableOpacity style={{backgroundColor: 'yellow'}} onPress={addTask}>
  //       <Text>{'New Task'}</Text>
  //     </TouchableOpacity>
  //   </View>
    
  // );


  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
            <Stack.Navigator 
              initialRouteName="Login"
              screenOptions={{
                headerStyle:{
                  backgroundColor:'rgba(135,161,255,1)'
                }
              }}
            >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen}/>
            <Stack.Screen name="User" component={UserScreen} options={{ headerShown: false }}/>
         </Stack.Navigator>
        </AuthProvider>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;