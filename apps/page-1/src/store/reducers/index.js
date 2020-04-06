import { combineReducers } from 'redux';
import { counterReducer } from './sum';

export const rootReducer = combineReducers({
  sum: counterReducer,
});
