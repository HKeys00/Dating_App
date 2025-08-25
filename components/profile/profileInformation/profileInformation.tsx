import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import profileInformationTheme from './profileInformationTheme';
import profileTheme from '@/components/profile/profileTheme';
import heightIcon from '@/assets/profile/height.png';
import locationIcon from '@/assets/profile/location.png';
import matchIcon from '@/assets/profile/match.png';

const ProfileInformation: React.FC = () => {
  return (
    <View style={profileInformationTheme.container}>
      <View style={[profileTheme.infoPill]}>
        <Text style={[profileInformationTheme.largeInfoText, profileInformationTheme.infoText]}>Lucy</Text>
        <Text style={[profileInformationTheme.largeInfoText, profileInformationTheme.infoText]}>25</Text>
      </View>
      <View style={profileInformationTheme.horizontalContainer}>
        <View style={[profileTheme.infoPill]}>
          <Image source={heightIcon} />
          <Text style={[profileInformationTheme.mediumInfoText, profileInformationTheme.infoText]}>5'6"</Text>
        </View>
        <View style={[profileTheme.infoPill]}>
          <Image source={locationIcon} />
          <Text style={[profileInformationTheme.mediumInfoText, profileInformationTheme.infoText]}>Moone Ponds</Text>
        </View>
      </View>
      <View style={profileInformationTheme.horizontalContainer}>
        <View style={[profileTheme.infoPill]}>
          <Text style={[profileInformationTheme.smallInfoText, profileInformationTheme.infoText]}>Hiking</Text>
        </View>
        <View style={[profileTheme.infoPill]}>
          <Text style={[profileInformationTheme.smallInfoText, profileInformationTheme.infoText]}>Reading</Text>
        </View>
        <View style={[profileTheme.infoPill]}>
          <Text style={[profileInformationTheme.smallInfoText, profileInformationTheme.infoText]}>Going Out</Text>
        </View>
      </View>
      <TouchableOpacity style={[profileInformationTheme.matchButton, profileTheme.infoPill]}>
        <Image source={matchIcon} style={profileInformationTheme.matchButtonIcon}></Image>
        <Text style={[profileInformationTheme.mediumInfoText, profileInformationTheme.infoText]}>Match</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileInformation;
