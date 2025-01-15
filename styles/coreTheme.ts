import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const coreTheme = StyleSheet.create({
  solidBackground: {
    backgroundColor: '#F4DEC1',
    height: hp(100),
    width: wp(100),
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
  },
  blackShadow: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    height: hp(95),
    width: wp(100),
    backgroundColor: '#000000',
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
});

export default coreTheme;
