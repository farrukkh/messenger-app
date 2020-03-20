import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  addUser,
  setActiveUser,
  addMessage,
} from '../modules/actions';
import {
  selectUsers,
  selectMessages,
  selectActiveUser,
} from '../modules/selectors';
import MessengerView from './MessengerView';

const mapStateToProps = (state) => ({
  users: selectUsers(state),
  activeUser: selectActiveUser(state),
  messages: selectMessages(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      addUser,
      setActiveUser,
      addMessage,
    },
    dispatch,
  ),
});

export const Messenger = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessengerView);

export default Messenger;
