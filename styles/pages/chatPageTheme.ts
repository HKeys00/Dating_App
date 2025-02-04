import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const chatPageTheme = StyleSheet.create({
  page: {
    width: wp(100),
    height: hp(100),
    backgroundColor: '#F4DEC1',
  },
});

export default chatPageTheme;
