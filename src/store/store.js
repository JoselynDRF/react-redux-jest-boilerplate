import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import actionLoadElements from '../actions/elements-actions';
import elements from '../reducers/elements-reducer';
import message from '../reducers/message-reducer';
import logger from '../reducers/logger-reducer';

// Create store
const store = createStore(combineReducers({
  elements,
  message,
}), applyMiddleware(thunk, logger));

store.dispatch(actionLoadElements());

export default store;
