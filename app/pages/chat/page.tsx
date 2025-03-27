import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform, TextInput, Text } from 'react-native';
import { useSearchParams } from 'expo-router/build/hooks';
import { useNavigation } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { default as Theme } from './styles/page';
import dummyProfiles from '@/data/profileData.json';
import ChatBubble from '@/app/pages/chat/components/chatBubble';
import MessageType from '@/types/messaging/messageType';
import IconIceBreaker from '@/assets/chatPage/ice-breaker.png';
import IconWorld from '@/assets/chatPage/world.png';
import ProfilePreview from '@/app/pages/chat/components/profilePreview';
import ProfileType from '@/types/profile/profileType';
import CloseButton from '@/components/closeButton/closeButton';
import ProfileButton from '@/components/profileButton/profileButton';
import DualRow from '@/components/dualRow/dualRow';

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
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [message, setMessage] = useState('');

  const searchParams = useSearchParams();
  const chatId = searchParams.get('chatId');
  const navigation = useNavigation();

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

    queryMoreMessages(5).then((newMessages) => {
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

  // Add 10 more messages to beginning of the list.
  // In real chat application, this is where you have your pagination logic.
  const loadMoreRecentMessages = async () => {
    const newMessages = await queryMoreMessages(150);
    setMessages((m) => {
      return newMessages.concat(m);
    });
  };

  if (!messages) {
    return;
    /// Loading spinner
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4DEC1' }}>
      <View style={Theme.header}>
        <DualRow padding={10}>
          <CloseButton navigation={navigation} />
          <ProfileButton />
        </DualRow>
        <DualRow padding={15}>
          <TouchableOpacity style={Theme.tab}>
            <View style={{ borderBottomWidth: 2, width: '100%' }}>
              <Text style={Theme.tabText}>Message</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[Theme.tab, Theme.tabUnselected]}>
            <View style={{ borderBottomWidth: 2, width: '100%' }}>
              <Text style={Theme.tabText}>Profile</Text>
            </View>
          </TouchableOpacity>
        </DualRow>
      </View>
      <FlatList
        contentContainerStyle={Theme.flatList}
        data={messages}
        inverted
        renderItem={({ item, index }) => <ChatBubble message={item} sender={item.senderId == 0} key={item.id} index={index} />}
        onEndReached={loadMoreOlderMessages}
        ListFooterComponent={
          <ProfilePreview
            profilePicture={profile.images[0]}
            age={profile.age}
            name={profile.name}
            socialbility={profile.sociability}
            compatibility={5}
            intent={'casual'}
          />
        }
      />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ width: '100%', padding: 10 }}>
        <View style={Theme.inputContainer}>
          <TextInput style={Theme.textInput} placeholder="Start chatting..." value={message} onChangeText={setMessage} onSubmitEditing={() => {}} />
          <TouchableOpacity style={Theme.extraButton} onPress={() => {}}>
            <Image source={IconIceBreaker} />
          </TouchableOpacity>
          <TouchableOpacity style={Theme.extraButton} onPress={() => {}}>
            <Image source={IconWorld} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatPage;
