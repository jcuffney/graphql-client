import { render, screen } from '@testing-library/react';

import FAQ from '.';

test('renders learn react link', () => {
  render(
    <FAQ />
  );
  const linkElement = screen.getByText(/FAQ/i);
  expect(linkElement).toBeInTheDocument();
});
