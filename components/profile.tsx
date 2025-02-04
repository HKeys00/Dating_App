import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import profileTheme from '@/styles/components/profileTheme';
import compatabilityIcon from '../assets/profile/compatability.png';
import heightIcon from '../assets/profile/height.png';
import locationIcon from '../assets/profile/location.png';
import matchIcon from '../assets/profile/match.png';
/**
 * The profile component.
 */
interface ProfileProps {
  profile: profileType;
}

/**
 * Converts centimeters to feet.
 * @param cm The height in centimeters.
 * @returns The height in feet.
 */
function cmToFeet(cm: number): string {
  const feet = Math.floor(cm / 30.48);
  const inches = Math.round((cm % 30.48) / 2.54);

  return `${feet}'${inches}"`;
}

const Profile: React.FC<ProfileProps> = ({ profile }) => {
  return (
    <View style={profileTheme.coverContainer}>
      <Image style={profileTheme.coverImage} source={{ uri: profile.images[0] }} />
      <View style={profileTheme.profileStatsContainer}>
        <View style={profileTheme.socialbilityStat}>
          <Text style={[profileTheme.socialbilityText, profileTheme.blackText, profileTheme.boldText]}>{profile.sociability}</Text>
        </View>
        <View style={profileTheme.compatibilityStat}>
          <Image source={compatabilityIcon} style={profileTheme.compatabilityIcon} />
          <Text style={[profileTheme.compatibilityText, profileTheme.boldText]}>8</Text>
        </View>
      </View>
      <View style={profileTheme.profileInfoContainer}>
        <View style={[profileTheme.nameContainer, profileTheme.infoPill]}>
          <Text style={[profileTheme.largeInfoText, profileTheme.blackText, profileTheme.boldText]}>
            {profile.name} {profile.age}
          </Text>
        </View>
        <View style={profileTheme.infoContainer}>
          <View style={[profileTheme.infoItem, profileTheme.infoPill]}>
            <Image source={heightIcon} />
            <Text style={[profileTheme.largeInfoText, profileTheme.blackText, profileTheme.boldText]}>{cmToFeet(profile.height)}</Text>
          </View>
          <View style={[profileTheme.infoItem, profileTheme.infoPill]}>
            <Image source={locationIcon} />
            <Text style={[profileTheme.largeInfoText, profileTheme.blackText, profileTheme.boldText]}>{profile.location}</Text>
          </View>
        </View>
        <View style={profileTheme.hobbiesContainer}>
          {profile.hobbies.slice(0, 3).map((hobby, index) => (
            <View style={[profileTheme.hobby, profileTheme.infoPill]} key={index}>
              <Text style={[profileTheme.hobbyText, profileTheme.blackText, profileTheme.boldText]}>{hobby}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity style={[profileTheme.matchButton, profileTheme.infoPill]}>
          <Image source={matchIcon} style={profileTheme.matchButtonIcon}></Image>
          <Text style={[profileTheme.matchButtonText, profileTheme.blackText, profileTheme.boldText]}>Match</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
