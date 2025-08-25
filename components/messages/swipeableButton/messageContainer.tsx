import React from 'react';
import { View } from 'react-native';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import messageContainerTheme from './styles/messageContainerTheme';
import MessagePreview from './messagePreview';
import ActionButton from '../actionButton/actionButton';

interface MessageContainerProps {
  onTouch: () => void;
  size: number;
}

const MessageContainer: React.FC<MessageContainerProps> = ({ size, onTouch }) => {
  const messageContainerHeight = Math.min(size * 0.27, 110);

  return (
    <ReanimatedSwipeable
      friction={2}
      rightThreshold={-60}
      overshootRight={false}
      containerStyle={[messageContainerTheme.container, { height: messageContainerHeight }]}
      renderRightActions={() => renderRightActions()}
    >
      <MessagePreview onTouch={onTouch} />
    </ReanimatedSwipeable>
  );
};

const renderRightActions = () => {
  return (
    <View style={[messageContainerTheme.actionButtonContainer]}>
      <ActionButton firstButton={true} name="Pin" action={() => {}} />
      <ActionButton name="Report" action={() => {}} />
      <ActionButton name="Unmatch" action={() => {}} />
    </View>
  );
};

export default MessageContainer;
