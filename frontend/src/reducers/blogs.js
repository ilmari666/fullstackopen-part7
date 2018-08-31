const compareLikes = (a, b) => a.likes < b.likes;

const blogReducer = (store = [], action) => {
  switch (action.type) {
    case 'UPDATE_BLOGS': {
      const blogs = [...action.blogs];
      blogs.sort(compareLikes);
      return [...blogs];
    }
    case 'UPDATE_BLOG': {
      const blog = action.blog;
      const blogs = [...store.filter(b => b.id !== blog.id), blog];
      blogs.sort(compareLikes);
      return [...blogs];
    }
    case 'CREATE_BLOG': {
      const blogs = store.concat(action.blog).sort(compareLikes);
      return blogs;
    }
    case 'DELETE_BLOG': {
      const id = action.id;
      const blogs = store.filter(b => b.id !== id);
      return blogs;
    }
    default:
      return store;
  }
};

export default blogReducer;
