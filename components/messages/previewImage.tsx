import messagePageTheme from '@/styles/pages/messagePage/messagePageTheme';
import React from 'react';
import { View, Image } from 'react-native';

/**
 * The chat preview component.
 */
interface PreviewImageProps {
  image: string;
  intent: string;
}

const PreviewImage: React.FC<PreviewImageProps> = ({ image, intent }: PreviewImageProps) => {
  return (
    <View style={[messagePageTheme.imageContainer, { borderColor: intent === 'casual' ? '#FF0004' : '#2B6EFF' }]}>
      <Image source={{ uri: image }} style={messagePageTheme.image}></Image>
    </View>
  );
};

export default PreviewImage;
