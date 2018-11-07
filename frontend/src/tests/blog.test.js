import React from 'react';
import { shallow, mount, render } from 'enzyme';
import MockRouter from 'react-mock-router';
import Blog from '../components/Blog';

const emptyHandlers = {
  commentBlog: ()=>{},
  deleteBlog: ()=>{},
  getBlog: ()=>{},
  likeBlog: ()=>{},
};

const dummyBlog = {
    title: 'Komponenttitestaus tapahtuu jestillä ja enzymellä',
    author: 'Mr. Man',
    likes: 31,
    url: 'http://sokeri.com',
    id: '333',
    user: '',
    comments:[]
};

const props = {
  blog: dummyBlog,
  ...emptyHandlers
};

const Router = MockRouter;

describe('<Blog />', () => {
  it('renders title', () => {
    const component = mount(<Router><Blog blog={dummyBlog} {...props} /></Router>);
    const titleDiv = component.find('.blogHeader');
    expect(titleDiv.text()).toContain(dummyBlog.title);
  });
  /*

  it('blog details are not rendered initially', () => {
    const mockHandler = jest.fn();
    const component = mount(<Router><Blog {...props} onLiked={mockHandler} /></Router>);
    const infoElement = component.find('.blogInfo');
    expect(infoElement.length).toBe(0);
  
  it('blog details are rendered after clicking the header', () => {
    const mockHandler = jest.fn();
    const component = mount(<Router><Blog {...props} onLiked={mockHandler} /></Router>);
    const headerElement = component.find('.blogHeader');
    headerElement.simulate('click');
    component.update();
    const infoElement = component.find('.blogInfo');
    expect(infoElement.length).toBe(1);
  });
});
*/
  it('onLike handler gets triggered multiple times', () => {
    const mockHandler = jest.fn();
    const props2 = {...props, likeBlog:mockHandler};
    const component = mount(<Router><Blog blog={dummyBlog} {...props} likeBlog={mockHandler}/></Router>);
    const titleDiv = component.find('.blogHeader');
    const contentDiv = component.find('.blogInfo');
    const button =  contentDiv.find('button');
    button.simulate('click');
    button.simulate('click');
    expect(mockHandler.mock.calls.length).toBe(2);
  });
});
