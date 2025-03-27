import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const imageWidth = wp(50);
const imageBorderRadius = imageWidth / 2;

const ProfilePreviewTheme = StyleSheet.create({
  container: {
    width: wp(100),
    height: imageWidth,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: hp(4),
  },
  imageContainer: {
    width: imageWidth,
    height: imageWidth,
    borderRadius: imageBorderRadius,
    borderWidth: 9,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: imageBorderRadius,
  },
  intentBackground: {
    width: imageWidth,
    height: imageWidth,
    position: 'absolute',
    borderRadius: imageBorderRadius,
    borderWidth: 5,
  },
  detailsContainer: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    paddingHorizontal: '5%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
  },
  nameContainer: {
    top: '5%',
    left: '15%',
  },
  socialbilityContainer: {
    top: '70%',
    right: '5%',
  },
  confidenceContainer: {
    top: '40%',
    right: '20%',
    flexDirection: 'row',
    gap: 5,
  },
  confidenceIcon: {
    width: wp(8),
    height: wp(8),
  },
  text: {
    fontSize: wp(6),
    fontFamily: 'Acme',
  },
  textLarge: {
    fontSize: wp(10),
    fontFamily: 'Acme',
  },
});

export default ProfilePreviewTheme;
