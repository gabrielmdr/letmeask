import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './services/firebase';
import './services/i18n';

import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
