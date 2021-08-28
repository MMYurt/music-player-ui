import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles/ListItem.style';

export default function ListItem(props) {
  const data = props.data;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: data.thumbUrl}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.contentContainer}>
        <Text numberOfLines={2}  style={styles.text}>{data.name}</Text>
        <Text style={styles.subText}>{data.artistName}</Text>
        <View style={styles.tagContainer}>
          {data.tags.map((item, index) => (
            <Text key={index} style={styles.subText}>
              #{item[0].toUpperCase() + item.slice(1)}{' '}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text>Choose</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
