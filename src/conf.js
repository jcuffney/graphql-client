const {
  REACT_APP_NODE_ENV: NODE_ENV,
  REACT_APP_API_HOST: API_HOST,
  REACT_APP_STRIPE_PUBLISHABLE_KEY: STRIPE_PUBLISHABLE_KEY,
  REACT_APP_SENTRY_DSN: SENTRY_DSN,
} = process.env;

export const stripe = window.Stripe(STRIPE_PUBLISHABLE_KEY); // eslint-disable-line

export default {
  stripe,
  API_HOST,
  NODE_ENV,
  SENTRY_DSN,
};
