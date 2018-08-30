const blogReducer = (store = [], action) => {
  switch (action.type) {
    case 'UPDATE_BLOGS': {
      const blogs = [...action.blogs];
      blogs.sort((a, b) => a.likes < b.likes);
      return [...blogs];
    }
    case 'UPDATE_BLOG': {
      const blog = action.blog;
      const blogs = [...store.filter(b => b.id !== blog.id), blog];
      blogs.sort((a, b) => a.likes < b.likes);
      return [...blogs];
    }
    default:
      return store;
  }
};

export default blogReducer;
