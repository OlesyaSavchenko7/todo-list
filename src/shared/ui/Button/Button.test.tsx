import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
    test('renders the button with the correct title', () => {
    const title = 'Test Button';
    const onClick = jest.fn();
    render(<Button title={title} onClick={onClick} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test('calls the onClick function when the button is clicked', () => {
    const onClick = jest.fn();
    const title = 'Test Button';
    const { getByText } = render(<Button title={title} onClick={onClick} />);
    fireEvent.click(getByText(title));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});