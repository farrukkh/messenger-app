import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import IPropTypes from 'react-immutable-proptypes';


import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

import './style.scss';

const MessengerView = (props) => {
  const {
    users,
    activeUser,
    messages,
    actions: {
      addUser,
      setActiveUser,
      addMessage,
    },
  } = props;

  useEffect(() => {
    const messagesElement = document.getElementById('messages-list');
    messagesElement.scrollTop = messagesElement.scrollHeight - messagesElement.clientHeight;
  }, [messages]);

  return (
    <div className="messenger--wrapper">
      <Sidebar
        users={users}
        setActiveUser={setActiveUser}
        addUser={addUser}
        activeUser={activeUser}
      />
      <Chat
        messages={messages}
        addMessage={addMessage}
        activeUser={activeUser}
      />
    </div>
  );
}

const {
  shape,
  string,
  func,
} = PropTypes;

const { mapContains, listOf } = IPropTypes;

MessengerView.propTypes = {
  users: listOf(mapContains({
    name: string,
    id: string,
  })).isRequired,
  activeUser: string.isRequired,
  messages: listOf(mapContains({
    message: string,
    id: string,
    time: string,
  })).isRequired,
  actions: shape({
    addUser: func.isRequired,
    setActiveUser: func.isRequired,
    addMessage: func.isRequired,
  }).isRequired,
};

export default MessengerView;
