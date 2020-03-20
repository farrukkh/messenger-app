import React from 'react';
import PropTypes from 'prop-types';
import IPropTypes from 'react-immutable-proptypes';

import './style.scss';

const Users = (props) => {
  const {
    users,
    setActiveUser,
    activeUser,
  } = props;

  const userIsActive = (userId, activeUserId) => {
    if (userId === activeUserId) return ' active-user';
    return '';
  }

  const setNewActiveUser = (userId, activeUser) => {
    if (userId !== activeUser) {
      setActiveUser(userId);
    }
  }

  return (
    <div className="user-list--wrapper">
      {
        users.map((user) => (
          <div
            key={user.get('id')}
            onClick={() => setNewActiveUser(user.get('id'), activeUser)}
            className={`single-user--wrapper${userIsActive(user.get('id'), activeUser)}`}
          >
            <div className="single-user--content">
              <span className="single-user--text">{user.get('name')}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

const { string, func } = PropTypes;
const { listOf, mapContains } = IPropTypes;

Users.propTypes = {
  users: listOf(mapContains({
    name: string,
    id: string,
  })).isRequired,
  setActiveUser: func.isRequired,
  activeUser: string.isRequired,
};

export default Users;
