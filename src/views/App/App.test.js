import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';

import App from '.';

jest.mock('conf', () => ({}));

const mocks = [];

test('renders learn react link', () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Router>
        <App />
      </Router>
    </MockedProvider>
  );
  expect(true).toBeTruthy();
});
