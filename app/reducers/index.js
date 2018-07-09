import { combineReducers } from 'redux';
import nav from './nav';
import challenges from './challenges';
const reducer = combineReducers({
  nav,
  challenges,
});

export default reducer;
