import React from 'react';

const User = props => {
  const { id, username, name, adult, blogs } = props;
  return (
    <div>
      {username}, {blogs.length} blogs
    </div>
  );
};

export default User;
