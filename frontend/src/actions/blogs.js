import { getAll, get, like, create, remove } from '../services/blogs';

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
    blog: response
  });
};

export const likeBlog = blog => async dispatch => {
  const response = await like(blog.id);
  if (response.error) {
    return dispatch({
      type: 'NOTIFY',
      message: { error: response.error }
    });
  }

  return dispatch({
    type: 'UPDATE_BLOG',
    blog: response,
    notification: `Liked blog ${blog.title}`
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
    blog: response,
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
