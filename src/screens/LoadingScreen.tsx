import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

export const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navigation} />
  
      <View style={styles.body}>
        <Image source={require('../images/delivery_icon.png')} style={styles.deliveryIcon} />
        <View style={styles.addressContainer}>
          <Text>Your Delivery Address</Text>
        </View>

        <Text>Waiting for Current Location</Text>
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