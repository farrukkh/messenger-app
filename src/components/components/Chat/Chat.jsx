import React from 'react';
import PropTypes from 'prop-types';
import IPropTypes from 'react-immutable-proptypes';

import Messages from './components/Messages';
import MessageInput from './components/MessageInput';

import './style.scss';

const Chat = (props) => {
  const {
    messages,
    addMessage,
    activeUser,
  } = props;

  return (
    <div className="chat-wrapper">
      <div className="chat-content--wrapper">
        <Messages
          messages={messages}
        />
        <MessageInput
          addMessage={addMessage}
          activeUser={activeUser}
        />
      </div>
    </div>
  );
};

const { string, func } = PropTypes;
const { listOf, mapContains } = IPropTypes;

Chat.propTypes = {
  messages: listOf(mapContains({
    message: string,
    id: string,
    time: string,
  })).isRequired,
  addMessage: func.isRequired,
  activeUser: string.isRequired,
};

export default Chat;
