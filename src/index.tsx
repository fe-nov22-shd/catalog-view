import { HashRouter as Router } from 'react-router-dom';
import './index.scss';
import { App }  from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleStorageProvider } from '../src/components/Context/Context'

import { ThemeProvider} from '@mui/material/styles';
import { theme } from './utils/muiTheme'

ReactDOM.render(
  <LocaleStorageProvider>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </LocaleStorageProvider>,
  document.getElementById('root'),
);
