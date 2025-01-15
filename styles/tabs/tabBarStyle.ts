import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const tabBarStyle = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    backgroundColor: '#F4DEC1',
    bottom: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    height: hp(5),
    width: wp(100),
  },
  tabBarButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(5),
    width: wp(20),
  },
  tabBarButtonIcon: {
    height: hp(5),
    width: wp(20),
    objectFit: 'contain',
  },
});

export default tabBarStyle;
