const userReducer = (
  store = {
    users: [],
    dirty: true
  },
  action
) => {
  switch (action.type) {
    case 'UPDATE_USERS': {
      const users = [...action.users];
      return { ...store, users, dirty: false };
    }
    case 'UPDATE_USER': {
      const user = action.user;
      const users = [user, ...store.users.filter(u => u.id !== user.id)];
      return { ...store, users };
    }
    default:
      return store;
  }
};

export default userReducer;
