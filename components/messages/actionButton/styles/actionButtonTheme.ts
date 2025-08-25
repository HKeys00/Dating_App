import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const actionButtonTheme = StyleSheet.create({
  button: {
    width: wp(20),
    height: hp(12),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: wp(0.5),
    gap: wp(1),
  },
  buttonImage: {
    height: hp(2.5),
    width: wp(5.5),
    objectFit: 'contain',
  },
  buttonText: {
    fontSize: wp(3),
    fontWeight: 'bold',
  },
});

export default actionButtonTheme;
