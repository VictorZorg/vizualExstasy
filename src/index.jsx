import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('app')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <BrowserRouter>
        <NextApp/>
      </BrowserRouter>,
      document.getElementById('app')
    );
  });
}
