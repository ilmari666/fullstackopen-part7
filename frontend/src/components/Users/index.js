import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers } from '../../actions/users';

const ListUser = ({ username, blogs, id }) => (
  <div>
    <Link to={`/users/${id}`}>
      {username}, {blogs.length} blogs
    </Link>
  </div>
);

class Users extends Component {
  componentDidMount() {
    if (this.props.dirty) {
      this.props.getUsers();
    }
  }
  render() {
    const users = this.props.users || [];
    return (
      <div>
        <h1>Users</h1>
        {users.map(user => (
          <ListUser key={user.id} {...user} />
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({
    users: state.users.users,
    dirty: state.users.dirty
  }),
  { getUsers }
)(Users);
