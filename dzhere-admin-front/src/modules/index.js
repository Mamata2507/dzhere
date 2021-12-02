import { combineReducers } from "redux";
import auth from "./auth/auth";
import loading from './loading';
import list from './user/list'
import classes from './class/course';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  auth,
  list,
  loading,
  classes
});

// export function* rootSaga() {
//   yield all();
// }

export default rootReducer;
