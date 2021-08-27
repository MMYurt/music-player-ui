import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import {styles} from '../styles/GenreMenu.style';

export default function GenreMenu() {
  return (
    <View>
      <ScrollView horizontal={true} contentContainerStyle={styles.topContainer}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.item}><Text>All</Text></TouchableOpacity>
        <TouchableOpacity style={styles.item}><Text>Acoustic</Text></TouchableOpacity>
        <TouchableOpacity style={styles.item}><Text>Ambient</Text></TouchableOpacity>
        <TouchableOpacity style={styles.item}><Text>Blues</Text></TouchableOpacity>
        <TouchableOpacity style={styles.item}><Text>Children</Text></TouchableOpacity>
        <TouchableOpacity style={styles.item}><Text>Cinematic</Text></TouchableOpacity>
        <TouchableOpacity style={styles.item}><Text>Classical</Text></TouchableOpacity>
        <TouchableOpacity style={styles.item}><Text>Country</Text></TouchableOpacity>
        <TouchableOpacity style={styles.item}><Text>Electronic</Text></TouchableOpacity>
        <TouchableOpacity style={styles.item}><Text>Folk</Text></TouchableOpacity>
        <TouchableOpacity style={styles.item}><Text>Hip-hop</Text></TouchableOpacity>
        <TouchableOpacity style={styles.item}><Text>Holiday</Text></TouchableOpacity>
        <TouchableOpacity style={styles.item}><Text>Indie</Text></TouchableOpacity>
        <TouchableOpacity style={styles.item}><Text>Jazz</Text></TouchableOpacity>
        <TouchableOpacity style={styles.item}><Text>Latin</Text></TouchableOpacity>
        <TouchableOpacity style={styles.item}><Text>Lounge</Text></TouchableOpacity>
        <TouchableOpacity style={styles.item}><Text>Pop</Text></TouchableOpacity>
        <TouchableOpacity style={styles.item}><Text>Rock</Text></TouchableOpacity>
        <TouchableOpacity style={styles.item}><Text>Soul-rnb</Text></TouchableOpacity>
        <TouchableOpacity style={styles.item}><Text>World</Text></TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

//["acoustic", "ambient", "blues", "children", "cinematic", "classical", "country", "electronic", "folk", "hip-hop", "holiday", 
//"indie", "jazz", "latin", "lounge", "pop", "rock", "soul-rnb", "world"]

