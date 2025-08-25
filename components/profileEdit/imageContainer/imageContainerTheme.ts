import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const width = wp(85);
const height = wp(70);

const ImageContainerTheme = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  image: {
    width: width,
    height: height,
    borderRadius: 10,
    resizeMode: 'stretch',
    borderWidth: 1,
  },
});

export default ImageContainerTheme;
