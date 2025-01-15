import React, { useEffect, useState } from 'react';
import Page from '@/pages/page';
import { ScrollView, View, Image, Text, Pressable } from 'react-native';
import ChatPreview from '@/components/messages/chatPreview';
import ChatPreviewType from '../../interfaces/messaging/chatPreviewType';
import dummyChatPreviews from '../../data/chatPreviewData.json';
import messagePageTheme from '@/styles/pages/messagePage/messagePageTheme';
import PageHeader from '@/pages/pageHeader';
import PageBody from '@/pages/pageBody';
import IconHidden from '../../assets/messagesPage/hidden.png';

const MessagesPage: React.FC = () => {
  const [chatPreviews, setChatPreviews] = useState<ChatPreviewType[]>([]);

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
                  onPress={() => {}}
                />
              );
            })}
          </ScrollView>
        </View>
        <View>
          <Pressable onPress={() => {}} style={messagePageTheme.buttonContainer}>
            <Image style={messagePageTheme.hiddenButtonImage} source={IconHidden} />
            <Text style={messagePageTheme.hiddenButtonText}>Hidden</Text>
          </Pressable>
        </View>
      </PageBody>
    </Page>
  );
};

export default MessagesPage;
