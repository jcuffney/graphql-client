import React, { memo } from 'react';
import { applyTo, pipe } from 'ramda';
import fetch from 'unfetch';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  HttpLink,
} from '@apollo/client';
import { onError } from 'apollo-link-error';
// import { useAuth0 } from "@auth0/auth0-react";

const httpLink = new HttpLink({
  uri: 'https://api.cuffney.com/v1/graphql',
  fetch,
});

const authMiddleware = new ApolloLink(async (operation, forward) => {
  // const { getAccessTokenSilently } = useAuth0();
  // const accessToken = await getAccessTokenSilently();
  operation.setContext({
    headers: {
      // authorization: `Bearer ${ accessToken }`,
      authorization: 'allow',
    },
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: ApolloLink.from([
    authMiddleware,
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) => {
          // eslint-disable-next-line
          console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
        });
      }
      // eslint-disable-next-line
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    httpLink,
  ]),
  cache: new InMemoryCache(),
});

export default applyTo(({ children }) => (
  <ApolloProvider client={client}>
    { children}
  </ApolloProvider>
), pipe(
  memo,
));
