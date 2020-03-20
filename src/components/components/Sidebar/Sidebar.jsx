import React from 'react';
import PropTypes from "prop-types";
import IPropTypes from 'react-immutable-proptypes';
import * as uuid from 'uuid';

import Search from './components/Search';
import Users from './components/Users';

import './style.scss';

const Sidebar = (props) => {
  const {
    users,
    addUser,
    setActiveUser,
    activeUser,
  } = props;

  const addNewUser = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      addUser(e.target.value, uuid.v4());
      e.target.value = '';
    }
  }

  return (
    <div className="chat--sidebar">
      <Search addNewUser={addNewUser} />
      <Users
        users={users}
        setActiveUser={setActiveUser}
        activeUser={activeUser}
      />
    </div>
  );
};

const { string, func } = PropTypes;
const { listOf, mapContains } = IPropTypes;

Sidebar.propTypes = {
  users: listOf(mapContains({
    name: string,
    id: string,
  })).isRequired,
  addUser: func.isRequired,
  setActiveUser: func.isRequired,
  activeUser: string.isRequired,
}

export default Sidebar;
