import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const RangeInputTheme = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputColumn: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Acme',
    fontSize: hp(3.5),
  },
  input: {
    borderWidth: 2,
    width: '80%',
    textAlign: 'center',
  },
});

export default RangeInputTheme;
