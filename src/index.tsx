import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import Style from './index.module.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
