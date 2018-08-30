import axios from 'axios';
const baseUrl = '/api/login';

let user = JSON.parse(window.localStorage.getItem('user'));

export const authenticate = async credentials => {
  const response = await axios.post(baseUrl, credentials, {
    validateStatus: null
  });
  if (response.status !== 200) {
    return {
      error: response.data.error
    };
  }
  const { data: user } = response;
  window.localStorage.setItem('user', JSON.stringify(user));

  return user;
};

export const getToken = () => user.token;

export const deauthenticate = () => {
  user = null;
  localStorage.removeItem('user');
  return user;
};

export const getUser = () => {
  return user;
};
