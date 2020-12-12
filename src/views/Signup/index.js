import React, { memo } from 'react';
import { applyTo, path, pipe } from 'ramda';

import { useQuery, gql } from '@apollo/client';

import styles from './Signup.module.scss';

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
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <p>
          { path(['whoami', 'id'], data) }
        </p>
        <p>Signup</p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}, pipe(
  memo,
));
