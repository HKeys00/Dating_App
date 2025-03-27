import messagePageTheme from '@/app/tabs/messages/styles/page';
import React from 'react';
import { View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
      {/* <LinearGradient colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.5)']} /> */}
      {/* <Image source={{ uri: image }} style={messagePageTheme.image}></Image> */}
    </View>
  );
};

export default PreviewImage;
