import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    <SafeAreaView style={{backgroundColor: '#f5f5f5'}}>
      <StatusBar hidden={true} />
      <Header />
    </SafeAreaView>
  );
}
