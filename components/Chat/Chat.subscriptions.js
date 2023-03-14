import { cloneDeep } from 'lodash';
import {
  MESSAGES_SUBSCRIPTION,
  MESSAGE_EDIT_SUBSCRIPTION,
  MESSAGE_DELETE_SUBSCRIPTION,
  NEW_REACTION_SUBSCRIPTION,
  UPDATE_REACTION_SUBSCRIPTION,
  REMOVE_REACTION_SUBSCRIPTION,
} from 'apis/Message';
import { COMPANY_NAME } from 'utils/config';

const Subscribe = ({ subscribeToMore, communityUrl, channelUrl }) => {
  subscribeToMore({
    document: MESSAGES_SUBSCRIPTION,
    variables: {
      channelUrl: `${communityUrl}/${channelUrl}`,
      tenant: COMPANY_NAME(),
    },
    updateQuery: (prev, { subscriptionData }) => {
      if (!subscriptionData.data) return prev;
      const { newMessage } = subscriptionData.data;
      console.log(newMessage, '====newMessage=====')
      let result = { ...prev };
      if (result?.messages?.[0]?.channel.url === newMessage.channel.url) {
        const messagesData = result.messages.filter(message => message.id === newMessage.id);
        if (messagesData.length === 0) {
          result = {
            ...result,
            messages: [...result.messages, newMessage],
          };
        } else {
          const indexE = result.messages.indexOf(messagesData[0]);
          result.messages[indexE] = newMessage;
        }
      }

      return result;
    },
  });

  subscribeToMore({
    document: MESSAGE_EDIT_SUBSCRIPTION,
    variables: {
      channelUrl: `${communityUrl}/${channelUrl}`,
      tenant: COMPANY_NAME(),
    },
    updateQuery: (prev, { subscriptionData }) => {
      if (!subscriptionData.data || !subscriptionData.data.editMessage) return prev;
      const { editMessage } = subscriptionData.data;

      const updatedMessageIndex = prev.messages.findIndex(({ id }) => id === editMessage.id);
      let _messages = cloneDeep(prev.messages)
      _messages.splice(updatedMessageIndex, 1, editMessage);
      return {
        ...prev,
        messages: _messages,
      };
    },
  });

  subscribeToMore({
    document: MESSAGE_DELETE_SUBSCRIPTION,
    variables: {
      channelUrl: `${communityUrl}/${channelUrl}`,
      tenant: COMPANY_NAME(),
    },
    updateQuery: (prev, { subscriptionData }) => {
      if (!subscriptionData.data || !subscriptionData.data.deleteMessage) return prev;
      const { deleteMessage } = subscriptionData.data;
      const updatedMessages = prev.messages.filter(({ id }) => id !== deleteMessage.id);

      return {
        ...prev,
        messages: updatedMessages,
      };
    },
  });

  subscribeToMore({
    document: NEW_REACTION_SUBSCRIPTION,
    variables: {
      channelUrl: `${communityUrl}/${channelUrl}`,
      tenant: COMPANY_NAME(),
    },
    updateQuery: (prev, { subscriptionData }) => {
      if (!subscriptionData.data || !subscriptionData.data.newReaction) return prev;
      const { newReaction: reaction } = subscriptionData.data;

      const updatedMessageIndex = prev.messages.findIndex(({ id }) => id === reaction.message.id);
      let _messages = cloneDeep(prev.messages)

      _messages[updatedMessageIndex].reactions.push(reaction);

      return {
        ...prev,
        messages: _messages,
      };
    },
  });

  subscribeToMore({
    document: UPDATE_REACTION_SUBSCRIPTION,
    variables: {
      channelUrl: `${communityUrl}/${channelUrl}`,
      tenant: COMPANY_NAME(),
    },
    updateQuery: (prev, { subscriptionData }) => {
      if (!subscriptionData.data || !subscriptionData.data.updatedReaction) return prev;
      const { updatedReaction } = subscriptionData.data;

      const updatedMessageIndex = prev.messages.findIndex(
        ({ id }) => id === updatedReaction.message.id
      );
      
      let _messages = cloneDeep(prev.messages)

      const reactionIndex = _messages[updatedMessageIndex].reactions.findIndex(
        ({ id }) => id === updatedReaction.id
      );

      _messages[updatedMessageIndex].reactions.splice(reactionIndex, 1, updatedReaction);

      return {
        ...prev,
        messages: _messages,
      };
    },
  });

  subscribeToMore({
    document: REMOVE_REACTION_SUBSCRIPTION,
    variables: {
      channelUrl: `${communityUrl}/${channelUrl}`,
      tenant: COMPANY_NAME(),
    },
    updateQuery: (prev, { subscriptionData }) => {
      if (!subscriptionData.data || !subscriptionData.data.removedReaction) return prev;

      const { id: reactionId } = subscriptionData.data.removedReaction;

      let _messages = cloneDeep(prev.messages)
      const updatedMessages = _messages.map(message => ({
        ..._messages,
        reactions: message.reactions.filter(({ id }) => id !== reactionId),
      }));

      return {
        ...prev,
        messages: updatedMessages,
      };
    },
  });
};

export default Subscribe;
