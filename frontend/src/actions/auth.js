import { authenticate, deauthenticate, getUser } from '../services/auth';

export const login = credentials => async dispatch => {
  const response = await authenticate(credentials);

  if (response.error) {
    dispatch({
      type: 'NOTIFY',
      message: { error: response.error }
    });
    return null;
  }
  dispatch({
    type: 'LOGIN',
    user: response
  });
};

export const logout = () => dispatch => {
  deauthenticate();
  dispatch({
    type: 'LOGOUT'
  });
};

export const autoLogin = () => dispatch => {
  const user = getUser();
  if (!user) {
    return null;
  }
  dispatch({
    type: 'LOGIN',
    user
  });
};
