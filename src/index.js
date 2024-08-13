import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
// import * as serviceWorker from './serviceWorker';

import './assets/scss/index.scss';

import App from './App';

ReactGA.initialize(process.env.REACT_APP_GA);
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// serviceWorker.unregister();
