import {StyleSheet, Platform} from 'react-native';

const os = Platform.OS;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5.4%',
    paddingBottom: '6.2%',
    backgroundColor: '#f5f5f5',
    paddingTop: os === 'android' ? '4%' : null
  },
  title: {
    fontWeight: '600',
    fontSize: 17,
  },
});
