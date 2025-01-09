import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const imageWidth = wp(23);
const imageBorderRadius = imageWidth / 2;

const messagePageTheme = StyleSheet.create({
  scrollContainer: {
    height: hp(61),
  },
  scrollableContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 1,
    width: wp(100),
    paddingTop: hp(8),
  },
  previewContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: wp(95),
    backgroundColor: '#ffffff',
    borderRadius: 15,
    borderColor: '#000000',
    borderWidth: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 6,
    marginTop: -hp(3),
    padding: 0,
  },
  previewContainerFirst: {
    height: hp(14.5),
  },
  previewContainerOther: {
    height: hp(16.5),
    paddingTop: hp(2),
  },
  imageSegment: {
    height: hp(15),
    width: wp(25),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: imageWidth,
    width: imageWidth,
    borderRadius: imageBorderRadius,
    overflow: 'hidden',
    borderWidth: wp(2),
  },
  image: {
    height: '100%',
    width: '100%',
    borderWidth: wp(0.3),
    borderRadius: imageBorderRadius,
  },
  textSegment: {
    height: hp(15),
    width: wp(45),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: wp(2),
    paddingTop: hp(3.5),
  },
  nameContainer: {},
  name: {
    fontSize: wp(5),
    fontWeight: 'bold',
  },
  lastMessageContainer: {
    paddingTop: hp(1),
  },
  lastMessage: {
    height: hp(5),
    fontSize: wp(4),
    color: '#000000',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  timeStampSegment: {
    width: wp(24),
    height: hp(15),
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: hp(2),
  },
  timeStampContainer: {},
  timeStamp: {
    fontSize: wp(3.5),
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default messagePageTheme;
