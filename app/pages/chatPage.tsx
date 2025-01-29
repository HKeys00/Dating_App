import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSearchParams } from 'expo-router/build/hooks';
import { useNavigation } from 'expo-router';
import { useRoute } from '@react-navigation/native';
import Page from './base/page';

export const options = {
  tabBarStyle: { display: 'none' }, // Hide the tab bar for this screen
};

const ChatPage: React.FC = () => {
  const searchParams = useSearchParams();
  const chatId = searchParams.get('chatId');
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onTouchEnd={() => navigation.goBack()}>
      <Text>Chat ID: {chatId}</Text>
    </View>
  );
};

export default ChatPage;
