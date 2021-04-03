import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import reducer from './Store/Reducers';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const store = createStore(reducer);

window.store = store;

ReactDOM.render(
  <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>,
  document.getElementById('root')
);

reportWebVitals();
