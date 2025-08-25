import React, { useState } from 'react';
import { View, LayoutChangeEvent, Dimensions, Text } from 'react-native';
import ProfileImage from '@/components/generic/profileImage/profileImage';
import ProfileStats from '@/components/profile/profileStats/profileStats';
import headerTheme from './headerTheme';

/**
 * The chat header component.
 */
interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const [size, setSize] = useState(0);
  const [profileImageSize, setProfileImageSize] = useState(0);

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    const screenHeight = Dimensions.get('window').height;
    setSize(height);
    setProfileImageSize(Math.min(height, 300));
  };

  return (
    <View style={headerTheme.header}>
      <View style={headerTheme.headerContainer} onLayout={onLayout}>
        <View style={headerTheme.profileImageContainer}>
          <View style={[headerTheme.nameContainer]}>
            <Text style={headerTheme.nameText}>Name</Text>
          </View>
          <ProfileImage size={profileImageSize} />
        </View>
        <View style={[headerTheme.profileStatsContainer]}>
          <ProfileStats width={profileImageSize * 0.3} size={size * 0.3} compatabilityRight={20} />
        </View>
      </View>
    </View>
  );
};

export default Header;
