import React, { memo } from 'react';
import { applyTo, path, pipe } from 'ramda';

import { useQuery, gql } from '@apollo/client';

// import styles from './Signup.module.scss';

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
      <p>
        { path(['whoami', 'id'], data) }
      </p>
      <p>Signup</p>
    </div>
  );
}, pipe(
  memo,
));
