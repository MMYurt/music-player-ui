import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import Header from './components/Header';
import GenreMenu from './components/GenreMenu';
export default function App() {
  return (
    <SafeAreaView style={{backgroundColor: '#f5f5f5'}}>
      <StatusBar hidden={true} />
      <View style={{backgroundColor: 'white'}}>
        <Header />
        <GenreMenu />
      </View>
    </SafeAreaView>
  );
}
