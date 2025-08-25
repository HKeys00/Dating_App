import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const profilePageTheme = StyleSheet.create({
  pageContainer: {
    backgroundColor: 'white',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderBottomLeftRadius: 27,
    borderBottomRightRadius: 27,
    paddingTop: hp(5),
  },
  headerRow: {
    height: '10%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  largeText: {
    fontSize: hp(3),
    fontFamily: 'Acme',
    color: 'black',
  },
  settingsIcon: {
    width: wp(15),
    height: hp(7),
    resizeMode: 'contain',
  },
  profilePictureContainer: {
    width: wp(100),
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    flex: 1,
  },
  underlinedText: {
    textDecorationLine: 'underline',
  },
  tabBar: {
    width: '100%',
    height: '10%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default profilePageTheme;
