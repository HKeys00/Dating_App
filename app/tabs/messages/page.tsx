import React, { useEffect, useState } from 'react';
import Page from '@/app/pages/base/page';
import { ScrollView, View, Image, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import ChatPreview from './components/chatPreview';
import ChatPreviewType from '@/types/messaging/chatPreviewType';
import dummyChatPreviews from '@/data/chatPreviewData.json';
import messagePageTheme from '@/app/tabs/messages/styles/page';
import PageHeader from '@/app/pages/base/components/pageHeader';
import PageBody from '@/app/pages/base/components/pageBody';
import IconHidden from '@/assets/messagesPage/hidden.png';

const MessagesPage: React.FC = () => {
  const [chatPreviews, setChatPreviews] = useState<ChatPreviewType[]>([]);
  const router = useRouter();

  useEffect(() => {
    setChatPreviews(dummyChatPreviews.chatPreviews);
  });

  return (
    <Page>
      <PageHeader title="Messages">
        <></>
      </PageHeader>
      <PageBody>
        <View style={messagePageTheme.scrollContainer}>
          <ScrollView contentContainerStyle={messagePageTheme.scrollableContainer}>
            {chatPreviews.map((preview, index) => {
              return (
                <ChatPreview
                  key={preview.chatId}
                  message={preview.lastMessage}
                  firstName={preview.participantFirstName}
                  lastName={preview.participantLastName}
                  previewImage={preview.participantPreviewImage}
                  timestamp={preview.lastMessageTimestamp}
                  read={false}
                  intent={preview.intent}
                  zIndex={chatPreviews.length - index}
                  order={index}
                  onPress={() => {
                    router.push(`../../pages/chat/page?chatId=${preview.chatId}`, {});
                  }}
                />
              );
            })}
          </ScrollView>
        </View>
        <View style={messagePageTheme.buttonContainer}>
          <Pressable onPress={() => {}} style={messagePageTheme.hiddenContainer}>
            <Text style={messagePageTheme.hiddenButtonText}>Hidden</Text>
            <Image style={messagePageTheme.hiddenButtonImage} source={IconHidden} />
          </Pressable>
        </View>
      </PageBody>
    </Page>
  );
};

export default MessagesPage;
