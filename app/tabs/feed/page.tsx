import Page from '@/app/pages/base/page';
import React, { useState, useRef, useEffect } from 'react';
import { View } from 'react-native';
import feedPageTheme from '@/app/tabs/feed/styles/page';
import { StatusBar } from 'expo-status-bar';
import { FlatList } from 'react-native-gesture-handler';
import dummyProfiles from '../../../data/profileData.json';
import Profile from '@/app/tabs/feed/components/profile';
import ProfileType from '@/types/profile/profileType';

const FeedPage: React.FC = () => {
  const [profiles, setProfiles] = useState<ProfileType[]>([]);
  const [previousProfileIndex, setPreviousProfileIndex] = useState<number>(0);

  const [currentProfileIndex, setCurrentProfileIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null);

  /**
   * Updates the current profile index based on the profile current in view.
   * @param viewableItems The current item in view.
   */
  const onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentProfileIndex(viewableItems[0].index ?? 0);

      return;
    }
  };

  /**
   * Handles the scroll event for the flat list.
   * @param event The scroll event object.
   */
  const onScroll = (event: any) => {
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    if (contentOffsetY < previousProfileIndex) {
      flatListRef.current?.scrollToOffset({
        offset: previousProfileIndex,
        animated: true,
      });
      return;
    }

    setPreviousProfileIndex(contentOffsetY);
  };

  useEffect(() => {
    setProfiles(dummyProfiles);
  });

  const viewabilityConfig = { viewAreaCoveragePercentThreshold: 10 };
  const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig, onViewableItemsChanged }]);
  return (
    <>
      <StatusBar backgroundColor="#F4DEC1" />
      <Page>
        <View style={feedPageTheme.feedContainer}>
          <FlatList
            ref={flatListRef}
            data={profiles}
            keyExtractor={(item) => item.Id}
            renderItem={({ item, index }) => {
              return (
                <View style={feedPageTheme.feedProfileContainer} key={item.Id}>
                  <Profile profile={item} />
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
    </>
  );
};

// viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
export default FeedPage;
