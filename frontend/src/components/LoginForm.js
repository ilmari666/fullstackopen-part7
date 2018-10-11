import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import Form from './Form';

const fields = [
  {
    label: 'Username:',
    name: 'username',
    type: 'text'
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password'
  }
];

const LoginForm = props => {
  const { onSubmit } = props;
  return <Form fields={fields} onSubmit={onSubmit} buttonLabel="login" />;
};

export default connect(
  null,
  { onSubmit: login }
)(LoginForm);
