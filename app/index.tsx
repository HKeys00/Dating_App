import Page from '@/pages/page';
import React from 'react';
import { View } from 'react-native';
import feedPageTheme from '@/styles/pages/feedPage/feedPageTheme';
import { StatusBar } from 'expo-status-bar';
const FeedPage: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#F4DEC1" />
      <Page>
        <View style={feedPageTheme.feedContainer}></View>
      </Page>
    </>
  );
};

export default FeedPage;
