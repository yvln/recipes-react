import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , compose, applyMiddleware } from 'redux'

import reducers from './reducers'
import apiMiddleware from './middlewares/apiMiddleware'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(apiMiddleware),
    process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();