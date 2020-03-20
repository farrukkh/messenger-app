import { List } from 'immutable';

export const selectUsers = (state) => state.get('users', List());

export const selectActiveUser = (state) => state.get('activeUser', '');

export const selectMessages = (state) => state.getIn(['messages', selectActiveUser(state)], List());
