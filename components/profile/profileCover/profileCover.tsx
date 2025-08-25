import React from 'react';
import { Image } from 'react-native';
import profileCoverTheme from './profileCoverTheme';
/**
 * The profile cover component.
 */
interface ProfileCoverProps {
  image: string;
}

const ProfileCover: React.FC<ProfileCoverProps> = ({ image }) => {
  return <Image style={profileCoverTheme.image} source={{ uri: image }} />;
};

export default ProfileCover;
