import React from 'react';
import PropTypes from 'prop-types';
import IPropTypes from 'react-immutable-proptypes';

import Message from '../Message';

import './style.scss';

const Messages = (props) => {
  const { messages } = props;

  return (
    <div id="messages-list" className="messages--wrapper">
      {
        messages.map((message) => (
          <Message
            key={message.get('id')}
            message={message.get('message')}
            time={message.get('time')}
          />
        ))
      }
    </div>
  );
};

const { string } = PropTypes;
const { listOf, mapContains } = IPropTypes;

Messages.propTypes = {
  messages: listOf(mapContains({
    message: string,
    id: string,
    time: string,
  })).isRequired,
};



export default Messages;
