import React from 'react';
import { connect } from 'react-redux';

const Users = props => {
  console.log('Users', props);
  return <div>Users</div>;
};

export default connect(state => ({
  users: state.users
}))(Users);
