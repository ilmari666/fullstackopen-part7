import React from 'react';
import { func } from 'prop-types';
import Form from '../Form';

const fields = [
  {
    label: 'Title:',
    name: 'title',
    type: 'text'
  },
  {
    label: 'Author:',
    name: 'author',
    type: 'text'
  },
  {
    label: 'Blog URL:',
    name: 'url',
    type: 'text'
  }
];

const BlogForm = props => {
  const { onSubmit } = props;
  return (
    <div>
      <h2>Create new blog</h2>
      <Form fields={fields} onSubmit={onSubmit} buttonLabel="create" />
    </div>
  );
};
BlogForm.propTypes = { onSubmit: func.isRequired };
export default BlogForm;
