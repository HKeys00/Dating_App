import React from 'react';
import { View, Image, Text, DimensionValue } from 'react-native';
import profileStatsTheme from './profileStatsTheme';
import socialbilityIcon from '@/assets/profile/socialbility.png';
import compatabilityIcon from '@/assets/profile/compatability.png';

interface ProfileStatsProps {
  size: number;
  width: DimensionValue;
  compatabilityRight?: number;
}

const ProfileStats: React.FC<ProfileStatsProps> = ({ width, size, compatabilityRight }) => {
  const clampedSize = Math.min(100, size);
  const compatabilitySize = clampedSize * 1.2;

  const fontClampedSize = Math.max(Math.min(clampedSize * 0.5, 100), 0.1);
  const imageClampedSize = Math.min(clampedSize * 0.5, 50);

  return (
    <View style={[profileStatsTheme.container, { width: width }]}>
      <View style={[profileStatsTheme.socialbilityStatContainer, { width: clampedSize, height: clampedSize, borderRadius: clampedSize / 2 }]}>
        <Image source={socialbilityIcon} style={{ width: imageClampedSize, height: imageClampedSize, objectFit: 'contain' }}></Image>
        <Text style={[profileStatsTheme.socialbilityText, { fontSize: fontClampedSize }]}>6</Text>
      </View>
      <View
        style={[
          profileStatsTheme.compatabilityStatContainer,
          { width: compatabilitySize, height: compatabilitySize, borderRadius: compatabilitySize / 2, right: compatabilityRight ?? 0 },
        ]}
      >
        <Image source={compatabilityIcon} style={{ width: imageClampedSize * 1.3, height: imageClampedSize * 1.3, objectFit: 'contain' }}></Image>
        <Text style={[profileStatsTheme.compatibilityText, { fontSize: fontClampedSize * 1.1 }]}>6</Text>
      </View>
    </View>
  );
};

export default ProfileStats;
