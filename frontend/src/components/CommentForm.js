import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { commentBlog } from '../actions/blogs';
import Form from './Form';

const fields = [
  {
    name: 'comment',
    type: 'text'
  }
];

const CommentForm = props => {
  const { id } = props;
  return (
    <div>
      <Form
        fields={fields}
        onSubmit={comment => {
          console.log(comment);
          props.commentBlog(id, comment);
        }}
        buttonLabel="comment"
      />
    </div>
  );
};

export default connect(
  null,
  { commentBlog }
)(CommentForm);
