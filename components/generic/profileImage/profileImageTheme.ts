import { StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const profileImageTheme = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderWidth: 1,
  },
  backgroundGradient: {
    position: 'absolute',
    top: -1,
    left: -1,
    zIndex: 0,
  },
  imageContainer: {
    position: 'absolute',
    zIndex: 1,
    top: -1,
    left: -1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'cover',
    borderColor: 'white',
    borderWidth: 3,
    boxShadow: '0px 5px 5px rgba(64, 64, 64, 0.5)',
  },
});

export default profileImageTheme;
