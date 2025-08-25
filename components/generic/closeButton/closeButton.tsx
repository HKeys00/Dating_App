import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import closeButtonTheme from './styles/closeButton';
import CloseIcon from '@/assets/close.png';

interface CloseButtonProps {
  onPress: () => void;
  size: number;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onPress, size }) => {
  return (
    <TouchableOpacity style={[closeButtonTheme.closeButton, { height: size * 0.3, width: size * 0.3 }]} onPress={onPress}>
      <Image style={closeButtonTheme.image} source={CloseIcon} />
    </TouchableOpacity>
  );
};

export default CloseButton;
