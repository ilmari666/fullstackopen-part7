import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import notificationReducer from './reducers/notification';
import authenticationReducer from './reducers/auth';
import blogReducer from './reducers/blogs';

const reducer = combineReducers({
  notification: notificationReducer,
  auth: authenticationReducer,
  blogs: blogReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
