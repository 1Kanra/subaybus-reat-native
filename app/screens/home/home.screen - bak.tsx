import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, TouchableOpacity, PermissionsAndroid, Platform } from "react-native";
import MapView, { Region, Marker } from "react-native-maps-osmdroid";
import { Title } from "react-native-paper";
import NavigatorComponent from "../navigator/navigator.components";
import Geolocation from '@react-native-community/geolocation'; // Import Geolocation from @react-native-community/geolocation

type Position = {
    coords: {
        latitude: number;
        longitude: number;
    };
    timestamp: number;
};

type PositionError = {
    code: number;
    message: string;
};

const HomeScreen = () => {
    const initialRegion: Region = {
        latitude: 13.945034,
        longitude: 121.131203,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    const [region, setRegion] = useState<Region>(initialRegion);

    useEffect(() => {
        const requestLocationPermission = async () => {
            try {
                if (Platform.OS === 'android') {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        getCurrentLocation(); // Call getCurrentLocation function here
                    } else {
                        console.log("Location permission denied");
                    }
                } else {
                    getCurrentLocation(); // Call getCurrentLocation function here
                }
            } catch (err) {
                console.warn(err);
            }
        };

        requestLocationPermission();
    }, []);

    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition(
            (position: Position) => {
                const { latitude, longitude } = position.coords;
                setRegion(prevRegion => ({
                    ...prevRegion,
                    latitude,
                    longitude,
                }));
            },
            (error: PositionError) => console.log(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    };
    

    const handleZoomIn = () => {
        setRegion(prevRegion => ({
            ...prevRegion,
            latitudeDelta: prevRegion.latitudeDelta * 0.5,
            longitudeDelta: prevRegion.longitudeDelta * 0.5,
        }));
    };

    const handleZoomOut = () => {
        setRegion(prevRegion => ({
            ...prevRegion,
            latitudeDelta: prevRegion.latitudeDelta * 2,
            longitudeDelta: prevRegion.longitudeDelta * 2,
        }));
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MapView
                style={{ flex: 1 }}
                initialRegion={initialRegion}
                region={region}
                onRegionChange={setRegion}
            >
                {/* Marker for the current location */}
                <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
            </MapView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleZoomIn}>
                    <Title style={styles.buttonText}>+</Title>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.secondButton]} onPress={handleZoomOut}>
                    <Title style={styles.buttonText}>-</Title>
                </TouchableOpacity>
            </View>
            <NavigatorComponent title={'title'} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        top: 16,
        left: 16,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'transparent',
    },
    button: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginVertical: 4,
        borderRadius: 50,
    },
    secondButton: {
        marginTop: 8,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    },
});

export default HomeScreen;
