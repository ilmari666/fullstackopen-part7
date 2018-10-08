import React from 'react';
import { Box, Toolbar, styled } from 'reakit';
import { Link } from 'react-router-dom';

// import LoginForm from './LoginForm';
//import { Link } from 'reakit';

import UserInfo from './UserInfo';

const GradientBox = styled.div`
  position: float;
  margin-top: 0px;
  padding: 10px;
  background: linear-gradient(to bottom, #7abcff 0%, #60abf8 44%, #4096ee 100%);
`;

const Header = props => (
  <GradientBox>
    {props.auth ? <UserInfo /> : null}
    <Link to="/users">Users</Link> &nbsp;
    <Link to="/blogs">Blogs</Link> &nbsp;
    <Link to="/about">About</Link> &nbsp;
  </GradientBox>
);

export default Header;
