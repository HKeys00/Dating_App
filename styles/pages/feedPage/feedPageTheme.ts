import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const feedPageTheme = StyleSheet.create({
  feedContainer: {
    height: hp(95),
    borderWidth: 1,
    borderStartEndRadius: 20,
    borderEndEndRadius: 20,
  },
});

export default feedPageTheme;
