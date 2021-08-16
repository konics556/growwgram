import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import {
  applyMiddleware,
  createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import thunk from 'redux-thunk';

import App from './App';
import reducers from './store/reducers';

// const store = createStore(reducers, applyMiddleware(thunk, reduxPackMiddleware));

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk, reduxPackMiddleware),
  // other store enhancers if any
));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);