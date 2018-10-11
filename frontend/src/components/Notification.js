import React from 'react';
import { styled } from 'reakit';
import { connect } from 'react-redux';

const NotificationBox = styled.div`
  border-style: solid;
  color: ${props => (props.error ? 'red' : 'green')};
  width: 100%;
`;

const Notification = props => {
  const { notification: message } = props;
  if (!message) {
    return <div />;
  }
  const { error } = message;
  if (error) {
    return <NotificationBox error>{error}</NotificationBox>;
  }
  return <NotificationBox>{message}</NotificationBox>;
};

const mapStateToProps = state => {
  return {
    notification: state.notification
  };
};

export default connect(mapStateToProps)(Notification);
