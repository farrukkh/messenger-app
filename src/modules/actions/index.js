const types = {
  ADD_MESSAGE: 'ADD_MESSAGE',
  ADD_USER: 'ADD_USER',
  SET_ACTIVE_USER: 'SET_ACTIVE_USER',
};

export const addMessage = (message, activeUser, newMessageId, time) => ({
  type: types.ADD_MESSAGE,
  payload: {
    id: newMessageId,
    message,
    time,
  },
  meta: {
    id: activeUser,
  },
});

export const addUser = (name, newUserId) => ({
  type: types.ADD_USER,
  payload: {
    id: newUserId,
    name,
  },
});

export const setActiveUser = (userId) => ({
  type: types.SET_ACTIVE_USER,
  payload: {
    id: userId,
  },
});

export default types;
