const getAll = () => async dispatch => {
  const users = await dispatch({
    type: 'GET_USERS'
  });
};

const getSingle = id => async dispatch => {
  dispatch({
    type: 'GET_USER',
    id
  });
};

export default { getAll, getSingle };
