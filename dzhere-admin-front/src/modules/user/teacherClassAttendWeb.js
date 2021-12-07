import { createAction, handleActions } from "redux-actions";
import * as api from '../../lib/api/user/teacherClassAttendWeb'
import createRequestThunk from '../../lib/api/user/createRequestThunk'

// 액션 타입 선언
// 한 요청당 세 개를 만들어야 한다.

const UPDATE_START_DATE = 'teacherClassAttendWeb/UPDATE_START_DATE'
const UPDATE_END_DATE = 'teacherClassAttendWeb/UPDATE_END_DATE'
const UPDATE_SEARCH_TYPE = 'teacherClassAttendWeb/UPDATE_SEARCH_TYPE'

const UPDATE_TEACHER_ATTEND = 'teacherClassAttendWeb/UPDATE_TEACHER_ATTEND'
const UPDATE_TEACHER_ATTEND_SUCCESS = 'teacherClassAttendWeb/UPDATE_TEACHER_ATTEND_SUCCESS'
const UPDATE_TEACHER_ATTEND_FAILURE = 'teacherClassAttendWeb/UPDATE_TEACHER_ATTEND_FAILURE'

const GET_TEACHER_ATTEND_LIST_ALL = 'teacherClassAttendWeb/GET_TEACHER_ATTEND_LIST_ALL'
const GET_TEACHER_ATTEND_LIST_ALL_SUCCESS = 'teacherClassAttendWeb/GET_TEACHER_ATTEND_LIST_ALL_SUCCESS'
const GET_TEACHER_ATTEND_LIST_ALL_FAILURE = 'teacherClassAttendWeb/GET_TEACHER_ATTEND_LIST_ALL_FAILURE'

const TEACHER_ATTEND_LIST = 'teacherClassAttendWeb/GET_TEACHER_ATTEND_LIST'
const TEACHER_ATTEND_LIST_ERROR = 'teacherClassAttendWeb/TEACHER_ATTEND_LIST_ERROR'

const GET_TEACHER_IDX_NAME = 'teacherClassAttendWeb/GET_TEACHER_IDX_NAME'
const GET_TEACHER_IDX_NAME_SUCCESS = 'teacherClassAttendWeb/GET_TEACHER_IDX_NAME_SUCCESS'
const GET_TEACHER_IDX_NAME_FAILURE = 'teacherClassAttendWeb/GET_TEACHER_IDX_NAME_FAILURE'

const GET_AG_NAME = 'teacherClassAttendWeb/GET_AG_NAME'
const GET_AG_NAME_SUCCESS = 'teacherClassAttendWeb/GET_AG_NAME_SUCCESS'
const GET_AG_NAME_FAILURE = 'teacherClassAttendWeb/GET_AG_NAME_FAILURE'

const GET_CLASS_LIST = 'teacherClassAttendWeb/GET_CLASS_LIST'
const GET_CLASS_LIST_SUCCESS = 'teacherClassAttendWeb/GET_CLASS_LIST_SUCCESS'
const GET_CLASS_LIST_FAILURE = 'teacherClassAttendWeb/GET_CLASS_LIST_FAILURE'

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
  teacherAttendList: [],
  resultError: null
};

const teacherClassAttendWeb = handleActions(
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
  },
  initialState
  );

export default teacherClassAttendWeb;