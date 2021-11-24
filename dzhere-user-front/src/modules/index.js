import { combineReducers } from "redux";
import auth from "./client/auth/auth";

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
