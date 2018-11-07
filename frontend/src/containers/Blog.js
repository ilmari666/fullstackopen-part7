import { connect } from 'react-redux';
import Blog from '../components/Blog';
import { commentBlog, deleteBlog, getBlog, likeBlog } from '../actions/blogs';

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    const blogs = state.blogs.blogs;
    const blog = blogs.find(blog => blog.id === id);
    return {
      blog,
      id,
      loggedInUserName: state.auth.username
    };
  };
  
  export default connect(
    mapStateToProps,
    {
      commentBlog,
      deleteBlog,
      getBlog,
      likeBlog
    }
  )(Blog);

  