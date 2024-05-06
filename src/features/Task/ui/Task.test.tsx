import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Task from './Task';

describe('Task component', () => {
  const task = {
    id: 1,
    name: 'Task 1',
    isDone: false,
    toggleDone: jest.fn(),
  };

  const onRemoveTask = jest.fn();

  test('renders task name and checkbox', () => {
    const { getByText, getByRole } = render(
      <Task task={task} onRemoveTask={onRemoveTask} />
    );

    expect(getByText(task.name)).toBeInTheDocument();
    expect(getByRole('checkbox')).toBeInTheDocument();
  });

  test('calls toggleDone when checkbox is clicked', () => {
    const { getByRole } = render(<Task task={task} onRemoveTask={onRemoveTask} />);

    fireEvent.click(getByRole('checkbox'));

    expect(task.toggleDone).toHaveBeenCalledTimes(1);
  });

  test('calls onRemoveTask when button is clicked', () => {
    const { getByText } = render(<Task task={task} onRemoveTask={onRemoveTask} />);

    fireEvent.click(getByText('Удалить'));

    expect(onRemoveTask).toHaveBeenCalledTimes(1);
    expect(onRemoveTask).toHaveBeenCalledWith(task.id);
  });

  test('updates task name style when task is done', () => {
    task.isDone = true;

    const { getByText } = render(<Task task={task} onRemoveTask={onRemoveTask} />);

    expect(getByText(task.name)).toHaveStyle({ textDecoration: 'line-through' });
  });
});