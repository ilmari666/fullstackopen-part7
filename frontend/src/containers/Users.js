import { connect } from 'react-redux';
import { getUsers } from '../actions/users';
import Users from '../components/Users';

export default connect(
    state => ({
      users: state.users.users,
      dirty: state.users.dirty
    }),
    { getUsers }
  )(Users);
  