import React from 'react';
import { Tabs } from 'expo-router';
import { useFonts } from 'expo-font';
import TabBar from '@/components/tabBar/tabBar';

const TabLayout: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Acme: require('../../assets/fonts/Acme-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tabs tabBar={(props) => <TabBar {...props} />} screenOptions={() => ({ headerShown: false })}>
      <Tabs.Screen name="feed/page" options={{ title: 'Feed' }} key={0} />
      <Tabs.Screen name="matches/page" options={{ title: 'Matches' }} key={1} />
      <Tabs.Screen name="spotlight/page" options={{ title: 'Spotlight' }} key={2} />
      <Tabs.Screen name="messages/page" options={{ title: 'Messages' }} key={3} />
      <Tabs.Screen name="profile/page" options={{ title: 'Profile' }} key={4} />
    </Tabs>
  );
};

export default TabLayout;
