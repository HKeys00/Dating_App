import messagePageTheme from '@/styles/pages/messagePage/messagePageTheme';
import React from 'react';
import { Text, View } from 'react-native';
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
  intent: string;
  zIndex: number;
  order: number;
  onPress: () => void;
}

const ChatPreview: React.FC<ChatPreviewProps> = ({
  message,
  firstName,
  lastName,
  previewImage,
  timestamp,
  read,
  intent,
  zIndex,
  order,
  onPress,
}: ChatPreviewProps) => {
  return (
    <View
      style={[
        order == 0 ? messagePageTheme.previewContainerFirst : messagePageTheme.previewContainerOther,
        { zIndex: zIndex, elevation: zIndex },
        messagePageTheme.previewContainer,
      ]}
    >
      <View style={messagePageTheme.imageSegment}>
        <PreviewImage image={previewImage} intent={intent} />
      </View>
      <View style={messagePageTheme.textSegment}>
        <View style={messagePageTheme.nameContainer}>
          <Text style={messagePageTheme.name}>{firstName}</Text>
        </View>
        <View style={messagePageTheme.lastMessageContainer}>
          <Text style={messagePageTheme.lastMessage}>{message}</Text>
        </View>
      </View>
      <View style={messagePageTheme.timeStampSegment}>
        <View style={messagePageTheme.timeStampContainer}>
          <Text style={messagePageTheme.timeStamp}>{timeAgo(timestamp)}</Text>
        </View>
      </View>
    </View>
  );
};

// Converts the timestamp to a human-readable format
const timeAgo = (timestamp: string): string => {
  const now = new Date();
  const past = new Date(timestamp);
  let diffInSeconds = Math.floor((+now - +past) / 1000); // Difference in seconds

  const units = [
    { label: 'second', value: 60 },
    { label: 'minute', value: 60 },
    { label: 'hour', value: 24 },
    { label: 'day', value: 30 },
    { label: 'month', value: 12 },
    { label: 'year', value: Infinity },
  ];

  for (const { label, value } of units) {
    if (diffInSeconds < value) {
      return `${Math.floor(diffInSeconds)} ${label}${Math.floor(diffInSeconds) > 1 ? 's' : ''} ago`;
    }
    diffInSeconds /= value;
  }

  return 'Just now';
};

export default ChatPreview;
