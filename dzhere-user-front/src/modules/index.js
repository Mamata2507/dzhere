import { combineReducers } from "redux";
import auth from "./auth/auth";
// import check from './check/check';
import external from './external/external';
import myinfo from './myinfo/myInfo'

const rootReducer = combineReducers({
  auth,
  external,
  // check,
  myinfo,
});

export default rootReducer;
