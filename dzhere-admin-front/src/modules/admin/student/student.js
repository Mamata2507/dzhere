import { createAction, handleActions } from "redux-actions";
import * as api from '../../../lib/api/student/student'
import createRequestThunk from '../../../lib/api/student/createRequestThunk'
import produce from "immer";

// 액션 타입 선언
// 한 요청당 세 개를 만들어야 한다.
const GET_AG_NAME = 'student/GET_AG_NAME'
const GET_AG_NAME_SUCCESS = 'student/GET_AG_NAME_SUCCESS'
const GET_AG_NAME_FAILURE = 'student/GET_AG_NAME_FAILURE'

const GET_CLASS_LIST = 'student/GET_CLASS_LIST'
const GET_CLASS_LIST_SUCCESS = 'student/GET_CLASS_LIST_SUCCESS'
const GET_CLASS_LIST_FAILURE = 'student/GET_CLASS_LIST_FAILURE'

const GET_STUDENT_LIST = 'student/GET_STUDENT_LIST'
const GET_STUDENT_LIST_SUCCESS = 'student/GET_STUDENT_LIST_SUCCESS'
const GET_STUDENT_LIST_FAILURE = 'student/GET_STUDENT_LIST_FAILURE'



// thunk 함수 생성
// thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치한다.

//export const setPhone = createAction(SET_PHONE, phone => phone);
export const getAgName = createRequestThunk(GET_AG_NAME, api.getAgName);
export const getClassList = createRequestThunk(GET_CLASS_LIST, api.getClassList);
export const getStudentList = createRequestThunk(GET_STUDENT_LIST, api.getStudentList);

  
// 초기 상태를 선언한다
// 요청의 로딩 중 상태는 loading이라는 객체에서 관리한다.

const initialState = {
  agName: '',
  classList: [],
  studentList: [],
};

const student = handleActions(
  {
    [GET_AG_NAME_SUCCESS]: (state, action) => ({
      ...state,
      agName: action.payload,
    }),
    [GET_AG_NAME_FAILURE]: (state, action) => ({
      ...state,
    }),
    [GET_CLASS_LIST_SUCCESS]: (state, action) => ({
      ...state,
      classList: action.payload,
    }),
    [GET_CLASS_LIST_FAILURE]: (state, action) => ({
      ...state,
    }),
    [GET_STUDENT_LIST_SUCCESS]: (state, action) => ({
      ...state,
      studentList: action.payload,
    }),
    [GET_STUDENT_LIST_FAILURE]: (state, action) => ({
      ...state,
    }),
  },
  initialState
);

export default student;

