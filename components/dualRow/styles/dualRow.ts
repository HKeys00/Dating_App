import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const DualRowTheme = StyleSheet.create({
  dualRow: {
    width: wp(100),
    height: hp(10),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default DualRowTheme;
