import React from 'react';
import { Link } from 'react-router-dom';
import { Overlay, Block, Button, Backdrop, Portal, styled } from 'reakit';
import { func } from 'prop-types';
import Comments from '../Comments';

const PROP_TYPES = {
  deleteBlog: func.isRequired,
  getBlog: func.isRequired,
  likeBlog: func.isRequired,
};


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
    this.props.likeBlog(this.props.blog);
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
          <h1>{title}</h1> {author}
        </div>

        <div>
          <div className="blogInfo">
            URL: <a href={url}>{url}</a> <br />
            Added by:{' '}
            <Link to={`/users/${user._id}`}>
              {username}
              <br />
            </Link>
            {likes} likes
            <Button className="like" margin={10} onClick={this.onLiked}>Like</Button>
          </div>
          {!user || username === this.props.loggedInUserName ? (
            <Overlay.Container>
              {overlay => (
                <Block>
                  <Button backgroundColor="red" as={Overlay.Show} {...overlay}>Delete</Button>
                  <Backdrop as={[Portal, Overlay.Hide]} {...overlay} />
                  <Overlay as={Portal} {...overlay}>
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

        <Comments comments={comments} id={id} commentBlog={this.props.commentBlog}/>
      </div>
    );
  }
}

Blog.propTypes = PROP_TYPES;
export default Blog;
