import React from 'react';
import { Box, Button } from 'reakit';
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
    <Box>
      Logged in as {username}
      <Button onClick={wrapCallback(logout)}>Logout</Button>
    </Box>
  );
};

export default connect(
  state => {
    return {
      username: state.auth.username
    };
  },
  { logout }
)(UserInfo);
