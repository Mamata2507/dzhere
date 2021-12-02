import { createAction, handleActions } from "redux-actions";
import * as api from '../../lib/api/student/student'
import createRequestThunk from '../../lib/api/student/createRequestThunk'

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

const SET_FILTER_LIST = 'student/SET_FILTER_LIST'

const SET_CHECK = 'student/SET_CHECK'
const SET_VALUE = 'student/SET_VALUE'

const DELETE_USER = 'student/DELETE_USER'
const DELETE_USER_SUCCESS = 'student/DELETE_USER_SUCCESS'
const DELETE_USER_FAILURE = 'student/DELETE_USER_FAILURE'

const INSERT_USER = 'student/INSERT_USER'
const INSERT_USER_SUCCESS = 'student/INSERT_USER_SUCCESS'
const INSERT_USER_FAILURE = 'student/INSERT_USER_FAILURE'

const UPDATE_USER = 'student/UPDATE_USER'
const UPDATE_USER_SUCCESS = 'student/UPDATE_USER_SUCCESS'
const UPDATE_USER_FAILURE = 'student/UPDATE_USER_FAILURE'

// thunk 함수 생성
// thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치한다.

export const getAgName = createRequestThunk(GET_AG_NAME, api.getAgName);
export const getClassList = createRequestThunk(GET_CLASS_LIST, api.getClassList);
export const getStudentList = createRequestThunk(GET_STUDENT_LIST, api.getStudentList);
export const setFilterList = createAction(SET_FILTER_LIST, filterList => filterList);
export const setCheck = createAction(SET_CHECK, checkid => checkid);
export const setValue = createAction(SET_VALUE, uid => uid);
export const deleteUser = createRequestThunk(DELETE_USER, api.deleteUser);
export const insertUser = createRequestThunk(INSERT_USER, api.insertUser);
export const updateUser = createRequestThunk(UPDATE_USER, api.updateUser);
  
// 초기 상태를 선언한다
// 요청의 로딩 중 상태는 loading이라는 객체에서 관리한다.

const initialState = {
  agName: '',
  classList: [],
  studentList: [],
  filterList: [],
  uid: 0,
  checkid: false,
  studentError: null
};

const student = handleActions(
  {
    [GET_AG_NAME_SUCCESS]: (state, action) => ({
      ...state,
      agName: action.payload,
      studentError: null
    }),
    [GET_AG_NAME_FAILURE]: (state, { payload: error }) => ({
      ...state,
      studentError: error
    }),
    [GET_CLASS_LIST_SUCCESS]: (state, action) => ({
      ...state,
      classList: action.payload,
      studentError: null
    }),
    [GET_CLASS_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      studentError: error
    }),
    [GET_STUDENT_LIST_SUCCESS]: (state, action) => ({
      ...state,
      studentList: action.payload,
      studentError: null
    }),
    [GET_STUDENT_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      studentError: error
    }),
    [SET_FILTER_LIST]: (state, { payload: filterList }) => ({
      ...state,
      filterList,
      studentError: null
    }),
    [SET_CHECK]: (state, { payload: checkid }) => ({
      ...state,
      checkid,
      studentError: null
    }),
    [SET_VALUE]: (state, { payload: uid }) => ({
      ...state,
      uid,
      studentError: null
    }),
    [DELETE_USER_SUCCESS]: (state, action) => ({
      ...state,
      studentError: null
    }),
    [DELETE_USER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      studentError: error
    }),
    [INSERT_USER_SUCCESS]: (state, action) => ({
      ...state,
      studentError: null
    }),
    [INSERT_USER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      studentError: error
    }),
    [UPDATE_USER_SUCCESS]: (state, action) => ({
      ...state,
      studentError: null
    }),
    [UPDATE_USER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      studentError: error
    }),
  },
  initialState
  );

export default student;
