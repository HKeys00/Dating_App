import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SelectInputTheme = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    paddingVertical: 10,
    gap: 5,
  },
  option: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 15,
    paddingHorizontal: wp(3),
  },
  selectedOption: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  optionText: {
    fontFamily: 'Acme',
    fontSize: hp(3.5),
    color: '#000',
  },
});

export default SelectInputTheme;
