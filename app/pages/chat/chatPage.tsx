import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform, TextInput, LayoutChangeEvent, Text } from 'react-native';
import { useSearchParams } from 'expo-router/build/hooks';
import { useNavigation } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import chatPageTheme from './styles/chatPageTheme';
import dummyProfiles from '@/data/profileData.json';
import ChatBubble from '@/components/chat/chatBubble/chatBubble';
import MessageType from '@/types/messaging/messageType';
import IconIceBreaker from '@/assets/chatPage/ice-breaker.png';
import IconWorld from '@/assets/chatPage/world.png';
import ProfileType from '@/types/profile/profileType';
import Header from '@/components/chat/header/header';
import CloseButton from '@/components/generic/closeButton/closeButton';
import ProfileButton from '@/components/generic/profileButton/profileButton';
import DualRow from '@/components/generic/dualRow/dualRow';

export const testMessages = [
  'Hey, where were you yesterday? I was trying to call you',
  'Yeah dude!! Had a really bad night. I was really hungover',
  'lol, thats so typical you. Who did you go out with?',
  'Dont even ask me about it, I am never going drink with Uthred again. That dude is a beast',
  'hahahaha, I can totally imagine!!',
  'Ciao :)',
];

const ChatPage: React.FC = () => {
  const [profile, setProfile] = useState<ProfileType>(dummyProfiles[0]);
  const [size, setSize] = useState(0);

  const [messages, setMessages] = useState<MessageType[]>([]);
  const [message, setMessage] = useState('');

  const searchParams = useSearchParams();
  const chatId = searchParams.get('chatId');
  const navigation = useNavigation();

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setSize(height);
  };

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const generateUniqueKey = () => `_${Math.random().toString(36).substr(2, 9)}`;
  const queryMoreMessages: (n: number, networkLatency?: number) => Promise<Array<MessageType>> = (n, networkLatency = 100) => {
    return new Promise((resolve) => {
      const newMessages: Array<MessageType> = [];

      for (let i = 0; i < n; i++) {
        const messageText = testMessages[getRandomInt(0, testMessages.length)];
        newMessages.push({ id: generateUniqueKey(), senderId: getRandomInt(0, 2), message: messageText, timestamp: new Date().toISOString() });
      }

      setTimeout(() => {
        resolve(newMessages);
      }, networkLatency);
    });
  };

  useEffect(() => {
    setProfile(dummyProfiles[0]);
    navigation.setOptions({ headerShown: false });
    if (!chatId) return;

    queryMoreMessages(15).then((newMessages) => {
      setMessages(newMessages);
    });
  }, [navigation]);

  const loadMoreOlderMessages = async () => {
    // console.log('loading more older messages');
    // const newMessages = await queryMoreMessages(10);
    // setMessages((m) => {
    //   return m.concat(newMessages);
    // });
  };

  if (!messages) {
    return;
    /// Loading spinner
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4DEC1', display: 'flex', justifyContent: 'flex-start' }}>
      <View style={chatPageTheme.header} onLayout={onLayout}>
        <DualRow padding={5}>
          <CloseButton onPress={() => navigation.goBack()} size={size * 1.5} />
          <ProfileButton size={size * 1.5} />
        </DualRow>
        <DualRow padding={15}>
          <TouchableOpacity style={chatPageTheme.tab}>
            <View style={{ borderBottomWidth: 2, width: '100%' }}>
              <Text style={chatPageTheme.tabText}>Message</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[chatPageTheme.tab, chatPageTheme.tabUnselected]}>
            <View style={{ borderBottomWidth: 2, width: '100%' }}>
              <Text style={chatPageTheme.tabText}>Profile</Text>
            </View>
          </TouchableOpacity>
        </DualRow>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          contentContainerStyle={chatPageTheme.flatList}
          data={messages}
          inverted
          renderItem={({ item, index }) => <ChatBubble message={item} sender={item.senderId == 0} key={item.id} index={index} />}
          onEndReached={loadMoreOlderMessages}
          ListFooterComponent={<Header />}
          ListFooterComponentStyle={chatPageTheme.flatListHeader}
        />
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={chatPageTheme.footer}>
        <View style={chatPageTheme.inputContainer}>
          <TextInput style={chatPageTheme.textInput} placeholder="Start chatting..." value={message} onChangeText={setMessage} onSubmitEditing={() => {}} />
          <TouchableOpacity style={chatPageTheme.extraButton} onPress={() => {}}>
            <Image source={IconIceBreaker} />
          </TouchableOpacity>
          <TouchableOpacity style={chatPageTheme.extraButton} onPress={() => {}}>
            <Image source={IconWorld} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatPage;
