import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import './index.scss';
import { App }  from './App';
import React from 'react';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
