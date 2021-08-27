import React, {useState} from 'react';
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
  const [selectedGenre, setSelectedGenre] = useState('all');
  const selectedGenreHandler = (val) => setSelectedGenre(val);

  return (
    <SafeAreaView style={{backgroundColor: '#f5f5f5'}}>
      <StatusBar hidden={true} />
      <View style={{backgroundColor: 'white'}}>
        <Header />
        <GenreMenu genre={selectedGenre} genreHandler={selectedGenreHandler} />
      </View>
    </SafeAreaView>
  );
}
