import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { default as Theme } from './styles/closeButton';
import CloseIcon from '@/assets/close.png';

interface CloseButtonProps {
  navigation: any;
}

const CloseButton: React.FC<CloseButtonProps> = ({ navigation }) => {
  return (
    <TouchableOpacity style={Theme.closeButton} onPress={() => navigation.goBack()}>
      <Image style={Theme.image} source={CloseIcon} />
    </TouchableOpacity>
  );
};

export default CloseButton;
