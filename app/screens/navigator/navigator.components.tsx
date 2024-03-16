import React from 'react';
import { Appbar, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { navigatorStyles } from './navigator.styles';
import { StyleSheet, View } from 'react-native';
import Realm from 'realm'

const NavigatorComponent = (props: NavigatorComponentParams) => {
    const navigation = useNavigation();

    const goToHome = () => {
        navigation.navigate('Home'); // Assuming 'Home' is the name of your home screen
    };

    const goToUser = () => {
        navigation.navigate('User'); // Assuming 'User' is the name of your user screen
    };

    const handleLogout = async () => {
        try{
            const realm = await Realm.open({schema:[]});
            realm.close();
        } catch (error){

        }
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <Appbar style={navigatorStyles.content}>
            <TextInput.Icon icon={'logout'} color={'black'} onPress={handleLogout}/>
            </Appbar>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    actionContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

interface NavigatorComponentParams {
    title: string;
}

export default NavigatorComponent;
