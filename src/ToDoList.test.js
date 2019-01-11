import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ToDoList from './ToDoList';

// smoke test
it('renders without crashing', function() {
  shallow(<ToDoList />);
});

// snapshot test
it('matches snapshot', function() {
  let wrapper = shallow(<ToDoList />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
