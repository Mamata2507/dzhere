import { createAction, handleActions } from "redux-actions";
import * as api from '../../lib/api/user/yj_attend'
import createRequestThunk from '../../lib/api/user/createRequestThunk'

// 액션 타입 선언
// 한 요청당 세 개를 만들어야 한다.

const UPDATE_START_DATE = 'yj_attend/UPDATE_START_DATE'
const UPDATE_END_DATE = 'yj_attend/UPDATE_END_DATE'
const UPDATE_SEARCH_TYPE = 'yj_attend/UPDATE_SEARCH_TYPE'

const UPDATE_TEACHER_ATTEND = 'yj_attend/UPDATE_TEACHER_ATTEND'
const UPDATE_TEACHER_ATTEND_SUCCESS = 'yj_attend/UPDATE_TEACHER_ATTEND_SUCCESS'
const UPDATE_TEACHER_ATTEND_FAILURE = 'yj_attend/UPDATE_TEACHER_ATTEND_FAILURE'

const GET_TEACHER_ATTEND_LIST_ALL = 'yj_attend/GET_TEACHER_ATTEND_LIST_ALL'
const GET_TEACHER_ATTEND_LIST_ALL_SUCCESS = 'yj_attend/GET_TEACHER_ATTEND_LIST_ALL_SUCCESS'
const GET_TEACHER_ATTEND_LIST_ALL_FAILURE = 'yj_attend/GET_TEACHER_ATTEND_LIST_ALL_FAILURE'

const TEACHER_ATTEND_LIST = 'yj_attend/GET_TEACHER_ATTEND_LIST'
const TEACHER_ATTEND_LIST_ERROR = 'yj_attend/TEACHER_ATTEND_LIST_ERROR'

const GET_TEACHER_IDX_NAME = 'yj_attend/GET_TEACHER_IDX_NAME'
const GET_TEACHER_IDX_NAME_SUCCESS = 'yj_attend/GET_TEACHER_IDX_NAME_SUCCESS'
const GET_TEACHER_IDX_NAME_FAILURE = 'yj_attend/GET_TEACHER_IDX_NAME_FAILURE'

const GET_AG_NAME = 'yj_attend/GET_AG_NAME'
const GET_AG_NAME_SUCCESS = 'yj_attend/GET_AG_NAME_SUCCESS'
const GET_AG_NAME_FAILURE = 'yj_attend/GET_AG_NAME_FAILURE'

const GET_CLASS_LIST = 'yj_attend/GET_CLASS_LIST'
const GET_CLASS_LIST_SUCCESS = 'yj_attend/GET_CLASS_LIST_SUCCESS'
const GET_CLASS_LIST_FAILURE = 'yj_attend/GET_CLASS_LIST_FAILURE'

const GET_STUDENT_LIST = 'yj_attend/GET_STUDENT_LIST'
const GET_STUDENT_LIST_SUCCESS = 'yj_attend/GET_STUDENT_LIST_SUCCESS'
const GET_STUDENT_LIST_FAILURE = 'yj_attend/GET_STUDENT_LIST_FAILURE'

const SET_FILTER_LIST = 'yj_attend/SET_FILTER_LIST'

const SET_CHECK = 'yj_attend/SET_CHECK'
const SET_VALUE = 'yj_attend/SET_VALUE'

const DELETE_USER = 'yj_attend/DELETE_USER'
const DELETE_USER_SUCCESS = 'yj_attend/DELETE_USER_SUCCESS'
const DELETE_USER_FAILURE = 'yj_attend/DELETE_USER_FAILURE'

const INSERT_USER = 'yj_attend/INSERT_USER'
const INSERT_USER_SUCCESS = 'yj_attend/INSERT_USER_SUCCESS'
const INSERT_USER_FAILURE = 'yj_attend/INSERT_USER_FAILURE'

const UPDATE_USER = 'yj_attend/UPDATE_USER'
const UPDATE_USER_SUCCESS = 'yj_attend/UPDATE_USER_SUCCESS'
const UPDATE_USER_FAILURE = 'yj_attend/UPDATE_USER_FAILURE'

