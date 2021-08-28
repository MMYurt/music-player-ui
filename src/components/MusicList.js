import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
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
    <View style={{flex: 1}}>
      {data ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          //contentContainerStyle={{paddingBottom: 300}}  //Last items visibility issue
          //showsHorizontalScrollIndicator={false}
        />
      ) : (
        <View></View>
      )}
    </View>
  );
}
