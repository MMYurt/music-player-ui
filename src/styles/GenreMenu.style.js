import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: '#f5f5f5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  container: {
    flexDirection: 'row',
  },
  item: {
    paddingHorizontal: 12,
    paddingVertical: 18,
  },
  selectedItem: {
    paddingHorizontal: 12,
    paddingVertical: 18,

    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  listBottom: {
    borderBottomColor: 'purple',
    borderBottomWidth: 10,
  },
  text: {
    fontSize: 17,
    fontWeight: '500',
    color: '#a0a0a0',
  },
  selectedText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#383838',
  },
});
