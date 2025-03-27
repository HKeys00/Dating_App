import React from 'react';
import ProfilePreviewTheme from '@/app/pages/chat/styles/profilePreview';
import { View, Image, Text } from 'react-native';
import IconCompatibility from '@/assets/profile/compatability.png';
interface ProfilePreviewProps {
  profilePicture: string;
  name: string;
  age: number;
  socialbility: string;
  compatibility: number;
  intent: string;
}

const ProfilePreview: React.FC<ProfilePreviewProps> = ({ profilePicture, name, age, socialbility, compatibility, intent }) => {
  return (
    <View style={ProfilePreviewTheme.container}>
      <View style={[ProfilePreviewTheme.imageContainer, { borderColor: intent === 'casual' ? '#FF0004' : '#2B6EFF' }]}>
        <Image style={ProfilePreviewTheme.image} source={{ uri: profilePicture }} />
      </View>
      <View style={[ProfilePreviewTheme.detailsContainer, ProfilePreviewTheme.nameContainer]}>
        <Text style={ProfilePreviewTheme.text}>
          {name} {age}
        </Text>
      </View>
      <View style={[ProfilePreviewTheme.detailsContainer, ProfilePreviewTheme.socialbilityContainer]}>
        <Text style={ProfilePreviewTheme.text}>{socialbility}</Text>
      </View>
      <View style={[ProfilePreviewTheme.detailsContainer, ProfilePreviewTheme.confidenceContainer]}>
        <Image style={ProfilePreviewTheme.confidenceIcon} source={IconCompatibility} />
        <Text style={ProfilePreviewTheme.textLarge}>{compatibility}</Text>
      </View>
    </View>
  );
};

export default ProfilePreview;
