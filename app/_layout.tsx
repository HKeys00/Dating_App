import React from 'react';
import { View } from 'react-native';
import { Tabs } from 'expo-router';
import TabBar from '@/components/tabBar/tabBar';

const TabLayout: React.FC = () => {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen name="index" options={{ title: 'Feed', headerShown: false }} />
      <Tabs.Screen name="tabs/matchesPage" options={{ title: 'Matches', headerShown: false, headerPressColor: 'transparent' }} />
      <Tabs.Screen name="tabs/spotlightPage" options={{ title: 'Spotlight', headerShown: false }} />
      <Tabs.Screen name="tabs/messagesPage" options={{ title: 'Messages', headerShown: false }} />
      <Tabs.Screen name="tabs/profilePage" options={{ title: 'Profile', headerShown: false }} />
    </Tabs>
  );
};

export default TabLayout;
