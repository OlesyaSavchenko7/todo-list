import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout';

describe('Layout', () => {
  test('renders children component', () => {
    const childComponent = <div>Child component</div>;
    const { getByText } = render(<Layout>{childComponent}</Layout>);
    expect(getByText('Child component')).toBeInTheDocument();
  });
});