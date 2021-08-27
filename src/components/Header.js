import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles/Header.style';
export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Cancel</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Choose Music</Text>
      <TouchableOpacity>
        <Text>Done</Text>
      </TouchableOpacity>
    </View>
  );
}
