import React, {useState, useEffect, Fragment} from 'react';
import {View, SafeAreaView, StatusBar, Text, Platform} from 'react-native';
import Header from './components/Header';
import GenreMenu from './components/GenreMenu';
import MusicList from './components/MusicList';

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const selectedGenreHandler = (val) => setSelectedGenre(val);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/ardalahmet/5eb3126d9a9d9ca1c689f3ee309e2972/raw/bdabb92aa83ed3ea8354a8015660fa444228e12a/musicData.json',
    )
      .then((res) => res.json())
      .then((data) => {
        var temp = [];
        Object.keys(data.data).forEach((el) => temp.push(data.data[el]));
        setData(temp);
      });
  }, []);

  return (
    <Fragment>
      {/* For both Bottom and Top Bar on iOS */}
      <SafeAreaView style={{backgroundColor: '#f5f5f5', flex: 0}} />
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        {Platform.OS == 'android' ? (
          <StatusBar backgroundColor={'#f5f5f5'} barStyle={'dark-content'} />
        ) : (
          <StatusBar hidden={true} />
        )}
        {/* <StatusBar hidden={true}/> */}
        <View style={{backgroundColor: 'white', flex: 1}}>
          <Header />
          <GenreMenu genreHandler={selectedGenreHandler} />
          <MusicList selectedGenre={selectedGenre} data={data} />
        </View>
      </SafeAreaView>
    </Fragment>
  );
}
