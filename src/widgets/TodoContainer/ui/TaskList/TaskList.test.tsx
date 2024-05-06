import React from 'react';
import { render } from '@testing-library/react';
import TaskList from './TaskList';

describe('TaskList component', () => {
  test('renders tasks', () => {
    const tasks = new Map([
      ['1', { id: '1', name: 'Task 1' }],
      ['2', { id: '2', name: 'Task 2' }],
    ]);

    const onRemoveTask = jest.fn();
    const { getByText } = render(<TaskList tasks={tasks} onRemoveTask={onRemoveTask} />);
    const iterVal = tasks.values();
    expect(getByText(iterVal.next().value.name)).toBeInTheDocument();
    expect(getByText(iterVal.next().value.name)).toBeInTheDocument();

  });
});