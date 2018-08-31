const userReducer = (store = [], action) => {
  switch (action.type) {
    case 'UPDATE_USERS': {
      const users = [...action.users];
      console.log(users);
      return users;
    }
    default:
      return store;
  }
};

export default userReducer;
