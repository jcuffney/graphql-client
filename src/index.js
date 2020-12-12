import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import App from './views/App';
import reportWebVitals from './reportWebVitals'; // eslint-disable-line

import ApolloProvider from './components/ApolloProvider';

import './index.scss';
import 'fontsource-roboto';

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <ApolloProvider>
        <Router>
          <App />
        </Router>
      </ApolloProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root'), // eslint-disable-line no-undef
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
