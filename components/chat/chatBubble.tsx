import MessageType from '@/types/messaging/messageType';
import React from 'react';
import { Text, View } from 'react-native';

/**
 * The chat action button component.
 */
interface ChatBubbleProps {
  message: MessageType;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  return (
    <View>
      <Text>{message.message}</Text>
    </View>
  );
};

export default ChatBubble;
