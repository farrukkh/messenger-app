import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import * as uuid from 'uuid';

import './style.scss';

const MessageInput = (props) => {
  const { addMessage, activeUser } = props;

  const addNewMessage = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      addMessage(e.target.value, activeUser, uuid.v4(), moment().format('HH:mm'));
      e.target.value = '';
    }
  }

  return (
    <div className="message-input--wrapper">
      <div className="message-input--content">
        <input
          onKeyPress={addNewMessage}
          type="text"
          className={`new-message--input${!activeUser ? ' input--disabled' : ''}`}
          disabled={!activeUser}
          placeholder={activeUser ? 'Send message to the active user' : 'Select an active user'}
        />
      </div>
    </div>
  );
};

const { func, string } = PropTypes;

MessageInput.propTypes = {
  addMessage: func.isRequired,
  activeUser: string.isRequired,
}

export default MessageInput;
