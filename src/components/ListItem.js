import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles/ListItem.style';

export default function ListItem(props) {
  const data = props.data;

  const returnTags = () => {
    var temp = [];
    temp = data.tags.map((el, i) => {
      el = '#' + el[0].toUpperCase() + el.slice(1);
      return el;
    });
    return (
      <View style={styles.tagContainer}>
        <Text style={styles.subText} numberOfLines={2}>
          {temp.join(' ')}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: data.thumbUrl}}
          style={styles.image}
          resizeMode="cover"
        />

        <TouchableOpacity style={styles.playIconContainer}>
          <Image source={require('../assets/play.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text numberOfLines={2} style={styles.text}>
            {data.name}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.subText}>{data.artistName}</Text>
        </View>
        {returnTags()}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Choose</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
