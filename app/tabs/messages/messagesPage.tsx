import React, { useEffect, useState } from 'react';
import Page from '@/app/pages/base/page';
import { ScrollView, View, LayoutChangeEvent, Pressable, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';
import ChatPreviewType from '@/types/messaging/chatPreviewType';

import PageHeader from '@/app/pages/base/components/pageHeader';
import MessageContainer from '@/components/messages/swipeableButton/messageContainer';
import dummyChatPreviews from '@/data/chatPreviewData.json';
import messagePageTheme from '@/app/tabs/messages/styles/messagePageTheme';
import IconHidden from '@/assets/messagesPage/hidden.png';
import usePageHeight from '@/hooks/usePageHeight';

const MessagesPage: React.FC = () => {
  const [chatPreviews, setChatPreviews] = useState<ChatPreviewType[]>([]);
  const height = usePageHeight();

  const router = useRouter();

  useEffect(() => {
    setChatPreviews(dummyChatPreviews.chatPreviews);
  });

  return (
    <Page>
      <PageHeader title="Messages">
        <></>
      </PageHeader>
      <View style={messagePageTheme.scrollContainer}>
        <ScrollView contentContainerStyle={messagePageTheme.scrollableContainer} showsVerticalScrollIndicator={false}>
          {chatPreviews.map((preview, index) => {
            return (
              <MessageContainer
                key={index}
                size={height}
                onTouch={() => {
                  router.push(`../../pages/chat/chatPage?chatId=${preview.chatId}`, {});
                }}
              />
            );
          })}
        </ScrollView>
      </View>
      <View style={messagePageTheme.hiddenContainer}>
        <Pressable onPress={() => {}} style={messagePageTheme.buttonContainer}>
          <Text style={messagePageTheme.hiddenButtonText}>Hidden</Text>
          <Image style={messagePageTheme.hiddenButtonImage} source={IconHidden} />
        </Pressable>
      </View>
    </Page>
  );
};

export default MessagesPage;
