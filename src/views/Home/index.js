import React, { memo, useCallback } from 'react';
import { applyTo, pipe, path } from 'ramda';
import { Link } from 'react-router-dom';

import { useQuery, gql, useMutation } from '@apollo/client';
import { Button } from '@material-ui/core';
import { stripe } from 'conf';

export const WHOAMI = gql(`
  {
    whoami {
      id
    }
  }
`);

export const CREATE_CHECKOUT_SESSION = gql(`
  mutation CreateCheckoutSession($input: CreateCheckoutSessionInput!) {
    createCheckoutSession(input: $input) {
      sessionId
    }
  }
`);

export default applyTo(() => {
  const { data } = useQuery(WHOAMI);
  const [createCheckoutSession] = useMutation(CREATE_CHECKOUT_SESSION);

  const handleResult = useCallback(async () => {
    console.log('Im Handling It...'); // eslint-disable-line no-console
  });

  const handleCheckout = useCallback(async () => {
    await createCheckoutSession({
      variables: {
        input: {
          priceId: 'price_1HiBgpCka2qGDa8PWLxk0Lnr',
          successUrl: `${window.location.origin}/thank-you`,
          cancelUrl: `${window.location.origin}/`,
        },
      },
    }).then(path(['data', 'createCheckoutSession', 'sessionId']))
      .then((sessionId) => stripe.redirectToCheckout({ sessionId })
        .then(handleResult));
  });

  return (
    <div>
      <h1>Home</h1>
      <code>{ JSON.stringify(data, null, 2) }</code>
      <Link to="/signup">signup</Link>
      <Button onClick={handleCheckout}>Checkout</Button>
    </div>
  );
}, pipe(
  memo,
));
