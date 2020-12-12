import React, { memo } from 'react';
import { pipe, applyTo } from 'ramda';

export default applyTo(() => (
  <div>
    <h1>Not Found. 404.</h1>
  </div>
), pipe(
  memo,
));
