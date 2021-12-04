import { takeLatest } from "redux-saga/effects";
import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/api/createRequestSaga";
import * as api from "../../lib/api/user/studentCount";

// 액션
const [GET_STU_CNT, GET_STU_CNT_SUCCESS, GET_STU_CNT_FAILURE] =
  createRequestActionTypes("student/GET_STU_CNT");

export const getStudentCount = createAction(GET_STU_CNT, (item) => item);

// saga
const getStudentCountSaga = createRequestSaga(GET_STU_CNT, api.getStudentCount);

export function* studentCountSaga() {
  yield takeLatest(GET_STU_CNT, getStudentCountSaga);
}

const initialState = {
  stuCount: [],
  stuCountError: null,
};

const studentCount = handleActions(
  {
    [GET_STU_CNT_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      stuCount: data,
    }),
    [GET_STU_CNT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      stuCountError: error,
    }),
  },
  initialState
);

export default studentCount;
