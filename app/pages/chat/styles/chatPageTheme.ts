import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const chatPageTheme = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '10%',
    minHeight: 100,
    paddingVertical: 10,
  },
  flatListHeader: {
    height: hp(40),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp(3),
    backgroundColor: '#F4DEC1',
  },
  flatList: {
    backgroundColor: '#F4DEC1',
    width: wp(100),
    flexGrow: 1,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: hp(10),
    minHeight: 60,
    maxHeight: 70,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  inputContainer: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4DEC1',
  },
  textInput: {
    flex: 1,
    height: '80%',
    fontSize: hp(2),
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  extraButton: {
    backgroundColor: '#FFF',
    width: '15%',
    height: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: wp(2),
    borderWidth: 2,
  },
  tab: {
    display: 'flex',
    alignItems: 'center',
    width: wp(30),
  },
  tabUnselected: {
    opacity: 0.3,
  },
  tabText: {
    textAlign: 'center',
    fontSize: wp(5),
    fontFamily: 'Acme',
  },
});

export default chatPageTheme;
