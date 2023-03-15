import { HashRouter as Router } from 'react-router-dom';
import './index.css';
import { App }  from './App';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
