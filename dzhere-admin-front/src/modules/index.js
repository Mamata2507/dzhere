import { combineReducers } from "redux";
import auth from "./auth/auth";
import loading from "./loading";
import student from "./student/student";
import studentCount from "./user/studentCount";
import teacher, { teacherSaga } from "./user/teacherClassAttend";
import { all } from "redux-saga/effects";
import studentAttend, { studentSaga } from "./user/studentClassAttend";
import { studentCountSaga } from "./user/studentCount";

const rootReducer = combineReducers({
  auth,
  student,
  studentCount,
  teacher,
  studentAttend,
  loading,
});

export function* rootSaga() {
  yield all([teacherSaga(), studentSaga(), studentCountSaga()]);
}

export default rootReducer;
