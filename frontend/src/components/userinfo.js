import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
const wrapCallback = callback => {
  return e => {
    e.preventDefault();
    callback(e);
  };
};

const UserInfo = props => {
  const { logout, username } = props;
  return (
    <div>
      Welcome, {username}
      <button onClick={wrapCallback(logout)}>Logout</button>
    </div>
  );
};

export default connect(
  state => {
    return {
      auth: state.auth
    };
  },
  { logout }
)(UserInfo);
