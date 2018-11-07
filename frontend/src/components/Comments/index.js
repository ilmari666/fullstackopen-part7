import React from 'react';
import CommentForm from '../CommentForm';

const Comment = props => {
  return <div>{props.comment}</div>;
};
const Comments = ({ comments, id, commentBlog }) => {
  return (
    <div>
      {comments.length > 0 ? <div>Comments:</div> : null}
      {comments.map((comment, index) => (
        <Comment key={`comment` + index} comment={comment} />
      ))}
      <CommentForm id={id} commentBlock={commentBlog} />
    </div>
  );
};

export default Comments;
