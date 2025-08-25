import React from 'react';
import { ScrollView, Text } from 'react-native';
import RandomBloke from '@/assets/images/random bloke.png';
import ProfileEditContainerTheme from './profileEditContainerTheme';
import ImageContainer from '../imageContainer/imageContainer';
import PromptContainer from '../promptContainer/promptContainer';

interface ProfileEditContainerProps {}

const ProfileEditContainer: React.FC<ProfileEditContainerProps> = () => {
  return (
    <ScrollView style={ProfileEditContainerTheme.page} contentContainerStyle={ProfileEditContainerTheme.contentContainer} showsVerticalScrollIndicator={false}>
      <ImageContainer image={RandomBloke} />
      <PromptContainer prompt="Typical Sunday" response="Going to the movie with my mum." />
      <ImageContainer image={RandomBloke} />
      <PromptContainer prompt="My favourite food" response="Pizza, I love pizza." />
      <ImageContainer image={RandomBloke} />
      <PromptContainer
        prompt="My favourite movie"
        response="The Matrix, I love the action and the philosophy. Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BLah this is stupid I don't know what to"
      />
    </ScrollView>
  );
};

export default ProfileEditContainer;
