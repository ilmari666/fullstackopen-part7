import { getAll, get } from '../services/users';

export const getUsers = () => async dispatch => {
  console.log('getUsers');
  const response = await getAll();
  console.log('rrr', response);
  if (response.error) {
    return dispatch({
      type: 'NOTIFY',
      message: { error: response.error }
    });
  }
  console.log('dddd');
  return dispatch({
    type: 'UPDATE_USERS',
    users: response
  });
};

export const getUser = id => async dispatch => {
  const response = await get(id);
  if (response.error) {
    return dispatch({
      type: 'NOTIFY',
      message: { error: response.error }
    });
  }
  return dispatch({
    type: 'UPDATE_USER',
    user: response
  });
};
export default { getAll, getUser };
