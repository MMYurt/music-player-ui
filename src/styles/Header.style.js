import {StyleSheet, Platform} from 'react-native';

const os = Platform.OS;

export const styles = StyleSheet.create({
  container: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5.4%',
    alignItems: 'center',
    //paddingBottom: '6.2%',
    backgroundColor: '#f5f5f5',
    //paddingTop: os === 'android' ? '4%' : null,
  },
  title: {
    color: '#424242',
    fontWeight: '700',
    fontSize: 17,
  },
});
