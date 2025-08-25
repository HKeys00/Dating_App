import React, { useState } from 'react';
import { View, LayoutChangeEvent } from 'react-native';
import profileTheme from '@/components/profile/profileTheme';
import profileType from '@/types/profile/profileType';
import ProfileCover from '@/components/profile/profileCover/profileCover';
import ProfileStats from '@/components/profile/profileStats/profileStats';
import ProfileInformation from '@/components/profile/profileInformation/profileInformation';
import usePageHeight from '@/hooks/usePageHeight';
/**
 * The profile component.
 */
interface ProfileProps {
  profile: profileType;
}

const FeedProfile: React.FC<ProfileProps> = ({ profile }) => {
  const size = usePageHeight();

  return (
    <View style={profileTheme.coverContainer}>
      <ProfileCover image={profile.images[0]} />
      <View style={profileTheme.contentContainer}>
        <ProfileStats width={'40%'} size={size / 6} />
        <ProfileInformation />
      </View>
    </View>
  );
};

export default FeedProfile;
