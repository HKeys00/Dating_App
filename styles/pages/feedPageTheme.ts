import FeedProfile from '@/components/profile';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const feedPageTheme = StyleSheet.create({
  feedContainer: {
    height: hp(94.8),
    width: wp(100),
    borderStartEndRadius: 27,
    borderEndEndRadius: 27,
    overflow: 'hidden',
    borderWidth: 1,
  },
  feedProfileContainer: {
    height: hp(94.8),
    width: wp(100),
  },
});

export default feedPageTheme;
