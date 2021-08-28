import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

export default function ListItem(props) {
  const data = props.data;
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20,
        alignItems: 'stretch',
      }}>
      <View>
        <Image
          source={{uri: data.thumbUrl}}
          style={{width: 25, height: 25}}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text>{data.name}</Text>
        <Text>{data.artistName}</Text>
        <View style={{flexDirection: 'row'}}>
          {data.tags.map((item, index) => (
            <Text key={index}>#{item} </Text>
          ))}
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <Text>Choose</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
