import 'babel-polyfill';
import Promise from 'promise-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createBrowserHistory, createHashHistory } from 'history';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, autoRehydrate } from 'redux-persist';

import styles from './global.scss';

const sagaMiddleware = createSagaMiddleware();

const history = createBrowserHistory({
  basename: '',
  hashType: 'slash',
});

import rootReducer from './reducers';

const composeEnhancers = (process.env.NODE_ENV == 'development') ? composeWithDevTools : compose;
const middleware = [ routerMiddleware(history), sagaMiddleware ];
const store = createStore(
  connectRouter(history)(rootReducer),
  undefined,
  composeEnhancers(
    applyMiddleware(...middleware),
  ),
);


import rootSaga from './sagas';
sagaMiddleware.run(rootSaga);

const render = () => ReactDOM.render(
    <Provider store={store}>
      <App history={history}/>
    </Provider>,
    document.getElementById('root')
);

render();
