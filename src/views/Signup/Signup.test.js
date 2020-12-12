import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import Signup, { WHOAMI } from '.';

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
      <Signup />
    </MockedProvider>
  );
  const linkElement = screen.getByText(/Signup/i);
  expect(linkElement).toBeInTheDocument();
});
