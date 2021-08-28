import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: '#B2B2B2',
    borderRadius: 10,
    padding: 2,
    marginLeft: 12,
    marginRight: 12,
  },
  image: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 10,
  },
  contentContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 13,
    color: 'gray',
  },
  tagContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    marginLeft: '10%',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    padding: 11,
    marginRight: 12,
  },
});
