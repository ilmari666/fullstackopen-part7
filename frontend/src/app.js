import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import notify from './actions/notify';
import { autoLogin } from './actions/auth';
import Blogs from './components/Blogs';

import LoginForm from './components/LoginForm';
import UserInfo from './components/UserInfo';
import Users from './components/Users';
import User from './components/User';
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
          <Switch>
            {!auth ? <Redirect push to="/login" /> : null}
            <Route exact path="/users" component={Users} />
            <Route path="/users/:id" component={User} />
          </Switch>
          <Route
            exact
            path="/blogs"
            render={() => (!auth ? <Redirect push to="/login" /> : <Blogs />)}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => {
              if (!auth) {
                return <LoginForm />;
              } else {
                history.goBack();
                return null;
              }
            }}
          />
          <Route
            exact
            path="/"
            render={() =>
              !auth ? <Redirect push to="/login" /> : <Redirect to="/blogs" />
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
