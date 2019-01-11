import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Todo from './Todo';

// smoke test
it('renders without crashing', function() {
  shallow(<Todo />);
});

// snapshot test
it('matches snapshot', function() {
  let wrapper = shallow(<Todo />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
