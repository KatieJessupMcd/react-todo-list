import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EditToDoForm from './EditToDoForm';

// smoke test
it('renders without crashing', function() {
  shallow(<EditToDoForm />);
});

// snapshot test
it('matches snapshot', function() {
  let wrapper = shallow(<EditToDoForm />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
