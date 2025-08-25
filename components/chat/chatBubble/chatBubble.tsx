import React from 'react';
import { Text, View } from 'react-native';
import ChatBubbleTheme from './chatBubbleTheme';
/**
 * The chat action button component.
 */
interface ChatBubbleProps {
  message: any;
  sender: boolean;
  index: number;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, sender, index }) => {
  if (index === 0) {
    console.log(message.timestamp);
  }
  return (
    <View style={ChatBubbleTheme.chatLine}>
      <View style={[sender ? ChatBubbleTheme.sendingBubble : ChatBubbleTheme.receivingBubble, ChatBubbleTheme.chatBubble]}>
        <Text style={[sender ? ChatBubbleTheme.sendingBubbleText : ChatBubbleTheme.receivingBubbleText]}>{message.message}</Text>
      </View>
      {index === 0 && (
        <Text style={[sender ? ChatBubbleTheme.timeStampSending : ChatBubbleTheme.timeStampReceiving, ChatBubbleTheme.timestamp]}>{message.timestamp}</Text>
      )}
    </View>
  );
};

export default ChatBubble;
