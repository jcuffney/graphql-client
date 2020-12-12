import { render, screen } from '@testing-library/react';

import NotFound from '.';

test('renders learn react link', () => {
  render(
    <NotFound />
  );
  const linkElement = screen.getByText(/Not Found/i);
  expect(linkElement).toBeInTheDocument();
});
