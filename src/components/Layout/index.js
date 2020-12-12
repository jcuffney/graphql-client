import React, { memo } from 'react';
import { applyTo, pipe } from 'ramda';

import styles from './Layout.module.scss';

export default applyTo(({ children }) => (
  <div className={styles.layout}>
    { children}
  </div>
), pipe(
  memo,
));
