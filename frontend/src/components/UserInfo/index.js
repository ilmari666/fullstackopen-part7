import React from 'react';
import { Box, Button, styled } from 'reakit';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
const wrapCallback = callback => {
  return e => {
    e.preventDefault();
    callback(e);
  };
};

const LogoutButton = styled(Button)`
  margin: 5px 10px 10px;
`;

const UserInfo = props => {
  const { logout, username } = props;
  return (
    <Box {...props}>
      Logged in as {username}
      <LogoutButton onClick={wrapCallback(logout)}>Logout</LogoutButton>
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
