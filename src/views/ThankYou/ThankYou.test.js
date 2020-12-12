import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter as Router } from 'react-router-dom';

import Home, { WHOAMI } from '.';

const mocks = [
  {
    request: {
      query: WHOAMI,
      variables: {},
    },
    result: {
      data: {
        whoami: {
          id: '1',
        },
      },
    },
  },
];

test('renders', () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Router>
        <Home />
      </Router>
    </MockedProvider>
  );
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
