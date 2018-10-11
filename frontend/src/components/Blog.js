import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Overlay, Block, Button, Backdrop, Portal, styled } from 'reakit';

import { deleteBlog, getBlog, likeBlog } from '../actions/blogs';
import Comments from './Comments';

const BlogWrapper = styled.div`
  border-style: solid;
  width: 100%;
`;

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likes: props.likes };
  }
  componentDidMount() {
    if (!this.props.blog) {
      this.props.getBlog(this.props.id);
    }
  }
  onLiked = e => {
    e.preventDefault();
    this.props.likeBlog(this.props.id);
  };

  onDelete = e => {
    e.preventDefault();
    this.props.deleteBlog(this.props.blog);
  };

  render() {
    if (!this.props.blog) {
      return null;
    }
    const { title, author, url, user, likes, comments, id } = this.props.blog;
    const username = user.username;
    return (
      <div>
        <div className="blogHeader">
          {title} {author}
        </div>

        <div>
          <div className="blogInfo">
            URL: <a href={url}>{url}</a> <br />
            Created by:{' '}
            <Link to={`/users/${user._id}`}>
              {username}
              <br />
            </Link>
            {likes} likes
            <Button onClick={this.onLiked}>Like</Button>
          </div>
          {!user || username === this.props.loggedInUserName ? (
            <Overlay.Container>
              {overlay => (
                <Block>
                  <Button backgroundColor="red" as={Overlay.Show} {...overlay}>Delete</Button>
                  <Backdrop as={[Portal, Overlay.Hide]} {...overlay} />
                  <Overlay as={Portal} {...overlay}>
                    { console.log(overlay) || null }
                    Are you sure you want to remove "{title}"?
                    <Button backgroundColor="gray" onClick={overlay.hide}>Cancel</Button>
                    <Button backgroundColor="red" onClick={e=>{
                      this.onDelete(e);
                      overlay.hide();
                    }}>Confirm</Button>
                  </Overlay>
                </Block>
              )}
            </Overlay.Container>
          ) : null}
        </div>

        <Comments comments={comments} id={id} />
      </div>
    );
  }
}

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
    deleteBlog,
    getBlog,
    likeBlog
  }
)(Blog);
