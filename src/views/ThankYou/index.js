import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { applyTo, pipe } from 'ramda';
import { propTypes, defaultProps } from 'lib/react';

export default applyTo(() => (
  <div>
    <h1>Thank You!</h1>
  </div>
), pipe(
  memo,
  propTypes({}),
  defaultProps({}),
));
