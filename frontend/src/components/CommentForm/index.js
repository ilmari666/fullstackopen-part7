import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import Form from '../Form';

const fields = [
  {
    label: 'Comment:',
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
          props.commentBlog(id, comment);
        }}
        buttonLabel="Comment"
      />
    </div>
  );
};

export default CommentForm;