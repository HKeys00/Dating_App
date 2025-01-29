import ProfileType from '../profile/profileType';
import MessageType from './messageType';

type ChatType = {
  chatId: number;
  messages: MessageType[];
  participant: ProfileType;
};

export default ChatType;
