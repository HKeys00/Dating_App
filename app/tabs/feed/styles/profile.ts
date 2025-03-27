import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const profileTheme = StyleSheet.create({
  infoPill: {
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#F4DEC1',
    borderRadius: 30,
  },
  blackText: {
    color: '#000',
  },
  boldText: {
    fontFamily: 'Acme',
  },
  largeInfoText: {
    fontSize: 30,
    color: '#000',
  },
  coverContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 1,
  },
  coverImage: {
    flex: 1,
    zIndex: 1,
  },
  profileStatsContainer: {
    zIndex: 2,
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'flex-end',
    top: hp(17),
    left: wp(55),
    width: wp(40),
  },
  socialbilityStat: {
    zIndex: 3,
    width: wp(38),
    right: wp(3),
    top: hp(0),
    backgroundColor: '#F4DEC1',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',

    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    borderColor: '#000',
    borderWidth: 2,
  },
  socialbilityText: {
    textAlign: 'left',
    fontSize: 20,
  },
  compatibilityStat: {
    width: wp(25),
    height: wp(25),
    marginTop: hp(1),
    backgroundColor: '#F98866',
    borderRadius: wp(25) / 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(2),
    borderWidth: 2,
    borderColor: '#000',
  },
  compatabilityIcon: {
    width: wp(11),
    height: wp(11),
  },
  compatibilityText: {
    color: '#fff',
    fontSize: 45,
  },
  profileInfoContainer: {
    zIndex: 2,
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'flex-start',
    top: hp(69),
    left: wp(2),
    width: wp(95),
    height: hp(22),
    gap: hp(0.3),
  },
  nameContainer: {
    flex: 0,
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: wp(2),
  },
  infoItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(3),
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.5),
  },
  hobbiesContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: wp(2),
  },
  hobby: {
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.5),
  },
  hobbyText: {
    fontSize: 13,
  },
  matchButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(75),
    height: hp(5),
    gap: wp(2),
  },
  matchButtonIcon: {},
  matchButtonText: {
    fontSize: 20,
  },
});

export default profileTheme;
