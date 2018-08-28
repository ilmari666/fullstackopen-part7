let timeout;

const notify = (message, duration = 10) => dispatch => {
  console.log('notify', message);
  clearTimeout(timeout);
  dispatch({
    type: 'NOTIFY',
    message
  });
  if (message !== '') {
    setTimeout(() => {
      dispatch({
        type: 'NOTIFY',
        message: ''
      });
    }, duration * 1000);
  }
};

export default notify;
