/**
 * RootReducer
 * counter와 todos reducer를 함께 관리
 */
import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
