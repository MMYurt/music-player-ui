import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import { styles } from '../styles/MusicList.style';
import ListItem from './ListItem';

export default function MusicList(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (props.data && props.selectedGenre.toLowerCase() !== 'all') {
      setData(
        props.data.filter((data) =>
          data.tags.includes(props.selectedGenre.toLowerCase()),
        ),
      );
    } else if (props.data) {
      setData(props.data);
    }
  }, [props.data, props.selectedGenre]);

  const renderItem = ({item}) => {
    return (
      <View>
        <ListItem data={item} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {data ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{paddingBottom: 20}} //Last items visibility issue
        />
      ) : (
        <View></View>
      )}
    </View>
  );
}
