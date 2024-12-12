import React from 'react';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="tabs/matchesPage" options={{ title: 'Matches' }} />
      <Tabs.Screen name="tabs/messagesPage" options={{ title: 'Messages' }} />
      <Tabs.Screen name="index" options={{ title: 'Feed' }} />
      <Tabs.Screen name="tabs/profilePage" options={{ title: 'Profile' }} />
    </Tabs>
  );
}
