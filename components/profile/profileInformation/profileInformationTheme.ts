import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const profileInformationTheme = StyleSheet.create({
  container: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    padding: wp(2),
    gap: hp(1),
  },
  horizontalContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 2,
    width: '60%',
  },
  matchButton: {
    width: '80%',
  },
  matchButtonIcon: {
    resizeMode: 'stretch',
    width: '15%',
    height: '70%',
  },
  largeInfoText: {
    fontSize: wp(8),
  },
  mediumInfoText: {
    fontSize: wp(6),
  },
  smallInfoText: {
    fontSize: wp(3),
  },
  infoText: {
    color: '#000',
    fontFamily: 'Acme',
  },
});

export default profileInformationTheme;
