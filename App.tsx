import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { LoadingScreen } from './src/screens/LoadingScreen';
import { HomeScreen } from './src/screens/HomeScreen';

export default function App() {
  return (
    <LoadingScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
