import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import App from './views/App';
import reportWebVitals from './reportWebVitals'; // eslint-disable-line
import ApolloProvider from './components/ApolloProvider';
import theme from './theme';
import GlobalStyles from './GlobalStyles';
import config from './conf';

import './index.scss';
import 'fontsource-roboto';

Sentry.init({
  dsn: config.SENTRY_DSN,
  autoSessionTracking: true,
  integrations: [
    new Integrations.BrowserTracing(),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <StylesProvider injectFirst>
        <ApolloProvider>
          <Router>
            <App />
          </Router>
        </ApolloProvider>
      </StylesProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'), // eslint-disable-line no-undef
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
