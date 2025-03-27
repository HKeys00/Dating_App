import messagePageTheme from '@/app/tabs/messages/styles/page';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import PreviewImage from './previewImage';
import ChatPreviewActionButton from './chatActionButton';

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
    <ReanimatedSwipeable
      friction={2}
      rightThreshold={-60}
      overshootRight={false}
      containerStyle={[
        order == 0 ? messagePageTheme.swipeableContainerFirst : messagePageTheme.swipeableContainerOther,
        { zIndex: zIndex, elevation: zIndex },
        messagePageTheme.swipeableContainer,
      ]}
      renderRightActions={() => renderRightActions(order)}
    >
      <View style={messagePageTheme.previewContainer} onTouchEnd={onPress}>
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
    </ReanimatedSwipeable>
  );
};

const renderRightActions = (order: number) => {
  return (
    <View style={[messagePageTheme.actionContainer, order !== 0 ? { paddingTop: 20 } : {}]}>
      <ChatPreviewActionButton name="Pin" firstButton={true} action={() => {}} />
      <ChatPreviewActionButton name="Report" action={() => {}} />
      <ChatPreviewActionButton name="Unmatch" action={() => {}} />
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
