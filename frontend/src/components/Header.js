import React from 'react';
import { Box, Toolbar, styled } from 'reakit';
import { Link } from 'react-router-dom';

// import LoginForm from './LoginForm';
//import { Link } from 'reakit';

import UserInfo from './UserInfo';

const GradientBox = styled.div`
  position: float;
  padding-top: 10px;
  padding-bottom: 10px;
  padding: 0px;
  width: 100%;
  height: 50px;
  background: linear-gradient(to bottom, #7abcff 0%, #60abf8 44%, #4096ee 100%);
`;

const Navi = styled.div`
  position: float;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  width: 100%;
  height: 12px;
  background: linear-gradient(to bottom, rgba(244,244,244,1) 17%,rgba(229,229,229,1) 81%);
`;
const Line = styled.div`
  background: #aaaaaa;
  height: 1px;
  padding: 0px;
  margin-right: 0px;
  width: 100%;
`;

const Header = props => (
  <>
    <GradientBox>
      {props.auth ? <UserInfo absolute right={10}/> : null}
    </GradientBox>
    <Navi>
      <Link to="/users">Users</Link> &nbsp;
      <Link to="/blogs">Blogs</Link> &nbsp;
      <Link to="/about">About</Link> &nbsp;
    </Navi>
    <Line />
  </>
);

export default Header;
