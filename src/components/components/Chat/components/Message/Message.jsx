import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Message = (props) => {
  const { message, time } = props;

  return (
    <div className="single-message--wrapper">
      <span className="single-message--header">{time}</span>
      <span className="single-message--text">{message}</span>
    </div>
  );
};

const { string } = PropTypes;

Message.propTypes = {
  message: string.isRequired,
  time: string.isRequired,
};

export default Message;
