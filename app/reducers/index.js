import { combineReducers } from 'redux';
import nav from './nav';
import challenges from './challenges';
import users from './users';
const reducer = combineReducers({
  nav,
  challenges,
  users,
});

export default reducer;
