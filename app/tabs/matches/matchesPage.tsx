import React, { useState, useEffect } from 'react';
import PageBody from '@/app/pages/base/components/pageBody';
import PageHeader from '@/app/pages/base/components/pageHeader';
import Page from '@/app/pages/base/page';
import dummyProfiles from '@/data/profileData.json';
import { Text, View, Button } from 'react-native';
import MatchesPageTheme from './matchesPageTheme';
import Swiper from 'react-native-deck-swiper';
import ProfileType from '@/types/profile/profileType';
import FeedProfile from '../feed/feedProfile';

const MatchesPage: React.FC = () => {
  const [tempPro, setTempPro] = useState<string[]>([]);
  const [profiles, setProfiles] = useState<ProfileType[]>([]);

  useEffect(() => {
    setProfiles(dummyProfiles);
    setTempPro(profiles.map((profile) => (profile ? profile.name : 'undefined')));
  }, []);

  if (profiles.length === 0) {
    return <></>;
  }

  return (
    <Page>
      <PageHeader title="Matches">
        <></>
      </PageHeader>
      <PageBody>
        <View style={MatchesPageTheme.contentContainer}>
          <View style={MatchesPageTheme.swipeContainer}>
            <Swiper
              cards={profiles}
              renderCard={(card) => {
                return <FeedProfile profile={card} />;
              }}
              cardIndex={0}
              backgroundColor={'transparent'}
              stackSize={4}
              cardHorizontalMargin={0}
              cardVerticalMargin={0}
              cardStyle={MatchesPageTheme.card}
              stackSeparation={0}
            ></Swiper>
          </View>
        </View>
      </PageBody>
    </Page>
  );
};

export default MatchesPage;
