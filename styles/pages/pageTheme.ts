import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const pageTheme = StyleSheet.create({
  page: {
    display: 'flex',
    position: 'absolute',
    height: hp(94.7),
    width: wp(100),
    top: 0,
    left: 0,
    zIndex: 3,
    backgroundColor: '#F4DEC1',
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
  },
  pageHeader: {
    height: hp(18),
    width: wp(100),
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: wp(10),
  },
  headerText: {
    fontSize: wp(10),
    fontWeight: 'bold',
    color: '#000000',
  },
  headerLineBreak: {
    width: wp(70),
    height: 1,
    backgroundColor: '#000000',
    marginTop: hp(2),
  },
  pageBody: {
    height: hp(75),
    width: wp(100),
  },
});

export default pageTheme;
