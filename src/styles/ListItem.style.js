import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from './colors';
const {height, width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: height < 1000 ? height * 0.025 : height * 0.02,
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: '#D2D2D2',
    borderRadius: 15,
    padding: width < 400 ? (width * 0.015) / 2 : 2,
    height: height < 1000 ? height * 0.07 : height * 0.06,
    marginHorizontal: 12,
  },
  image: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 15,
  },
  playIconContainer: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  textContainer: {
    //paddingBottom: '1.7%',
    paddingBottom: height < 1000 ? height * 0.07 * 0.056 : height * 0.06 * 0.12
  },
  text: {
    color: COLORS.primaryText,
    fontSize: 14,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 12,
    color: COLORS.secondaryText,
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
    backgroundColor: COLORS.background,
    borderRadius: 20,
    paddingVertical: 11,
    paddingHorizontal: width * 0.037,

    marginRight: width * 0.037,
  },
  buttonText: {
    fontWeight: '600',
    color: COLORS.button,
  },
});
