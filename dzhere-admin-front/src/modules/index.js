import { combineReducers } from "redux";
import auth from "./auth/auth";
import loading from './loading';
import student from './student/student'
import teacher from "./teacher/teacher";
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  auth,
  student,
  teacher,
  loading,
});

// export function* rootSaga() {
//   yield all();
// }

export default rootReducer;
