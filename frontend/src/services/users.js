import axios from 'axios';
const baseUrl = '/api/users';

export const getAll = async () => {
  const response = await axios.get(baseUrl, { validateStatus: null });
  if (response.status !== 200) {
    return {
      error: response.data.error
    };
  }
  return response.data;
};

export const get = async id => {
  const response = await axios.get(`${baseUrl}/${id}`, {
    validateStatus: null
  });
  if (response.status !== 200) {
    return {
      error: response.data.error
    };
  }
  return response.data;
};

export default {
  getAll
};
