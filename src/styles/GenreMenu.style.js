import {StyleSheet} from 'react-native';

import { COLORS } from './colors';

export const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: COLORS.background,
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

    borderBottomColor: COLORS.primaryText,
    borderBottomWidth: 2,
  },

  text: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.menuItem,
  },
  selectedText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.selectedMenuItem,
  },
});
