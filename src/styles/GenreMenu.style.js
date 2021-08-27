import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: '#f5f5f5'
  },
  container: {
    
    flexDirection: 'row',
  },
  item: {
    paddingHorizontal: 15,
    paddingVertical: 18,
  },
  selectedItem: {
    paddingHorizontal: 15,
    paddingVertical: 18,

    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  listBottom: {
    borderBottomColor: 'purple',
    borderBottomWidth: 10,
  }, 
  text: {
    fontSize: 18,
    color: '#a0a0a0',
  },
  selectedText: {
    fontSize: 18,
    color: '#383838',
  },
});
