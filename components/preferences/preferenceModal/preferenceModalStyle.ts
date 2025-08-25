import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const preferenceModalStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: wp(100),
    paddingHorizontal: wp(5),
    alignItems: 'center',
  },
  picker: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    gap: hp(1),
    paddingVertical: hp(1),
    borderBottomWidth: 1,
  },
  titleText: {
    marginLeft: wp(2),
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionText: {
    marginLeft: wp(4),
    fontSize: 15,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    maxHeight: hp(80),
    width: wp(90),
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    gap: hp(2),
  },
  modalHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalBody: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default preferenceModalStyle;
