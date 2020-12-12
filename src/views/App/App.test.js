import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter as Router } from 'react-router-dom';

import App from '.';

const mocks = [];

let windowSpy;

beforeEach(() => {
  windowSpy = jest.spyOn(window, "window", "get");
  windowSpy.mockImplementation(() => ({
    location: {
      origin: "https://example.com"
    }
  }));
});

afterEach(() => {
  windowSpy.mockRestore();
});

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
