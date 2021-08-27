import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import {styles} from '../styles/GenreMenu.style';

export default function GenreMenu(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const genres = [
    'All',
    'Acoustic',
    'Ambient',
    'Blues',
    'Children',
    'Cinematic',
    'Classical',
    'Country',
    'Electronic',
    'Folk',
    'Hip-hop',
    'Holiday',
    'Indie',
    'Jazz',
    'Latin',
    'Lounge',
    'Pop',
    'Rock',
    'Soul-rnb',
    'World',
  ];

  const renderItem = ({item, index}) => {
    if (index === selectedIndex) selectedColor = '#383838';
    else selectedColor = '#a0a0a0';

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => setSelectedIndex(index)}>
        <Text style={[styles.text, {color: selectedColor}]}>{item}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={genres}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.topContainer}
      />
    </View>
  );
}

//["acoustic", "ambient", "blues", "children", "cinematic", "classical", "country", "electronic", "folk", "hip-hop", "holiday",
//"indie", "jazz", "latin", "lounge", "pop", "rock", "soul-rnb", "world"]
