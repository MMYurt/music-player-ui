import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles/Header.style';
export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.button}>Cancel</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Choose Music</Text>
      <TouchableOpacity>
        <Text style={styles.button}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}
