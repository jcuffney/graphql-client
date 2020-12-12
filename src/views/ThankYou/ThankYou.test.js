import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter as Router } from 'react-router-dom';

import ThankYou from '.';

const mocks = [];

test('renders', () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Router>
        <ThankYou />
      </Router>
    </MockedProvider>
  );
  const linkElement = screen.getByText(/Thank You/i);
  expect(linkElement).toBeInTheDocument();
});
