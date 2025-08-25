import Page from '@/app/pages/base/page';
import React, { useState, useRef, useEffect } from 'react';
import { View } from 'react-native';
import feedPageTheme from '@/app/tabs/feed/styles/feedPageTheme';
import { StatusBar } from 'expo-status-bar';
import { FlatList } from 'react-native-gesture-handler';
import dummyProfiles from '@/data/profileData.json';
import FeedProfile from '@/app/tabs/feed/feedProfile';
import ProfileType from '@/types/profile/profileType';
import usePageHeight from '@/hooks/usePageHeight';

const FeedPage: React.FC = () => {
  const pageHeight = usePageHeight();

  const [profiles, setProfiles] = useState<ProfileType[]>([]);
  const [previousProfileIndex, setPreviousProfileIndex] = useState<number>(0);

  const [currentProfileIndex, setCurrentProfileIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    setProfiles(dummyProfiles);
    // console.log(profiles.map((profile) => (profile ? profile.name : 'undefined')));
  });

  return (
    <Page>
      <StatusBar backgroundColor="#F1CB98" />
      <View style={feedPageTheme.feedContainer}>
        <FlatList
          ref={flatListRef}
          data={profiles}
          keyExtractor={(item) => item.Id}
          renderItem={({ item, index }) => {
            return (
              <View style={[feedPageTheme.feedProfileContainer, { height: pageHeight }]} key={item.Id}>
                <View style={feedPageTheme.feedProfile}>
                  <FeedProfile profile={item} />
                </View>
              </View>
            );
          }}
          pagingEnabled={true}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </Page>
  );
};
export default FeedPage;
