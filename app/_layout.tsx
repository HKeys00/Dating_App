import React from 'react';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="pages/feed/FeedPage" options={{ title: 'Feed' }} />
      <Tabs.Screen name="pages/matches/MatchesPage" options={{ title: 'Matches' }} />
      <Tabs.Screen name="pages/messages/MessagesPage" options={{ title: 'Messages' }} />
      <Tabs.Screen name="pages/profile/ProfilePage" options={{ title: 'Profile' }} />
      <Tabs.Screen name="pages/settings/SettingsPage" options={{ title: 'Settings' }} />
    </Tabs>
  );
}
