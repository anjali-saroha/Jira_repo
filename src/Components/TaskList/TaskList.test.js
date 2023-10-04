import React from 'react';
import { shallow,mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import TaskList from './TaskList';  

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  clear() {
    this.store = {};
  }
};

global.localStorage = new LocalStorageMock;


describe('<TaskList />', () => {

  const mockTasks = [
    { id: 1, name: "Test Task 1", description: "Test Description 1", deadline: "2023-01-01" },

  ];
  
  localStorage.setItem('tasks', JSON.stringify(mockTasks));

  it('shows "No Task Found" message when no tasks are present', () => {
    Storage.prototype.getItem = jest.fn(() => null);

    const wrapper = shallow(
        <TaskList />
    );

    expect(wrapper.text()).toContain('No Task Found, Create New Task');
  });

});
