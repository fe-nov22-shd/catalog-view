import { HashRouter as Router } from 'react-router-dom';
import './index.scss';
import { App }  from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleStorageProvider } from '../src/components/Context/Context'

ReactDOM.render(
<LocaleStorageProvider>
  <Router>
    <App />
  </Router>
  </LocaleStorageProvider>,
  document.getElementById('root'),
);
