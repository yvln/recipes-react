import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import apiMiddleware from './middlewares/apiMiddleware'
import reducers from './reducers'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(apiMiddleware, thunk),
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
