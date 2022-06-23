import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'src/app/App';
import rootSagas from 'src/core/saga/rootSaga';
import rootReducer from 'src/core/redux/rootReducer';
import { Provider } from 'react-redux';
import { ChakraProvider } from 'src/core/chakra/chakraProvider';
import createSagaMiddleWare from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import 'src/index.css';

function initialize() {
  const root = document.getElementById('root');
  const sagaMiddleWare = createSagaMiddleWare();
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, composeEnhancer(applyMiddleware(sagaMiddleWare)));

  sagaMiddleWare.run(rootSagas);

  ReactDOM.render(
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>,
    root
  );
}

initialize();
