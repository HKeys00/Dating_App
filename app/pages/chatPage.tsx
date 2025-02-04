import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useSearchParams } from 'expo-router/build/hooks';
import { useNavigation } from 'expo-router';
import chatPageTheme from '../../styles/pages/chatPageTheme';
import dummyChats from '../../data/chatData.json';
import ChatBubble from '@/components/chat/chatBubble';
import MessageType from '@/types/messaging/messageType';

export const options = {
  tabBarStyle: { display: 'none' }, // Hide the tab bar for this screen
};

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState(false); // To manage loading state

  const searchParams = useSearchParams();
  const chatId = searchParams.get('chatId');
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });

    if (!chatId) return;
    setMessages(dummyChats.messages);
  }, [navigation]);

  const loadMoreMessages = async () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      const newMessages = [
        { id: 9, senderId: 1, message: 'Older message 1', timestamp: '2025-01-28T08:30:00Z' },
        { id: 10, senderId: 2, message: 'Older message 2', timestamp: '2025-01-28T08:31:00Z' },
      ];

      setMessages((prevMessages) => [...newMessages, ...prevMessages]);
      setLoading(false);
    }, 1500);
  };

  return (
    <View style={chatPageTheme.page}>
      <FlatList
        data={messages}
        inverted // Makes the list scroll from bottom to top
        renderItem={({ item, index }) => <ChatBubble message={item} key={item.id} />}
        keyExtractor={(item) => item.id.toString()}
        onStartReached={loadMoreMessages} // Load more messages when scrolled to the top
        onStartReachedThreshold={0.1} // Trigger when 10% of the list is scrolled to the top
        ListFooterComponent={loading ? <ActivityIndicator size="large" color="blue" /> : null} // Show loading spinner
      />
    </View>
  );
};

export default ChatPage;
