import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ProfileEditContainerTheme = StyleSheet.create({
  page: {
    height: '100%',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: hp(3),
    paddingTop: hp(5),
    paddingBottom: 25,
    paddingHorizontal: wp(5),
  },
});

export default ProfileEditContainerTheme;
