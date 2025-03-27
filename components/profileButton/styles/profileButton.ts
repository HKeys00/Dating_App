import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const profileButtonTheme = StyleSheet.create({
  button: {
    width: wp(15),
    height: hp(7),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(15),
    borderWidth: 1,
    backgroundColor: '#ffffff',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default profileButtonTheme;
