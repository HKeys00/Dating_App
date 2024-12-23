import messagePageTheme from '@/styles/pages/messagePage/messagePageTheme';
import React from 'react';
import { View } from 'react-native';

/**
 * The chat preview component.
 */
interface PreviewImageProps {
  image: string;
  intent: string;
}

const PreviewImage: React.FC<PreviewImageProps> = ({ image, intent }: PreviewImageProps) => {
  return <View></View>;
};

export default PreviewImage;