// thunk 함수 생성
// thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치한다.

export const updateEndDate = createAction(UPDATE_END_DATE, endDate => endDate);
export const updateStartDate = createAction(UPDATE_START_DATE, startDate => startDate);
export const updateSearchType = createAction(UPDATE_SEARCH_TYPE, searchType=>searchType);

export const updateTeacherAttend = createRequestThunk(UPDATE_TEACHER_ATTEND, api.updateTeacherAttend);
export const getTeacherAttendListAll = createRequestThunk(GET_TEACHER_ATTEND_LIST_ALL, api.getTeacherAttendListAll);
export const getTeacherAttendList = createAction(TEACHER_ATTEND_LIST, teacherAttendList => teacherAttendList);
export const getTeacherAttendListError = createAction(TEACHER_ATTEND_LIST_ERROR, error => error)
export const getTeacherIdxName = createRequestThunk(GET_TEACHER_IDX_NAME, api.getTeacherIdxName);
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
  teacherIdxName:{
    u_idx: -1,
    u_name : '',
  },
  searchType : 'all',
  startDate : '',
  endDate : '',
  agName: '',
  classList: [],
  studentList: [],
  teacherAttendList: [],
  filterList: [],
  uid: 0,
  checkid: false,
  resultError: null
};

const yj_attend = handleActions(
  {
    [UPDATE_START_DATE]: (state, {payload: startDate}) => ({
      ...state,
      startDate: startDate,
    }),
    [UPDATE_END_DATE]: (state, {payload: endDate}) => ({
      ...state,
      endDate: endDate,
    }),
    [UPDATE_SEARCH_TYPE]: (state, {payload: searchType}) => ({
      ...state,
      searchType: searchType,
    }),
    [UPDATE_TEACHER_ATTEND_SUCCESS]: (state, action) => ({
      ...state,
      teacherAttendList: action.payload,
      resultError: null
    }),
    [UPDATE_TEACHER_ATTEND_FAILURE]: (state, { payload: error }) => ({
      ...state,
      resultError: error
    }),
    [GET_TEACHER_ATTEND_LIST_ALL_SUCCESS]: (state, action) => ({
      ...state,
      teacherAttendList: action.payload,
      resultError: null
    }),
    [GET_TEACHER_ATTEND_LIST_ALL_FAILURE]: (state, { payload: error }) => ({
      ...state,
      resultError: error
    }),
    [TEACHER_ATTEND_LIST]: (state, {payload: teacherAttendList}) => ({
      ...state,
      teacherAttendList: teacherAttendList,
      resultError: null
    }),
    [TEACHER_ATTEND_LIST_ERROR]: (state, { payload: error }) => ({
      ...state,
      resultError: error
    }),
    [GET_TEACHER_IDX_NAME_SUCCESS]: (state, action) => ({
      ...state,
      teacherIdxName: action.payload,
      resultError: null
    }),
    [GET_TEACHER_IDX_NAME_FAILURE]: (state, { payload: error }) => ({
      ...state,
      resultError: error
    }),
    [GET_AG_NAME_SUCCESS]: (state, action) => ({
      ...state,
      agName: action.payload,
      resultError: null
    }),
    [GET_AG_NAME_FAILURE]: (state, { payload: error }) => ({
      ...state,
      resultError: error
    }),
    [GET_CLASS_LIST_SUCCESS]: (state, action) => ({
      ...state,
      classList: action.payload,
      resultError: null
    }),
    [GET_CLASS_LIST_FAILURE]: (state, { payload: error }) => ({
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
    [SET_FILTER_LIST]: (state, { payload: filterList }) => ({
      ...state,
      filterList,
      resultError: null
    }),
    [SET_CHECK]: (state, { payload: checkid }) => ({
      ...state,
      checkid,
      resultError: null
    }),
    [SET_VALUE]: (state, { payload: uid }) => ({
      ...state,
      uid,
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

export default yj_attend;
