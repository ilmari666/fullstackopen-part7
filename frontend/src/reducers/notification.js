const notificationReducer = (store = '', action) => {
  if (action.type === 'NOTIFY') {
    return action.message;
  } else if (action.notification) {
    return action.notification;
  }
  return store;
};

export default notificationReducer;
