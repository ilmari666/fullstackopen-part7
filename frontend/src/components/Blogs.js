import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlogs, likeBlog, createBlog, deleteBlog } from '../actions/blogs';
import Blog from './Blog';
import BlogForm from './BlogForm';
import Toggleable from './Toggleable';

const ListBlog = ({ title, author, id }) => (
  <div>
    <Link to={`/blogs/${id}`}>
      {title}, {author}
    </Link>
  </div>
);

class Blogs extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }
  deleteBlog = blog => {
    const { title, author } = blog;
    const message = `Are you sure you want to delete ${title} by ${author}?`;
    if (window.confirm(message)) {
      this.props.deleteBlog(blog);
    }
  };

  render() {
    const { blogs, likeBlog, user: loggedInUser } = this.props;
    return (
      <div>
        <h2>Blogs</h2>
        <Toggleable
          showLabel="New Blog"
          hideLabel="Cancel"
          ref={ref => (this.blogForm = ref)}
          controls
        >
          <BlogForm onSubmit={this.props.createBlog} />
        </Toggleable>
        {blogs.map(blog => (
          <ListBlog key={blog.id} {...blog} />
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({ blogs: state.blogs.blogs }),
  { getBlogs, likeBlog, createBlog, deleteBlog }
)(Blogs);
