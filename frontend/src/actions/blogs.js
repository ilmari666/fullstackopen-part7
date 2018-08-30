import { getAll, get, like } from '../services/blogs';

export const getBlogs = () => async dispatch => {
  const response = await getAll();
  if (response.error) {
    dispatch({
      type: 'NOTIFY',
      message: { error: response.error }
    });
    return null;
  }

  dispatch({
    type: 'UPDATE_BLOGS',
    blogs: response
  });
};

export const getBlog = id => async dispatch => {
  const response = await get(id);
  if (response.error) {
    dispatch({
      type: 'NOTIFY',
      message: { error: response.error }
    });
    return null;
  }

  dispatch({
    type: 'UPDATE_BLOG',
    blog: response
  });
};

export const likeBlog = id => async dispatch => {
  const response = await like(id);
  if (response.error) {
    dispatch({
      type: 'NOTIFY',
      message: { error: response.error }
    });
    return null;
  }

  dispatch({
    type: 'UPDATE_BLOG',
    blog: response
  });
};
