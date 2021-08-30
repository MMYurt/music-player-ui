import {StyleSheet, Dimensions} from 'react-native';
import { COLORS } from './colors';
const {height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5.4%',
    alignItems: 'center',
    paddingBottom: height < 1000 ? 7 : null,
    backgroundColor: COLORS.background,
  },
  title: {
    color: COLORS.primaryText,
    fontWeight: '700',
    fontSize: 18,
  },
  button: {
    fontSize: 15
  }
});
