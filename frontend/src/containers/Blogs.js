import { connect } from 'react-redux';
import { getBlogs, likeBlog, createBlog, deleteBlog } from '../actions/blogs';
import Blogs from '../components/Blogs';

export default connect(
    state => ({ blogs: state.blogs.blogs }),
    { getBlogs, likeBlog, createBlog, deleteBlog }
  )(Blogs);
  