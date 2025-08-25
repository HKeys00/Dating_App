import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const profileTheme = StyleSheet.create({
  coverContainer: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  infoPill: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp(5),
    gap: wp(2),
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#F4DEC1',
    borderRadius: 30,
  },
});

export default profileTheme;
