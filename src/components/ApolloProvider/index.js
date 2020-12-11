import React, { memo } from 'react';
import { applyTo, pipe } from 'ramda';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.cuffney.com/v1/graphql',
  cache: new InMemoryCache(),
});

export default applyTo(({ children }) => (
  <ApolloProvider client={client}>
    { children}
  </ApolloProvider>
), pipe(
  memo,
));
