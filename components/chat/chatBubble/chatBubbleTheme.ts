import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ChatBubbleTheme = StyleSheet.create({
  chatLine: {
    padding: 5,
    flexDirection: 'column',
  },
  chatBubble: {
    flexShrink: 1,
    maxWidth: wp(65),
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
  },
  sendingBubble: {
    backgroundColor: '#C50000',
    alignSelf: 'flex-end',
    color: '#FFFFFF',
  },
  receivingBubble: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    alignSelf: 'flex-start',
  },
  sendingBubbleText: {
    color: '#FFFFFF',
  },
  receivingBubbleText: {
    color: '#000000',
  },
  timeStampSending: {
    alignSelf: 'flex-end',
  },
  timeStampReceiving: {
    alignSelf: 'flex-start',
  },
  timestamp: {},
});

export default ChatBubbleTheme;
