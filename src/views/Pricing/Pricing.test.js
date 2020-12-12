import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import Pricing, { SEARCH_PLANS } from '.';

const mocks = [
  {
    request: {
      query: SEARCH_PLANS,
      variables: {},
    },
    result: {
      data: {
        searchPlans: {
          edges: [{
            node: {
              id: '1234'
            },
          }],
        },
      },
    },
  },
];

test('renders learn react link', () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Pricing />
    </MockedProvider>
  );
  const linkElement = screen.getByText(/Pricing/i);
  expect(linkElement).toBeInTheDocument();
});
