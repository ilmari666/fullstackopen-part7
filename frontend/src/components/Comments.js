import React from 'react';
import CommentForm from './CommentForm';

const Comment = props => {
  return <div>{props.comment}</div>;
};
const Comments = ({ comments, id }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <Comment key={`comment` + index} comment={comment} />
      ))}
      <CommentForm id={id} />
    </div>
  );
};

export default Comments;
