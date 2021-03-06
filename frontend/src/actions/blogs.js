import { getAll, get, like, create, remove, comment } from '../services/blogs';

export const getBlogs = () => async dispatch => {
  const response = await getAll();
  if (response.error) {
    return dispatch({
      type: 'NOTIFY',
      message: { error: response.error }
    });
  }
  return dispatch({
    type: 'UPDATE_BLOGS',
    blogs: response
  });
};

export const getBlog = id => async dispatch => {
  const response = await get(id);
  if (response.error) {
    return dispatch({
      type: 'NOTIFY',
      message: { error: response.error }
    });
  }
  return dispatch({
    type: 'UPDATE_BLOG',
    id: id,
    content: response
  });
};

export const likeBlog = blog => async dispatch => {
  const { id } = blog;
  const response = await like(id);
  if (response.error) {
    return dispatch({
      type: 'NOTIFY',
      message: { error: response.error }
    });
  }
  return dispatch({
    type: 'UPDATE_BLOG',
    content: response,
    id,
    notification: `Liked blog ${blog.title}`
  });
};

export const commentBlog = (id, content) => async dispatch => {
  const response = await comment(id, content.comment);
  if (response.error) {
    return dispatch({
      type: 'NOTIFY',
      message: { error: response.error }
    });
  }

  return dispatch({
    type: 'ADD_BLOG_COMMENT',
    content: content.comment,
    id,
    notification: `Added comment ${content.comment}`
  });
};

export const createBlog = blog => async dispatch => {
  if (!(blog.title && blog.url)) {
    return dispatch({
      type: 'NOTIFY',
      message: { error: 'Please fill blog title and URL' }
    });
  }
  const response = await create(blog);
  if (response.error) {
    return dispatch({
      type: 'NOTIFY',
      message: { error: response.error }
    });
  }
  return dispatch({
    type: 'CREATE_BLOG',
    blog: response.data,
    notification: `Created blog ${blog.title}`
  });
};

export const deleteBlog = blog => async dispatch => {
  const { id, title, author } = blog;
  const response = await remove(id);
  if (response.error) {
    return dispatch({
      type: 'NOTIFY',
      message: { error: response.error }
    });
  }
  return dispatch({
    type: 'DELETE_BLOG',
    id: id,
    notification: `Deleted blog ${title} by ${author}`
  });
};
