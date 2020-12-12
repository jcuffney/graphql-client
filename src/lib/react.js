/* eslint-disable no-shadow */
import { curry } from 'ramda';

// mutating
export const propTypes = curry((propTypes, component) => Object.assign(component, { propTypes }));

// mutating
// eslint-disable-next-line max-len
export const defaultProps = curry((defaultProps, component) => Object.assign(component, { defaultProps }));
