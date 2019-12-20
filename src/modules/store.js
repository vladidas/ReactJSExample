import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './rootReducer'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
  applyMiddleware(thunk)
);
