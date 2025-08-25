import React from 'react';
import { Tabs } from 'expo-router';
import { View } from 'react-native';
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
    <View style={{ flex: 1 }}>
      <Tabs tabBar={(props) => <TabBar {...props} />} screenOptions={() => ({ headerShown: false })}>
        <Tabs.Screen name="feed/feedPage" options={{ title: 'Feed' }} key={0} />
        <Tabs.Screen name="matches/matchesPage" options={{ title: 'Matches' }} key={1} />
        <Tabs.Screen name="spotlight/spotlightPage" options={{ title: 'Spotlight' }} key={2} />
        <Tabs.Screen name="messages/messagesPage" options={{ title: 'Messages' }} key={3} />
        <Tabs.Screen name="profile/profilePage" options={{ title: 'Profile' }} key={4} />
      </Tabs>
    </View>
  );
};

export default TabLayout;
