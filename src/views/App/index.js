import React, { memo } from 'react';
import { applyTo, path, pipe } from 'ramda';

import { useQuery, gql } from '@apollo/client';

import logo from './logo.svg';
import styles from './App.module.scss';

export const WHOAMI = gql(`
  {
    whoami {
      id
    }
  }
`);

export default applyTo(() => {
  const { data, error, loading } = useQuery(WHOAMI);
  console.log(data, error, loading); // eslint-disable-line
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>
          { path(['whoami', 'id'], data) }
        </p>
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
