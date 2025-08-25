import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import actionButtonTheme from './styles/actionButtonTheme';
import getActionButtonIcon from './actionButtonIconHelper';

interface ActionButtonProps {
  firstButton?: boolean;
  name: string;
  action: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ firstButton, name, action }) => {
  return (
    <TouchableOpacity style={[actionButtonTheme.button, firstButton ? { borderLeftWidth: 0 } : {}]}>
      <Text style={actionButtonTheme.buttonText}>{name}</Text>
      <Image style={actionButtonTheme.buttonImage} source={getActionButtonIcon(name)} />
    </TouchableOpacity>
  );
};

export default ActionButton;
