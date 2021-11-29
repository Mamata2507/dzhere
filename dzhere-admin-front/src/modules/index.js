import { combineReducers } from "redux";
import auth from "./auth/auth";
import loading from './loading';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  auth,
  loading,
});

// export function* rootSaga() {
//   yield all();
// }

export default rootReducer;
