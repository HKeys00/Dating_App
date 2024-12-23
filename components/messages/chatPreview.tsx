import messagePageTheme from '@/styles/pages/messagePage/messagePageTheme';
import React from 'react';
import { View } from 'react-native';
import PreviewImage from './previewImage';

/**
 * The chat preview component.
 */
interface ChatPreviewProps {
  message: string;
  firstName: string;
  lastName: string;
  previewImage: string;
  timestamp: string;
  read: boolean;
  onPress: () => void;
  zIndex: number;
}

const ChatPreview: React.FC<ChatPreviewProps> = ({ message, firstName, lastName, previewImage, timestamp, read, onPress, zIndex }: ChatPreviewProps) => {
  return (
    <View style={[messagePageTheme.previewContainer, { zIndex: zIndex, elevation: zIndex }]}>
      <View style={messagePageTheme.imageContainer}>
        <PreviewImage image={previewImage} intent={'idk'} />
      </View>
      <View style={messagePageTheme.textContainer}></View>
      <View style={messagePageTheme.timeStampContainer}></View>
    </View>
  );
};

export default ChatPreview;
