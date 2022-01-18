import { combineReducers } from 'redux';
import todos from './todos';
import hideTodos from './hideShow';

export default combineReducers({
  todos,
  hideTodos,
});
