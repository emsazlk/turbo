import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { name as appName } from '../../app.json';
import reducer from './reducer';
import Sagas from './sagas';

const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    name: appName
  }) : compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, {}, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(Sagas);

const persistor = persistStore(store);

export { store as default, persistor };
