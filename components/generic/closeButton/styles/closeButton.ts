import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const closeButtonTheme = StyleSheet.create({
  closeButton: {
    backgroundColor: '#ffffff',
    width: wp(13),
    height: hp(6),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(13),
    borderWidth: 2,
  },
  image: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
});

export default closeButtonTheme;
