import React, { useEffect, useState } from 'react';
import { View, StyleSheet, PermissionsAndroid, Linking, Text, Button } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const Location = ({ navigation }) => {
  const [location, setLocation] = useState(null);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'App needs access to your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getLocation = () => {
    // alert('plz wait')
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => {
        console.log('Error getting location', error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
    // 
  };

  const openMaps = () => {
    if (location && location.latitude && location.longitude) {
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`;
      Linking.openURL(mapsUrl);
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <View style={{}}>
      <View>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, alignSelf: 'center', padding: 20 }}>
          Location
        </Text>
        {location && location.latitude !== null && location.longitude !== null && (
          <React.Fragment>
            <Text style={{ color: 'black', fontWeight: 'normal', fontSize: 16, margin: 5 }}>
              Latitude: {location.latitude}
            </Text>
            <Text style={{ color: 'black', fontWeight: 'normal', fontSize: 16, margin: 5 }}>
              Longitude: {location.longitude}
            </Text>
          </React.Fragment>
        )}
        <Button title="Get Location" onPress={()=>getLocation} />
        <View style={{ marginBottom: 20 }}></View>
        {location && location.latitude && location.longitude && (
          <Button title="Open Maps" onPress={openMaps} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Location;
