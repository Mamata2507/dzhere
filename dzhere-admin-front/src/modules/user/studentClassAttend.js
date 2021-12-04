import { takeLatest } from "redux-saga/effects";
import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/api/createRequestSaga";
import * as api from "../../lib/api/user/teacher";

// 액션
const [LOAD_AGENCY_LIST, LOAD_AGENCY_LIST_SUCCESS, LOAD_AGENCY_LIST_FAILURE] =
  createRequestActionTypes("student/LOAD_AGENCY_LIST");
const [LOAD_LESSON_LIST, LOAD_LESSON_LIST_SUCCESS, LOAD_LESSON_LIST_FAILURE] =
  createRequestActionTypes("student/LOAD_LESSON_LIST");
const [SEARCH_ATTEND, SEARCH_ATTEND_SUCCESS, SEARCH_ATTEND_FAILURE] =
  createRequestActionTypes("student/SEARCH_ATTEND");
const [UPDATE_ATTEND, UPDATE_ATTEND_SUCCESS, UPDATE_ATTEND_FAILURE] =
  createRequestActionTypes("student/UPDATE_ATTEND");

const SET_CHECK = "student/SET_CHECK";
const SET_VALUE = "student/SET_VALUE";
const RESET_LIST = "student/RESET_LIST";
const SET_LATE_STATUS = "student/SET_LATE_STATUS";
const SET_ABSCENT_STATUS = "student/SET_ABSCENT_STATUS";
const SET_LEAVE_STATUS = "student/SET_LEAVE_STATUS";
const SET_NOT_EXIT_STATUS = "student/SET_NOT_EXIT_STATUS";

export const resetList = createAction(RESET_LIST);
export const setCheck = createAction(SET_CHECK, (checkid) => checkid);
export const setValue = createAction(SET_VALUE, (uid) => uid);

export const setLateStatus = createAction(SET_LATE_STATUS);
export const setAbscentStatus = createAction(SET_ABSCENT_STATUS);
export const setLeaveStatus = createAction(SET_LEAVE_STATUS);
export const setNotExitStatus = createAction(SET_NOT_EXIT_STATUS);

// 수업 기관 load
export const getAgencyList = createAction(
  LOAD_AGENCY_LIST,
  (u_phone) => u_phone
);
export const getLessonList = createAction(
  LOAD_LESSON_LIST,
  (u_phone) => u_phone
);
export const getSearchAttend = createAction(SEARCH_ATTEND, (item) => item);
export const updateTeacherAttend = createAction(UPDATE_ATTEND, (item) => item);

// saga
const getAgencyListSaga = createRequestSaga(
  LOAD_AGENCY_LIST,
  api.getAgencyList
);
const getLessonListSaga = createRequestSaga(
  LOAD_LESSON_LIST,
  api.getLessonList
);
const getSearchAttendSaga = createRequestSaga(
  SEARCH_ATTEND,
  api.getTeacherSearch
);
const updateTeacherAttendSaga = createRequestSaga(
  UPDATE_ATTEND,
  api.updateTeacherAttend
);

export function*studentSaga() {
  yield takeLatest(LOAD_AGENCY_LIST, getAgencyListSaga);
  yield takeLatest(LOAD_LESSON_LIST, getLessonListSaga);
  yield takeLatest(SEARCH_ATTEND, getSearchAttendSaga);
  yield takeLatest(UPDATE_ATTEND, updateTeacherAttendSaga);
}

const initialState = {
  lessonList: [],
  agencyList: [],
  searchList: [],
  uid: 0,
  updateResult: "",
  checkid: false,
  lessonListError: null,
  agencyListError: null,
  searchListError: null,
};

const studentAttend = handleActions(
  {
    [LOAD_AGENCY_LIST_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      agencyList: data,
    }),
    [LOAD_AGENCY_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      agencyListError: error,
    }),
    [LOAD_LESSON_LIST_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      lessonList: data,
    }),
    [LOAD_LESSON_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      lessonListError: error,
    }),
    [SEARCH_ATTEND_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      searchList: data,
    }),
    [SEARCH_ATTEND_FAILURE]: (state, { payload: error }) => ({
      ...state,
      searchListError: error,
    }),
    [UPDATE_ATTEND_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      updateResult: data,
    }),
    [UPDATE_ATTEND_FAILURE]: (state, { payload: error }) => ({
      ...state,
      updateResult: 0,
    }),
    [RESET_LIST]: (state) => ({
      ...state,
      searchList: [],
    }),
    [SET_CHECK]: (state, { payload: checkid }) => ({
      ...state,
      checkid,
    }),
    [SET_VALUE]: (state, { payload: uid }) => ({
      ...state,
      uid,
    }),
    [SET_LATE_STATUS]: (state, { payload: status }) => ({
      ...state,
      // uid: !(state.a_late_status > 0) ? 0 : 1,
    }),
    [SET_ABSCENT_STATUS]: (state, { payload: status }) => ({
      ...state,
    }),
    [SET_LEAVE_STATUS]: (state, { payload: status }) => ({
      ...state,
    }),
    [SET_NOT_EXIT_STATUS]: (state, { payload: status }) => ({
      ...state,
    }),
  },
  initialState
);

export default studentAttend;
