import React from 'react';
// import * as serviceWorker from './serviceWorker';
import { createRoot } from 'react-dom/client';

import './assets/scss/index.scss';

import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// serviceWorker.unregister();
