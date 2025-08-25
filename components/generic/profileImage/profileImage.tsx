import React, { useState } from 'react';
import { View, Image, LayoutChangeEvent } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import profileImageTheme from './profileImageTheme';

interface ProfileImageProps {
  size: number;
  ringColors: [string, string, ...string[]];
}

const ProfileImage: React.FC<ProfileImageProps> = ({ size, ringColors }) => {
  return (
    <View style={[profileImageTheme.container, { width: size, height: size, borderRadius: size / 2 }]}>
      <LinearGradient colors={ringColors} style={[profileImageTheme.backgroundGradient, { width: size, height: size, borderRadius: size / 2 }]} />
      <View style={[profileImageTheme.imageContainer, { width: size, height: size, borderRadius: size / 2 }]}>
        <Image
          style={[profileImageTheme.image, { width: size - size * 0.1, height: size - size * 0.1, borderRadius: (size - 15) / 2 }]}
          source={require('@/assets/messagesPage/random girl 5.png')}
        />
      </View>
    </View>
  );
};

export default ProfileImage;
