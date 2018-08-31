import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import notify from './actions/notify';
import { autoLogin } from './actions/auth';
import Blogs from './components/Blogs';

import LoginForm from './components/LoginForm';
import UserInfo from './components/UserInfo';
import Users from './components/Users';
import Notification from './components/Notification';
import About from './components/About';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      message: ''
    };
  }

  async componentWillMount() {
    this.props.autoLogin();
  }

  render() {
    const { auth } = this.props;
    return (
      <BrowserRouter>
        <div>
          <Link to="/users">Users</Link> &nbsp;
          <Link to="/blogs">Blogs</Link> &nbsp;
          <Link to="/about">About</Link> &nbsp;
          <Notification />
          {auth ? <UserInfo /> : null}
          <Route
            exact
            path="/users"
            render={() => (!auth ? <Redirect to="/login" /> : <Users />)}
          />
          <Route
            exact
            path="/blogs"
            render={() => (!auth ? <Redirect to="/login" /> : <Blogs />)}
          />
          <Route
            exact
            path="/login"
            render={({ history }) =>
              !auth ? <LoginForm /> : <Redirect to="/" />
            }
          />
          <Route
            exact
            path="/"
            render={() =>
              !auth ? <Redirect to="/login" /> : <Redirect to="/blogs" />
            }
          />
          <Route exact path="/about" render={() => <About />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  state => {
    return {
      auth: state.auth
    };
  },
  { notify, autoLogin }
)(App);
