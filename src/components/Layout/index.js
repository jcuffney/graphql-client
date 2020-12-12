import React, { memo } from 'react';
import { applyTo, pipe } from 'ramda';

import Header from './components/Header';
import Footer from './components/Footer';

import styles from './Layout.module.scss';

export default applyTo(({ children }) => (
  <div className={ styles.site }>
    <Header />
    <main>
      {children}
    </main>
    <Footer className={ styles.footer } />
  </div>
), pipe(
  memo,
));
