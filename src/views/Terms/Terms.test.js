import { render, screen } from '@testing-library/react';

import Terms from '.';

test('renders learn react link', () => {
  render(
    <Terms />
  );
  const linkElement = screen.getByText(/Terms & Conditions/i);
  expect(linkElement).toBeInTheDocument();
});
