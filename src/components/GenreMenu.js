import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {styles} from '../styles/GenreMenu.style';
import {COLORS} from '../styles/colors';

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
    if (index === selectedIndex) selectedColor = COLORS.selectedMenuItem;
    else selectedColor = COLORS.menuItem;

    return (
      <TouchableOpacity
        style={index == selectedIndex ? styles.selectedItem : styles.item}
        onPress={() => {
          setSelectedIndex(index);
          props.genreHandler(genres[index]);
        }}>
        <Text
          style={index == selectedIndex ? styles.selectedText : styles.text}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.topContainer}>
      <FlatList
        data={genres}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
