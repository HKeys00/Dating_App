import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { default as Theme } from './styles/profileButton';
import UserProfileIcon from '@/assets/user-profile.png';

const ProfileButton: React.FC = () => {
  return (
    <TouchableOpacity style={Theme.button} onPress={() => {}}>
      <Image source={UserProfileIcon} style={Theme.image} />
    </TouchableOpacity>
  );
};

export default ProfileButton;
