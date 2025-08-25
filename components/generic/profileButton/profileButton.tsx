import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import profileButtonTheme from './styles/profileButton';
import UserProfileIcon from '@/assets/user-profile.png';

interface ProfileButtonProps {
  size: number;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ size }) => {
  return (
    <TouchableOpacity style={[profileButtonTheme.button, { height: size * 0.3, width: size * 0.3 }]} onPress={() => {}}>
      <Image source={UserProfileIcon} style={profileButtonTheme.image} />
    </TouchableOpacity>
  );
};

export default ProfileButton;
