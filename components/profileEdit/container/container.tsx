import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import ContainerTheme from './containerTheme';
import pencil from '../../../assets/profilePage/pencil.png';
interface ContainerProps {
  children: React.ReactNode;
  size: number;
}

const Container: React.FC<ContainerProps> = ({ children, size }) => {
  return (
    <View style={ContainerTheme.container}>
      {children}
      <TouchableOpacity style={[ContainerTheme.editButton, { maxWidth: size, maxHeight: size }]}>
        <Image style={ContainerTheme.editButtonImage} source={pencil} />
      </TouchableOpacity>
    </View>
  );
};

export default Container;
