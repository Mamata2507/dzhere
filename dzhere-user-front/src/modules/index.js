import { combineReducers } from "redux";
import auth from "./auth/auth";
// import check from './check/check';
import external from './external/external';
import myinfo from './myinfo/myInfo'
import loading from './loading'

const rootReducer = combineReducers({
  auth,
  external,
  // check,
  myinfo,
  loading,
});

export default rootReducer;
