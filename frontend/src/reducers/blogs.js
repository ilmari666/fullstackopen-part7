const compareLikes = (a, b) => a.likes < b.likes;

const blogReducer = (store = { blogs: [], dirty: true }, action) => {
  switch (action.type) {
    case 'UPDATE_BLOGS': {
      const blogs = [...action.blogs];
      blogs.sort(compareLikes);
      return { ...store, blogs, dirty: false };
    }
    case 'UPDATE_BLOG': {
      const id = action.id;
      const update = action.content;
      const blog = store.blogs.find(blog => blog.id === id) || {};
      const updatedBlog = { ...blog, ...update };
      const blogs = [...store.blogs.filter(b => b.id !== id), updatedBlog];
      blogs.sort(compareLikes);
      return { ...store, blogs };
    }
    case 'CREATE_BLOG': {
      const blogs = store.blogs.concat(action.blog).sort(compareLikes);
      return { ...store, blogs };
    }
    case 'DELETE_BLOG': {
      const id = action.id;
      const blogs = store.blogs.filter(b => b.id !== id);
      return { ...store, blogs };
    }
    default:
      return store;
  }
};

export default blogReducer;
