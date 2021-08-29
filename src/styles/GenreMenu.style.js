import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: '#f5f5f5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.23,
    shadowRadius: 4.65,

    elevation: 8,
    marginBottom: '1%',
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

    borderBottomColor: '#424242',
    borderBottomWidth: 2,
  },
  listBottom: {
    borderBottomColor: 'purple',
    borderBottomWidth: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#a0a0a0',
  },
  selectedText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#383838',
  },
});
