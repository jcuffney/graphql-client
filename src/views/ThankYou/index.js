import React, { memo } from 'react';
import { applyTo, pipe } from 'ramda';

export default applyTo(() => (
  <div>
    <h1>Thank You!</h1>
  </div>
), pipe(
  memo,
));
