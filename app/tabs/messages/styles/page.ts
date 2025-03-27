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
  buttonContainer: {
    height: hp(10),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hiddenContainer: {
    width: wp(35),
    gap: wp(3),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000000',
    borderBottomWidth: 2,
    paddingHorizontal: wp(3),
  },
  hiddenButtonText: {
    fontFamily: 'Acme',
    fontSize: wp(6),
  },
  hiddenButtonImage: {
    height: hp(4),
    width: wp(9),
  },
  swipeableContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: wp(95),
    borderRadius: 15,
    borderColor: '#000000',
    borderWidth: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 6,
    backgroundColor: '#FF9393',
    marginTop: -hp(3),
    padding: 0,
  },
  swipeableContainerFirst: {
    height: hp(14.5),
  },
  swipeableContainerOther: {
    height: hp(16.5),
    paddingTop: hp(2),
  },
  previewContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
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
    borderWidth: wp(1.3),
  },
  image: {
    height: '100%',
    width: '100%',
    borderWidth: wp(1),
    borderColor: '#FFFFFF',
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
    fontSize: wp(6),
    fontFamily: 'Acme',
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
    fontFamily: 'Acme',
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
  actionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: wp(60),
    backgroundColor: '#FF9393',
    marginLeft: wp(-0),
  },
  actionButton: {
    width: wp(20),
    height: hp(12),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: wp(0.5),
    gap: wp(1),
  },
  actionButtonImage: {
    height: hp(2.5),
    width: wp(5.5),
  },
  actionButtonText: {
    fontSize: wp(3),
    fontWeight: 'bold',
  },
});

export default messagePageTheme;
