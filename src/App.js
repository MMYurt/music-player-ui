import React, {useState} from 'react';
import {View, SafeAreaView, StatusBar, Text} from 'react-native';
import Header from './components/Header';
import GenreMenu from './components/GenreMenu';
export default function App() {
  const [selectedGenre, setSelectedGenre] = useState('all');
  const selectedGenreHandler = (val) => setSelectedGenre(val);

  return (
    <SafeAreaView style={{backgroundColor: '#f5f5f5', flex: 1}}>
      <StatusBar hidden={true} />
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Header />
        <GenreMenu genreHandler={selectedGenreHandler} />
        <Text>{selectedGenre}</Text>
      </View>
    </SafeAreaView>
  );
}
