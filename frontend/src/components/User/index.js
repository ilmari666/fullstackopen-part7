import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../../actions/users';

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

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const users = state.users.users;
  const user = users.find(user => user.id === id);
  return {
    user,
    id
  };
};

export default connect(
  mapStateToProps,
  { getUser }
)(User);
