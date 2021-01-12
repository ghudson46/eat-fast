import React, { useState, useReducer, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';

import * as Location from 'expo-location';

import { useNavigation } from '../utils';

const screenWidth = Dimensions.get('screen').width;

export const LandingScreen = () => {

  const { navigate } = useNavigation();

  const [errorMsg, setErrorMsg] = useState('');
  const [address, setAddress] = useState<Location.Address>();

  const [displayAddress, setDisplayAddress] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permission to access location is not gramted');
      }

      let location: any = await Location.getCurrentPositionAsync({});

      const { coords } = location;

      if (coords) {
        const { latitude, longitude } = coords;

        let addressResponse: any = await Location.reverseGeocodeAsync({ latitude, longitude });

        for (let item of addressResponse) {
          setAddress(item);
          let currentAddress = `${item.name}, ${item.street}, ${item.poastalCode}, ${item.country}`;

          setDisplayAddress(currentAddress);

          if (currentAddress.length > 0) {
            setTimeout(() => {
              navigate('homeStack')
            }, 2000)
          }

          return;
        }
      } else {

      }

    })();

  },[])

  return (
    <View style={styles.container}>
      <View style={styles.navigation} />
  
      <View style={styles.body}>
        <Image source={require('../images/delivery_icon.png')} style={styles.deliveryIcon} />
        <View style={styles.addressContainer}>
          <Text>Your Delivery Address</Text>
        </View>

        <Text style={styles.addressText}>{displayAddress}</Text>
      </View>
      <View style={styles.footer} />
    </View>
  )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(245, 245, 245, 1)'
    },
    navigation: {
      flex: 2,
      backgroundColor: 'rgba(245, 245, 245, 1)'
    },
    body: {
      flex: 9,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(245, 245, 245, 1)'
    },
    footer: {
      flex: 1,
      backgroundColor: 'rgba(245, 245, 245, 1)'
    },
    deliveryIcon : {
      width: 120,
      height: 120
    },
    addressContainer: {
      width: screenWidth - 100,
      borderBottomColor: 'red',
      borderBottomWidth: 0.5,
      padding: 5,
      marginBottom: 10,
      alignItems: 'center'
    }
  })