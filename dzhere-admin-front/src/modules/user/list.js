import { createAction, handleActions } from "redux-actions";
import * as api from '../../lib/api/user/list'
import createRequestThunk from '../../lib/api/user/createRequestThunk'

// 액션 타입 선언
// 한 요청당 세 개를 만들어야 한다.
const GET_AG_NAME = 'list/GET_AG_NAME'
const GET_AG_NAME_SUCCESS = 'list/GET_AG_NAME_SUCCESS'
const GET_AG_NAME_FAILURE = 'list/GET_AG_NAME_FAILURE'

const GET_STUDENT_LIST = 'list/GET_STUDENT_LIST'
const GET_STUDENT_LIST_SUCCESS = 'list/GET_STUDENT_LIST_SUCCESS'
const GET_STUDENT_LIST_FAILURE = 'list/GET_STUDENT_LIST_FAILURE'

const GET_TEACHER_LIST = 'list/GET_TEACHER_LIST'
const GET_TEACHER_LIST_SUCCESS = 'list/GET_TEACHER_LIST_SUCCESS'
const GET_TEACHER_LIST_FAILURE = 'list/GET_TEACHER_LIST_FAILURE'

const SET_FILTER_LIST = 'list/SET_FILTER_LIST'

const SET_STUDENT_VALUE = 'list/SET_STUDENT_VALUE'
const SET_STUDENT_CHECK = 'list/SET_STUDENT_CHECK'

const SET_TEACHER_VALUE = 'list/SET_TEACHER_VALUE'
const SET_TEACHER_CHECK = 'list/SET_TEACHER_CHECK'

const DELETE_USER = 'list/DELETE_USER'
const DELETE_USER_SUCCESS = 'list/DELETE_USER_SUCCESS'
const DELETE_USER_FAILURE = 'list/DELETE_USER_FAILURE'

const INSERT_USER = 'list/INSERT_USER'
const INSERT_USER_SUCCESS = 'list/INSERT_USER_SUCCESS'
const INSERT_USER_FAILURE = 'list/INSERT_USER_FAILURE'

const UPDATE_USER = 'list/UPDATE_USER'
const UPDATE_USER_SUCCESS = 'list/UPDATE_USER_SUCCESS'
const UPDATE_USER_FAILURE = 'list/UPDATE_USER_FAILURE'

// thunk 함수 생성
// thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치한다.

export const getAgName = createRequestThunk(GET_AG_NAME, api.getAgName);
export const getStudentList = createRequestThunk(GET_STUDENT_LIST, api.getStudentList);
export const getTeacherList = createRequestThunk(GET_TEACHER_LIST, api.getTeacherList);
export const setFilterList = createAction(SET_FILTER_LIST, filterList => filterList);
export const setStudentCheck = createAction(SET_STUDENT_CHECK, checkSid => checkSid);
export const setStudentValue = createAction(SET_STUDENT_VALUE, uSid => uSid);
export const setTeacherCheck = createAction(SET_TEACHER_CHECK, checkTid => checkTid);
export const setTeacherValue = createAction(SET_TEACHER_VALUE, uTid => uTid);
export const deleteUser = createRequestThunk(DELETE_USER, api.deleteUser);
export const insertUser = createRequestThunk(INSERT_USER, api.insertUser);
export const updateUser = createRequestThunk(UPDATE_USER, api.updateUser);
  
// 초기 상태를 선언한다
// 요청의 로딩 중 상태는 loading이라는 객체에서 관리한다.

const initialState = {
  agName: '',
  studentList: [],
  teacherList: [],
  filterList: [],
  uSid: 0,
  uTid: 0,
  checkSid: false,
  checkTid: false,
  resultError: null
};

const list = handleActions(
  {
    [GET_AG_NAME_SUCCESS]: (state, action) => ({
      ...state,
      agName: action.payload,
      resultError: null
    }),
    [GET_AG_NAME_FAILURE]: (state, { payload: error }) => ({
      ...state,
      resultError: error
    }),
    [GET_STUDENT_LIST_SUCCESS]: (state, action) => ({
      ...state,
      studentList: action.payload,
      resultError: null
    }),
    [GET_STUDENT_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      resultError: error
    }),
    [GET_TEACHER_LIST_SUCCESS]: (state, action) => ({
      ...state,
      teacherList: action.payload,
      resultError: null
    }),
    [GET_TEACHER_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      resultError: error
    }),
    [SET_FILTER_LIST]: (state, { payload: filterList }) => ({
      ...state,
      filterList,
      resultError: null
    }),
    [SET_STUDENT_CHECK]: (state, { payload: checkSid }) => ({
      ...state,
      checkSid,
      resultError: null
    }),
    [SET_STUDENT_VALUE]: (state, { payload: uSid }) => ({
      ...state,
      uSid,
      resultError: null
    }),
    [SET_TEACHER_CHECK]: (state, { payload: checkTid }) => ({
      ...state,
      checkTid,
      resultError: null
    }),
    [SET_TEACHER_VALUE]: (state, { payload: uTid }) => ({
      ...state,
      uTid,
      resultError: null
    }),
    [DELETE_USER_SUCCESS]: (state, action) => ({
      ...state,
      resultError: null
    }),
    [DELETE_USER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      resultError: error
    }),
    [INSERT_USER_SUCCESS]: (state, action) => ({
      ...state,
      resultError: null
    }),
    [INSERT_USER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      resultError: error
    }),
    [UPDATE_USER_SUCCESS]: (state, action) => ({
      ...state,
      resultError: null
    }),
    [UPDATE_USER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      resultError: error
    }),
  },
  initialState
  );

export default list;
