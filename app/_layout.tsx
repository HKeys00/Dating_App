import React from 'react';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const RootLayout: React.FC = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        {/* This will render your Tab Navigator as a screen in the Stack */}
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="tabs" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
