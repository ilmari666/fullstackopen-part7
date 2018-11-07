import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Overlay, Block, Button, Backdrop, Portal } from 'reakit';
import { getBlogs, likeBlog, createBlog, deleteBlog } from '../../actions/blogs';
import BlogForm from '../BlogForm';
import Toggleable from '../Toggleable';

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
  render() {
    const { blogs, likeBlog, user: loggedInUser } = this.props;
    return (
      <div>
        <h1>Blogs</h1>
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
