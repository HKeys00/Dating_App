import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const chatPageTheme = StyleSheet.create({
  header: {
    height: hp(20),
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F4DEC1',
  },
  textInput: {
    flex: 1,
    height: hp(5),
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  extraButton: {
    backgroundColor: '#FFF',
    width: wp(12),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(5),
    borderRadius: 20,
    marginLeft: wp(2),
    borderWidth: 2,
  },
  tab: {
    display: 'flex',
    alignItems: 'center',
    width: wp(30),
    borderBottomWidth: 2,
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
