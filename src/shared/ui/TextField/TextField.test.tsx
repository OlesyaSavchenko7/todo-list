import { render, fireEvent } from '@testing-library/react';
import Input from './TextField';

describe('Input', () => {
  test('renders the input with the correct value and placeholder', () => {
    const value = 'Test Value';
    const placeholder = 'Test Placeholder';
    const { getByPlaceholderText } = render(<Input value={value} onChange={() => {}} placeholder={placeholder} />);
    const input = getByPlaceholderText(placeholder) as HTMLInputElement;
    expect(input.value).toBe(value);
  });

  test('calls the onChange function when the input value changes', () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(<Input value="" onChange={onChange} placeholder="Test Placeholder" />);
    const input = getByPlaceholderText('Test Placeholder') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Test Value' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});