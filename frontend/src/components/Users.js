import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions/users';
import User from './User';

class Users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    console.log('Users', this.props);
    const users = this.props.users || [];
    return (
      <div>
        <h1>Users</h1>
        {users.map(user => (
          <User key={user.id} {...user} />
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({
    users: state.users
  }),
  { getUsers }
)(Users);
