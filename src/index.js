import React from 'react';
import ReactGA from 'react-ga';
// import * as serviceWorker from './serviceWorker';
import { createRoot } from 'react-dom/client';

import './assets/scss/index.scss';

import App from './App';

ReactGA.initialize(process.env.REACT_APP_GA);
ReactGA.pageview(window.location.pathname + window.location.search);


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// serviceWorker.unregister();
