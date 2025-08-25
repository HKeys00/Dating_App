import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const profileStatsTheme = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  socialbilityStatContainer: {
    position: 'relative',
    display: 'flex',
    top: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#9DB0EC',
    zIndex: 2,
    elevation: 10,
    shadowColor: '#171717',
    shadowOffset: {
      width: -5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    borderWidth: 2,
  },
  compatabilityStatContainer: {
    position: 'relative',
    top: -10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: wp(30),
    backgroundColor: '#F98866',
    borderRadius: hp(15),
    zIndex: 1,
    borderWidth: 2,
    gap: wp(2),
  },
  socialbilityText: {
    color: 'white',
    fontFamily: 'Acme',
  },
  compatibilityText: {
    color: 'white',
    fontFamily: 'Acme',
    fontSize: wp(15),
  },
});

export default profileStatsTheme;
