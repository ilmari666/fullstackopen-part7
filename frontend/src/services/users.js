import axios from 'axios';
const baseUrl = '/api/users';
const getAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response;
  } catch ({ response }) {
    return response;
  }
};

const get = async id => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response;
  } catch ({ response }) {
    return response;
  }
};

export default {
  getAll
};
