import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import notify from "./actions/notify";
import { autoLogin } from "./actions/auth";

import Blogs from "./containers/Blogs";
import Blog from "./containers/Blog";
import Users from "./containers/Users";
import User from "./containers/User";

import Header from "./components/Header";
import Notification from "./components/Notification";
import About from "./components/About";
import LoginForm from "./components/LoginForm";
import { Provider, Box, styled } from "reakit";
import theme from "./theme";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      message: ""
    };
  }

  async componentWillMount() {
    this.props.autoLogin();
  }

  render() {
    const { auth } = this.props;
    return (
      <Provider theme={theme}>
        <BrowserRouter>
          <Box>
            <Header auth={auth} />
            <Notification />
            <Box padding="3rem">
            <Switch>
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
              <Route exact path="/about" render={() => <About />} />
              <Route
                exact
                path="/"
                render={() =>
                  !auth ? (
                    <Redirect push to="/login" />
                  ) : (
                    <Redirect to="/blogs" />
                  )
                }
              />
              {!auth ? <Redirect push to="/login" /> : null}
              <Route exact path="/users" component={Users} />
              <Route path="/users/:id" component={User} />
              <Route exact path="/blogs" component={Blogs} />
              <Route path="/blogs/:id" component={Blog} />
            </Switch>
            </Box>
          </Box>
        </BrowserRouter>
      </Provider>
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

