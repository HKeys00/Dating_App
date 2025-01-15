import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import getActionButtonIcon from '../messages/chatActionButtonIconHelper';
import messagePageTheme from '@/styles/pages/messagePage/messagePageTheme';

/**
 * The chat action button component.
 */
interface ChatActionButtonProps {
  name: string;
  firstButton?: boolean;
  action: () => void;
}

const ChatActionButton: React.FC<ChatActionButtonProps> = ({ name, firstButton, action }) => {
  return (
    <TouchableOpacity style={[messagePageTheme.actionButton, firstButton ? { borderLeftWidth: 0 } : {}]}>
      <Text style={messagePageTheme.actionButtonText}>{name}</Text>
      <Image style={messagePageTheme.actionButtonImage} source={getActionButtonIcon(name)} />
    </TouchableOpacity>
  );
};

export default ChatActionButton;
