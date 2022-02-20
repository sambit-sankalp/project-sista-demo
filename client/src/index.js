import React from 'react';
import ReactDOM from 'react-dom';

import App from './views/App';

import Logo from './static/logo.svg';
import './styles.css';

ReactDOM.render(
    <App logo={Logo} />,
  document.getElementById('root')
);
