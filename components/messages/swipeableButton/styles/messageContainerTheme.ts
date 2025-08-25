import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const messageContainerTheme = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    borderRadius: 15,
    borderColor: '#000000',
    backgroundColor: '#FF9393',
    borderWidth: 2,
    padding: 0,
  },
  actionButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: wp(60),
    backgroundColor: '#FF9393',
    marginLeft: wp(-0),
  },
});

export default messageContainerTheme;
