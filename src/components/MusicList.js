import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import ListItem from './ListItem';

export default function MusicList(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (props.data && props.selectedGenre.toUpperCase() !== 'ALL') {    
      setData(
        props.data.filter((data) => data.tags.includes(props.selectedGenre.toLowerCase())),
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
    <View>
      {data ? (
        <View>
          {/* <Text>{JSON.stringify(props.data)}</Text> */}
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            
            //showsHorizontalScrollIndicator={false}
          />
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
}
