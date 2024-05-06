import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskInput from './TaskInput';

describe('TaskInput', () => {
  const onAddTask = jest.fn();
  const props = {
    onAddTask,
    inputPlaceholder: 'Введите новую задачу',
    addBtnTitle: 'Добавить задачу',
  };

  test('renders input field and button', () => {
    const { getByPlaceholderText, getByText } = render(<TaskInput {...props} />);
    expect(getByPlaceholderText(props.inputPlaceholder)).toBeInTheDocument();
    expect(getByText(props.addBtnTitle)).toBeInTheDocument();
  });

  test('disables add button when input field is empty', () => {
    const { getByText } = render(<TaskInput {...props} />);
    const addButton = getByText(props.addBtnTitle);
    expect(addButton).toBeDisabled();
  });

  test('enables add button when input field is not empty', () => {
    const { getByPlaceholderText, getByText } = render(<TaskInput { ...props} />);
    const inputField = getByPlaceholderText(props.inputPlaceholder);
    fireEvent.change(inputField, { target: { value: 'New task' } });
    const addButton = getByText(props.addBtnTitle);
    expect(addButton).not.toBeDisabled();
  });

  test('calls onAddTask when button is clicked with non-empty input', () => {
    const { getByPlaceholderText, getByText } = render(<TaskInput { ...props} />);
    const inputField = getByPlaceholderText(props.inputPlaceholder);
    fireEvent.change(inputField, { target: { value: 'New task' } });
    const addButton = getByText(props.addBtnTitle);
    fireEvent.click(addButton);
    expect(onAddTask).toHaveBeenCalledTimes(1);
    expect(onAddTask).toHaveBeenCalledWith('New task');
  });

  test('does not call onAddTask when button is clicked with empty input', () => {
    const { getByPlaceholderText, getByText } = render(<TaskInput { ...props} />);
    const inputField = getByPlaceholderText(props.inputPlaceholder);
    fireEvent.change(inputField, { target: { value: '' } });
    const addButton = getByText(props.addBtnTitle);
    fireEvent.click(addButton);
    expect(onAddTask).not.toHaveBeenCalled();
  });
});