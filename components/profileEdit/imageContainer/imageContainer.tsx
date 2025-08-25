import React from 'react';
import Container from '../container/container';
import { View, Image, ImageSourcePropType } from 'react-native';
import ImageContainerTheme from './imageContainerTheme';

interface ImageContainerProps {
  image: ImageSourcePropType;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ image }) => {
  return (
    <View style={ImageContainerTheme.container}>
      <Container size={50}>
        <Image source={image} style={ImageContainerTheme.image} />
      </Container>
    </View>
  );
};

export default ImageContainer;
