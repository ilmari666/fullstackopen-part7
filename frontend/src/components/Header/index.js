import React from 'react';
import { Navigation, Box, Toolbar, styled, Link as ReakitLink } from 'reakit';
import { Link } from 'react-router-dom';

// import LoginForm from './LoginForm';
//import { Link } from 'reakit';

import UserInfo from '../UserInfo';

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
  padding-left: 3rem;
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
    <GradientBox debug={console.log(props)}>
      {props.auth ? <UserInfo absolute right="1rem"/> : null}
    </GradientBox>
    <Navigation>
      <Link to="/users">Users</Link> &nbsp;
      <Link to="/blogs">Blogs</Link> &nbsp;
      <Link to="/about">About</Link> &nbsp;
    </Navigation>
    <Line />
  </>
);

export default Header;
