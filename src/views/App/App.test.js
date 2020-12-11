import { ApolloProvider } from '@apollo/client';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import App, { WHOAMI } from '.';

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

test('renders learn react link', () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
