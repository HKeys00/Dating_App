import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const PromptContainerTheme = StyleSheet.create({
  container: {
    width: wp(90),
  },
  header: {
    width: '100%',
    padding: 10,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  prompt: {
    fontFamily: 'Acme',
    fontSize: 20,
  },
  body: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
  },
  response: {
    fontFamily: 'Acme',
    fontSize: hp(3),
  },
});

export default PromptContainerTheme;
