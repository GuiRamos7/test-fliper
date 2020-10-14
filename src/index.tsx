import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyled from 'styles/global';
import { ApolloProvider } from '@apollo/client';
import client from 'api/client';

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
      <GlobalStyled />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root'),
);
