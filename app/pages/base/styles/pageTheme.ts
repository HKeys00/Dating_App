import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const pageTheme = StyleSheet.create({
  solidBackground: {
    backgroundColor: '#F4DEC1',
    zIndex: 0,
    position: 'relative',
    width: wp(100),
    height: hp(100),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  triangle: {
    position: 'relative',
    zIndex: 1,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: wp(100),
    borderTopWidth: hp(100),
    borderLeftColor: 'transparent',
    borderTopColor: '#F1CB98',
  },
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
    overflow: 'hidden',
  },
  pageHeader: {
    height: '15%',
    maxHeight: 100,
    width: wp(100),
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: wp(10),
  },
  headerText: {
    fontSize: wp(10),
    color: '#000000',
    fontFamily: 'Acme',
  },
  headerLineBreak: {
    width: wp(70),
    height: 1,
    backgroundColor: '#000000',
    marginTop: hp(2),
  },
  pageBody: {
    height: '85%',
    width: wp(100),
  },
  pageFooter: {
    height: '15%',
    width: wp(100),
  },
});

export default pageTheme;
