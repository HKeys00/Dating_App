import Page from '@/app/pages/base/page';
import React from 'react';
import profilePageTheme from './styles/profilePageTheme';
import settingsButton from '@/assets/profilePage/settingsButton.png';
import ProfileImage from '@/components/generic/profileImage/profileImage';
import PagerView from 'react-native-pager-view';
import { View, Text, TouchableOpacity, Image, SafeAreaView, LayoutChangeEvent } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PreferenceContainer from '@/components/preferences/preferenceContainer/preferenceContainer';
import ProfileEditContainer from '@/components/profileEdit/profileEditContainer/profileEditContainer';

const ProfilePage: React.FC = () => {
  const [profileImageSize, setProfileImageSize] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState(0);
  const pagerRef = React.useRef<PagerView>(null);

  const onLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setProfileImageSize(height);
  };

  const onPageSelected = (index: number) => {
    pagerRef.current?.setPage(index);
    setActiveTab(index);
  };

  return (
    <>
      <StatusBar backgroundColor="white" />
      <SafeAreaView style={{ flex: 1 }}>
        <Page>
          <View style={profilePageTheme.pageContainer}>
            <View style={profilePageTheme.headerRow}>
              <Text style={profilePageTheme.largeText}>Profile</Text>
              <TouchableOpacity>
                <Image source={settingsButton} style={profilePageTheme.settingsIcon} />
              </TouchableOpacity>
            </View>
            <View style={profilePageTheme.profilePictureContainer} onLayout={onLayout}>
              <ProfileImage size={profileImageSize} ringColors={['#F1CB98', '#F1CB98']} />
            </View>
            <View style={profilePageTheme.tabContainer}>
              <View style={profilePageTheme.tabBar}>
                <TouchableOpacity onPress={() => onPageSelected(0)}>
                  <Text style={[profilePageTheme.largeText, activeTab === 0 ? profilePageTheme.underlinedText : {}]}>Preferences</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPageSelected(1)}>
                  <Text style={[profilePageTheme.largeText, activeTab === 1 ? profilePageTheme.underlinedText : {}]}>Edit Profile</Text>
                </TouchableOpacity>
              </View>
              <PagerView style={{ flex: 1 }} initialPage={0} onPageSelected={(e) => onPageSelected(e.nativeEvent.position)} ref={pagerRef}>
                <PreferenceContainer key={'1'} />
                <ProfileEditContainer key={'2'} />
              </PagerView>
            </View>
          </View>
        </Page>
      </SafeAreaView>
    </>
  );
};

export default ProfilePage;
