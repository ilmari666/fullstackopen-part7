import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import Form from './Form';

const fields = [
  {
    name: 'username',
    type: 'text'
  },
  {
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
