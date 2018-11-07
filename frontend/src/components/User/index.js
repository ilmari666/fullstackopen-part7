import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class User extends Component {
  componentDidMount() {
    if (!this.props.user) {
      this.props.getUser(this.props.id);
    }
  }
  render() {
    const props = this.props;
    if (!props.user) {
      return <div>loading ...</div>;
    }
    const id = props.id;
    const user = props.user;
    const { username, name, adult, blogs } = user;
    return (
      <div>
        User: {username}, <br />
        blogs: <br />
        {blogs.map(blog => (
          <Link to={`/blogs/${blog._id}`} key={blog._id}>
            {blog.title}
            <br />
          </Link>
        ))}
      </div>
    );
  }
}

export default User;

