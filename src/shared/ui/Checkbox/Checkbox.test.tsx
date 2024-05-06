import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  test('renders the checkbox with the correct checked state', () => {
    const checked = true;
    const { getByRole } = render(<Checkbox checked={checked} onChange={() => {}} />);
    const checkbox = getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(checked);
  });

  test('calls the onChange function when the checkbox is clicked', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<Checkbox checked={false} onChange={onChange} />);
    const checkbox = getByRole('checkbox') as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});