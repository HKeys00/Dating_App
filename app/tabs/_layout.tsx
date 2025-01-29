import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
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
      <Tabs.Screen name="index" options={{ title: 'Feed' }} key={0} />
      <Tabs.Screen name="matchesPage" options={{ title: 'Matches' }} key={1} />
      <Tabs.Screen name="spotlightPage" options={{ title: 'Spotlight' }} key={2} />
      <Tabs.Screen name="messagesPage" options={{ title: 'Messages' }} key={3} />
      <Tabs.Screen name="profilePage" options={{ title: 'Profile' }} key={4} />
    </Tabs>
  );
};

export default TabLayout;
