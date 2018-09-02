import axios from 'axios';
import { getToken } from './auth';
const baseUrl = '/api/blogs';

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

export const like = async id => {
  const response = await axios.patch(`${baseUrl}/${id}/like`, {
    validateStatus: null
  });
  if (response.status !== 200) {
    return {
      error: response.data.error
    };
  }
  return response.data;
};

export const create = async blogObj => {
  const config = {
    ...getAuthorizationHeaders(),
    validateStatus: null
  };
  const response = await axios.post(baseUrl, blogObj, config);
  if (response.status !== 201) {
    return {
      error: response.data.error
    };
  }
  return response;
};
export const update = async (id, blogObj) => {
  const config = getAuthorizationHeaders();

  try {
    const response = await axios.put(`${baseUrl}/${id}`, blogObj, config);
    return response;
  } catch ({ response }) {
    return response;
  }
};

export const remove = async id => {
  const config = getAuthorizationHeaders();
  try {
    const response = await axios.delete(`${baseUrl}/${id}`, config);
    return response;
  } catch ({ response }) {
    return response;
  }
};

const getAuthorizationHeaders = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`
  }
});

export default { create, update, remove };
