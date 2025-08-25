import React from 'react';
import { View, Text } from 'react-native';
import PromptContainerTheme from './promptContainerTheme';
import Container from '../container/container';

interface PromptContainerProps {
  prompt: string;
  response: string;
}

const PromptContainer: React.FC<PromptContainerProps> = ({ prompt, response }) => {
  return (
    <View style={PromptContainerTheme.container}>
      <Container size={40}>
        <View style={PromptContainerTheme.header}>
          <Text style={PromptContainerTheme.prompt}>{prompt}</Text>
        </View>
        <View style={PromptContainerTheme.body}>
          <Text style={PromptContainerTheme.response}>{response}</Text>
        </View>
      </Container>
    </View>
  );
};

export default PromptContainer;
