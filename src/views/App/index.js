import React, { memo } from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import { applyTo, pipe } from 'ramda';

export default applyTo(({}) => (
  <div className={ styles.App }>
    <header className={ styles.AppHeader }>
      <img src={logo} className={ styles.AppLogo } alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className={ styles.AppLink }
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
), pipe(
  memo,
));
