import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
console.log(width);
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: '#D2D2D2',
    borderRadius: 15,
    padding: width < 400 ?  width * 0.015 / 2 : 2,
    marginLeft: 12,
    marginRight: 12,
  },
  image: {
    flex: 1,
    //padding: '7%',
    padding: width < 400 ? width * 0.064 : 35,
    aspectRatio: 1,
    borderRadius: 15,
  },
  contentContainer: {
    flex: 1,
  },
  textContainer: {
    paddingBottom: '1.5%',
  },
  text: {
    color: '#424242',
    fontSize: 14,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 12,
    color: 'gray',
    fontWeight: '500',
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
    paddingVertical: 11,
    paddingHorizontal: width * 0.037,

    marginRight: width * 0.037,
  },
  buttonText: {
    fontWeight: '600',
    color: '#626262',
  },
});
