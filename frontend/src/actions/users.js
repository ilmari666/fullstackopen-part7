import { getAll, get } from '../services/users';

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
    type: 'UPDATE_USERS',
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
    type: 'UPDATE_USER',
    blog: response
  });
};
export default { getAll, getSingle };
