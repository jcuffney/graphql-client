import React, { memo } from 'react';
import { applyTo, pipe } from 'ramda';
import { Link } from 'react-router-dom';

import { useQuery, gql } from '@apollo/client';

export const WHOAMI = gql(`
  {
    whoami {
      id
    }
  }
`);

export default applyTo(() => {
  const { data } = useQuery(WHOAMI);
  return (
    <div>
      <h1>Home</h1>
      <code>{ data }</code>
      <Link to="/signup">signup</Link>
    </div>
  );
}, pipe(
  memo,
));
