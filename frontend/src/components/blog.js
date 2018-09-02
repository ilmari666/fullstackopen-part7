import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Toggleable from './Toggleable';

const BlogWrapper = styled.div`
  border-style: solid;
  width: 100%;
`;

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likes: props.likes };
  }

  toggleContent = e => {
    if (e) {
      e.preventDefault();
    }
    this.content.toggle();
  };

  onLiked = e => {
    // this is terrible
    e.preventDefault();
    const likes = this.state.likes;
    const { url, author, user, title, id } = this.props;
    this.props.onLiked({ likes, url, author, user, title, id });
    this.setState({ likes: likes + 1 });
  };

  onDelete = e => {
    e.preventDefault();
    const { author, user, title, id } = this.props;
    this.props.onDelete({ author, user, title, id });
  };
  render() {
    const { title, author, url, user } = this.props;
    const username = user ? user.username : '';
    return (
      <div>
        <div className="blogHeader" onClick={this.toggleContent.bind(this)}>
          {title} {author}
        </div>

        <div>
          <div className="blogInfo">
            URL: <a href={url}>{url}</a> <br />
            Created by: {username} <br />
            {this.state.likes} likes
            <button onClick={this.onLiked}>Like</button>
          </div>
          {!user || username === this.props.loggedInUserName ? (
            <button onClick={this.onDelete}>Delete</button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default connect(state => ({ loggedInUserName: state.auth.username }))(
  Blog
);
