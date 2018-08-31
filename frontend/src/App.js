import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import notify from './actions/notify';
import { logout, autoLogin } from './actions/auth';
import Blogs from './components/Blogs';

import LoginForm from './components/LoginForm';
import UserInfo from './components/UserInfo';
import Users from './components/Users';
import Notification from './components/Notification';

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

  /*
  newBlog = async blog => {
    if (!(blog.title && blog.url)) {
      return this.notify({ error: 'Please fill blog title and URL' });
    }
    const response = await blogService.create(blog);
    if (response.status !== 201) {
      return this.notify({ error: response });
    }

    this.props.notify(`Added "${blog.title}" by ${blog.author} successfully`);
    this.blogForm.hide();

    const newBlog = response.data;
    const updatedBlogs = this.state.blogs.concat(newBlog);
    this.setState({ blogs: updatedBlogs });
  };
*/

  render() {
    const { auth } = this.props;
    if (!auth) {
      return (
        <div>
          <Notification />
          <LoginForm />
        </div>
      );
    }
    return (
      <div>
        <Notification />
        <UserInfo />
        <Blogs />
      </div>
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
