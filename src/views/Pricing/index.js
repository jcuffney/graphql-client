import React, { memo } from 'react';
import { applyTo, pathOr, pipe } from 'ramda';

import { useQuery, gql } from '@apollo/client';

// import styles from './Pricing.module.scss';

export const SEARCH_PLANS = gql(`
  query SearchPlans($input: SearchPlansInput!) {
    searchPlans(input: $input) {
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviouspage
      }
      edges {
        cursor
        node {
          id
          name
          price
          trialPeriodDays
          currency
          productId
        }
      }
    }
  }
`);

export default applyTo(() => {
  const { data } = useQuery(SEARCH_PLANS, { variables: { input: { first: 3 } }});
  const plans = pathOr([], ['searchPlans', 'edges'], data);
  return (
    <div>
      <p>Pricing</p>
      <code>{ JSON.stringify(plans, null, 2) }</code>
    </div>
  );
}, pipe(
  memo,
));
