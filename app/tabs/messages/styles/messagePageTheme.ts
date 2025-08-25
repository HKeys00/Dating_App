import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const messagePageTheme = StyleSheet.create({
  scrollContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    flex: 5,
    marginTop: hp(2),
    borderRadius: 27,
    borderWidth: 2,
  },
  scrollableContainer: {
    width: '90%',
    gap: 1,
  },
  hiddenContainer: {
    width: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '30%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    borderBottomWidth: 2,
  },
  hiddenButtonText: {
    fontSize: hp(3),
    fontFamily: 'Acme',
  },
  hiddenButtonImage: {
    objectFit: 'contain',
  },
});

export default messagePageTheme;
