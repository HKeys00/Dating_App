import React, { useState } from 'react';
import { View, Text, LayoutChangeEvent } from 'react-native';
import messagePreviewTheme from './styles/messagePreviewTheme';
import ProfileImage from '../../generic/profileImage/profileImage';

interface MessagePreviewProps {
  onTouch: () => void;
}

const MessagePreview: React.FC<MessagePreviewProps> = ({ onTouch }) => {
  const [size, setSize] = useState(0);
  const padding = 0.05; // 5% padding

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setSize(height);
  };

  return (
    <View style={{ backgroundColor: 'white', width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }} onTouchEnd={onTouch}>
      <View style={messagePreviewTheme.container} onLayout={onLayout}>
        <View style={messagePreviewTheme.imageSegment}>
          <ProfileImage size={size * (1 - padding)} ringColors={['#CE0104', '#9B0003']} />
        </View>
        <View style={messagePreviewTheme.detailsSegment}>
          <View style={messagePreviewTheme.detailsTopRow}>
            <Text style={[messagePreviewTheme.detailsText, { fontSize: 20 }]} numberOfLines={1}>
              Sophie
            </Text>
            <Text style={[messagePreviewTheme.detailsText, { fontSize: 15 }]}>1 Day Ago</Text>
          </View>
          <View style={messagePreviewTheme.detailsBottomRow}>
            <Text numberOfLines={2} style={[messagePreviewTheme.detailsText, { fontSize: 15 }]}>
              Yeah that would be great how about we meet at 3pm? I can pick you up from your place if you want.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MessagePreview;
