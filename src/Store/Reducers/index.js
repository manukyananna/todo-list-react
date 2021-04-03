import { combineReducers } from "redux";
import user from './user';
import spinner from './spinner';

export default combineReducers({
  user,
  spinner
});