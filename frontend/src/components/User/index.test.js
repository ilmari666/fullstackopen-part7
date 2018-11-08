import React from 'react';
import renderer from 'react-test-renderer';

import Component from './index.js';

it('renders correctly', () => {
  const tree = renderer
    .create(<Component getUser={()=>{}}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
