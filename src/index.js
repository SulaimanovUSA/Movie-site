import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './other/reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './store/index'

const Global = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Global />
    <App />
  </Provider>
);

reportWebVitals();
