import React from 'react';
import { Box, Toolbar } from 'reakit';
import { Link } from 'react-router-dom';

// import LoginForm from './LoginForm';
//import { Link } from 'reakit';

import UserInfo from './UserInfo';

const Header = props => (
  <Box>
    {console.log(props) || null}
    {props.auth ? <UserInfo /> : null}
    <Link to="/users">Users</Link> &nbsp;
    <Link to="/blogs">Blogs</Link> &nbsp;
    <Link to="/about">About</Link> &nbsp;
  </Box>
);

export default Header;
