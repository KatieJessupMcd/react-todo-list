import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NewToDoForm from './NewToDoForm';
import ToDoList from './ToDoList';

// smoke test
it('renders without crashing', function() {
  shallow(<NewToDoForm />);
});

// snapshot test
it('matches snapshot', function() {
  let wrapper = shallow(<NewToDoForm />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

it('adds a new todolist list element successfully', function() {
  let wrapper = shallow(<NewToDoForm />);
  const button = wrapper.find('#add-btn');
  button.simulate('submit');
  expect(wrapper.state().task).toBe('');
  // This is how to target the "img" element
  let wrapper2 = shallow(<ToDoList />);
  wrapper2.setState({ task: 'banana' });
  const list = wrapper2.find('#to-do-list');
  expect(list.html()).toBe('<ol id="to-do-list"></ol>');
});
