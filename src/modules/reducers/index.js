import { fromJS, List } from 'immutable';

import types from '../actions';

const defaultState = fromJS({
  activeUser: '',
  users: [],
  messages: {},
});

const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return handleAddNewUser(state, action);
    case types.SET_ACTIVE_USER:
      return state.set('activeUser', action.payload.id);
    case types.ADD_MESSAGE:
      return handleAddNewMessage(state, action);
    default:
      return state;
  }
};

function handleAddNewUser(state, action) {
  const newUsers = state
    .get('users')
    .push(fromJS({ name: action.payload.name, id: action.payload.id }));
  const newMessages = state.get('messages').set(action.payload.id, List());

  return state.merge(
    fromJS({
      users: newUsers,
      messages: newMessages,
    }),
  );
}

function handleAddNewMessage(state, action) {
  const newMessages = state.getIn(['messages', action.meta.id]).push(
    fromJS({
      message: action.payload.message,
      id: action.payload.id,
      time: action.payload.time,
    }),
  );

  return state.setIn(['messages', action.meta.id], newMessages);
}

export default usersReducer;
