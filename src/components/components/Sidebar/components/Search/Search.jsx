import React from 'react';
import { func } from 'prop-types';

import './style.scss';

const Search = ({ addNewUser }) => (
  <div className="user-search--wrapper">
    <input
      type="text"
      onKeyDown={addNewUser}
      className="user-search--input"
      placeholder="Add a user to chat with"
    />
  </div>
);

Search.propTypes = {
  addNewUser: func.isRequired,
};

export default Search;
