const notificationReducer = (store = '', action) => {
  if (action.type === 'NOTIFY') {
    return action.message;
  }
  return store;
};

export default notificationReducer;
