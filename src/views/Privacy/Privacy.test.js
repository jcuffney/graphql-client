import { render, screen } from '@testing-library/react';

import Privacy from '.';

test('renders learn react link', () => {
  render(
    <Privacy />
  );
  const linkElement = screen.getByText(/Privacy Policy/i);
  expect(linkElement).toBeInTheDocument();
});
