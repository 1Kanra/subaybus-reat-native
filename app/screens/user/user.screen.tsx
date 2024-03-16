import React, { useContext, useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import AuthContext from '../../../AuthContext';
import NavigatorComponent from '../navigator/navigator.components';
import { SafeAreaView } from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import { UserStyle } from './user.style';
import MapView, { Marker } from 'react-native-maps-osmdroid';
import Realm from 'realm';
import { RealmContext } from '../../../RealmContext';
import RealmApp from '@realm/react'
import axios from 'axios';

const BusSchema: Realm.ObjectSchema = {
  name: 'Bus',
  primaryKey: '_id',
  properties: {
    _id: 'objectId',
    busNumber: { type: 'int', default: 0 },
    location: { type: 'string', default: '0' },
    message: { type: 'string', default: '0' }, // Corrected default value
  },
};


const UserScreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [uName, setUName] = useState('');
  const [busMessage, setBusMessage] = useState('');
  const [busData, setBusData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBusMessage();
  }, []);

  const fetchBusMessage = async () => {
    try {
      const response = await fetch('https://subaybusserver.glitch.me/bus');
      const data = await response.json();
      setBusData(data);
      setLoading(false);
      console.log('Bus data:', data)
    } catch (error) {
      console.error('Error fetching bus data:', error);
      setLoading(false);
    }
      
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    console.log(busMessage);
  };

  const handleZoomIn = () => {
    (mapViewRef.current as any)?.animateToRegion({
      latitude: currentRegion.latitude,
      longitude: currentRegion.longitude,
      latitudeDelta: currentRegion.latitudeDelta * 0.5,
      longitudeDelta: currentRegion.longitudeDelta * 0.5,
    });
  };

  const handleZoomOut = () => {
    (mapViewRef.current as any)?.animateToRegion({
      latitude: currentRegion.latitude,
      longitude: currentRegion.longitude,
      latitudeDelta: currentRegion.latitudeDelta * 2,
      longitudeDelta: currentRegion.longitudeDelta * 2,
    });
  };

  const mapViewRef = React.useRef(null);

  const [currentRegion, setCurrentRegion] = React.useState({
    latitude: 13.945034,
    longitude: 121.131203,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });



  return (
    <SafeAreaView style={UserStyle.content}>
      <View style={{ flex: 1 }}>
        <View style={UserStyle.profile}>
        <Text style={UserStyle.logos}>{uName[0]}</Text>
           <Text style={UserStyle.logosNex}>{uName}</Text>
          <Text>{busMessage}</Text>
        </View>
        <View style={isFullscreen ? UserStyle.fullscreenMap : UserStyle.miniMap}>
          <MapView
            ref={mapViewRef}
            style={{ flex: 1 }}
            initialRegion={currentRegion}
            
          >
            {/* Marker for the current location */}
            <Marker coordinate={{ latitude: 13.945034, longitude: 121.131203, }} />
          </MapView>
          
          <View style={UserStyle.zoomButtonContainer}>
            <IconButton
              icon="plus"
              size={20}
              onPress={handleZoomIn}
              style={UserStyle.fullscreenButton}
            />
            <IconButton
              icon="minus"
              size={20}
              onPress={handleZoomOut}
              style={UserStyle.fullscreenButton}
            />
          </View>
          <View style={UserStyle.fullscreenButtonContainer}>
            <IconButton
              icon={isFullscreen ? 'fullscreen-exit' : 'fullscreen'}
              size={25}
              onPress={toggleFullscreen}
              style={UserStyle.fullscreenButton}
            />
          </View>
        </View>
      </View>
      <NavigatorComponent title={''} />
    </SafeAreaView>
  );
};

export default UserScreen;