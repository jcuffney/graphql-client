import { render, screen } from '@testing-library/react';

import Contact from '.';

test('renders learn react link', () => {
  render(
    <Contact />
  );
  const linkElement = screen.getByText(/Contact/i);
  expect(linkElement).toBeInTheDocument();
});
