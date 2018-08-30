import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import notify from './actions/notify';
import { logout, autoLogin } from './actions/auth';
import { getBlogs, likeBlog } from './actions/blogs';
import { getUser } from './services/auth';
import blogService from './services/blogs';

import Blogs from './components/blogs';
import BlogForm from './components/blogform';
import LoginForm from './components/loginform';
import UserInfo from './components/userinfo';
import Notification from './components/notification';
import Toggleable from './components/toggleable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      user: null,
      message: ''
    };
  }

  async componentWillMount() {
    this.props.autoLogin();
    this.props.getBlogs();
  }

  logout = () => {
    this.props.logout();
  };

  like = ({ id }) => this.props.likeBlog(id);

  updateBlogs(newBlogs) {
    newBlogs.sort((a, b) => a.likes < b.likes);
    this.setState({ blogs: newBlogs });
  }

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

  deleteBlog = blog => {
    const { title, author, id } = blog;
    const message = `Are you sure you want to delete ${title} by ${author}?`;
    if (window.confirm(message)) {
      blogService.remove(id);
      const updatedBlogs = this.state.blogs.filter(blog => blog.id !== id);
      this.updateBlogs(updatedBlogs);
    }
  };

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
    //    <Notification message={message} />
    return (
      <div>
        <Notification />
        <UserInfo username={auth.username} onLogout={this.logout} />
        <Blogs
          user={auth}
          blogs={this.state.blogs}
          onLiked={this.like}
          onDelete={this.deleteBlog}
        />
        <Toggleable
          showLabel="New Blog"
          hideLabel="Cancel"
          ref={ref => (this.blogForm = ref)}
          controls
        >
          <BlogForm onSubmit={this.newBlog} />
        </Toggleable>
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
  { notify, autoLogin, logout, getBlogs, likeBlog }
)(App);
