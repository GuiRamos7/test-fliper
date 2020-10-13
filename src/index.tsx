import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyled from 'styles/global';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyled />
  </React.StrictMode>,
  document.getElementById('root'),
);
