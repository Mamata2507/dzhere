import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';

/*** 액션 타입 ***/
const CHANGE_FIELD = 'teacher/CHANGE_FIELD';
const INITIALIZE_FORM = 'teacher/INITIALIZE_FORM';
const RESTORE_INFO = 'teacher/RESTORE_INFO';
const GET_AGENCY_LIST = 'teacher/GET_AGENCY_LIST'
const GET_AGENCY_LIST_ERROR = 'teacher/GET_AGENCY_LIST_ERROR'
const GET_CLASS_LIST = 'teacher/GET_CLASS_LIST'
const GET_CLASS_LIST_ERROR = 'teacher/GET_CLASS_LIST_ERROR'
const GET_TEACHER_LIST = 'teacher/GET_TEACHER_LIST'
const GET_TEACHER_LIST_ERROR = 'teacher/GET_TEACHER_LIST_ERROR'
const GET_TEACHER_ATTEND_LIST = 'teacher/GET_TEACHER_ATTEND_LIST'
const GET_TEACHER_ATTEND_LIST_ERROR = 'teacher/GET_TEACHER_ATTEND_LIST_ERROR'
const GET_TEACHER_IDX_NAME = 'teacher/GET_TEACHER_IDX_NAME'
const GET_TEACHER_IDX_NAME_ERROR = 'teacher/GET_TEACHER_IDX_NAME_ERROR'
const REMOVE_ROW = 'teacher/REMOVE_ROW'
const RESET_FIELD = 'teacher/RESET_FIELD'


/*** 액션 생성 ***/
//  TextInput 필드 값 변경
export const changeField = createAction(          
  CHANGE_FIELD,
  ({/*form, */key, value}) => ({
    // form,   // register, login  
    key,    // register 폼과 login 폼의 입력 해야 하는 각 필드들을 인식하기 위한 이름 값 
    value,  // 실제 바꾸려는 값
  }),
);

// 폼 초기화 (register 혹은 login)
export const initializeForm = createAction(INITIALIZE_FORM, form => form);   

// 앱 실행 시 유저 정보 불러오기
export const restoreInfo = createAction(RESTORE_INFO, userInfo => userInfo);

export const getAgencyList = createAction(GET_AGENCY_LIST, agencyList => agencyList)

export const getAgencyListError = createAction(GET_AGENCY_LIST_ERROR, error => error)

export const getClassList = createAction(GET_CLASS_LIST, classList => classList)

export const getClassListError = createAction(GET_CLASS_LIST_ERROR, error => error)

export const getTeacherList = createAction(GET_TEACHER_LIST, teacherList => teacherList)

export const getTeacherListError = createAction(GET_TEACHER_LIST_ERROR, error => error)

export const getTeacherAttendList = createAction(GET_TEACHER_ATTEND_LIST, teacherAttendList => teacherAttendList)

export const getTeacherAttendListError = createAction(GET_TEACHER_ATTEND_LIST_ERROR, error => error)

export const getTeacherIdxName = createAction(GET_TEACHER_IDX_NAME, teacherIdxName => teacherIdxName);

export const getTeacherIdxNameError = createAction(GET_TEACHER_IDX_NAME_ERROR, error => error);

export const removeRow = createAction(REMOVE_ROW, teacherList => teacherList);

export const resetField = createAction(RESET_FIELD);

/*** initial state ***/
const initialState = {
  agencyList : [],
  classList : [],
  teacherList : [],
  teacherAttendList : [],
  teacherIdxName : [],
  error : '',
  editTextInputName : null,
  editTextInputPhone : null,
  editTextInputEmail : null,
  insertTextInputName : null,
  insertTextInputPhone : null,
  insertTextInputEmail : null,
  
};

/*** 리듀서 ***/
const teacher = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { /*form, */key, value } }) =>
      produce(state, (draft) => {
        draft[key] = value;
      }),

    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      userInfo: '',
      authError: '',
      // isLoading: true,
      isLogout: true,
    }),

    [RESTORE_INFO]: (state, {payload: userInfo}) => ({
      ...state,
      userInfo,
      // isLoading: false,
      isLogout: false
    }),
    
    [GET_AGENCY_LIST]: (state, {payload: agencyList}) => ({
      ...state,
      agencyList: agencyList
    }),

    [GET_AGENCY_LIST_ERROR]: (state, {payload: error}) => ({
      ...state,
      error : error,      
    }),

    [GET_CLASS_LIST]: (state, {payload: classList}) => ({
      ...state,
      classList: classList
    }),

    [GET_CLASS_LIST_ERROR]: (state, {payload: error}) => ({
      ...state,
      error: error
    }),

    [GET_TEACHER_LIST]: (state, {payload: teacherList}) => ({
      ...state,
      teacherList : teacherList
    }),

    [GET_TEACHER_LIST_ERROR]: (state, {payload: error}) => ({
      ...state,
      error: error
    }),

    [GET_TEACHER_ATTEND_LIST]: (state, {payload: teacherAttendList}) => ({
      ...state,
      teacherAttendList : teacherAttendList
    }),

    [GET_TEACHER_ATTEND_LIST_ERROR]: (state, {payload: error}) => ({
      ...state,
      error: error
    }),

    [GET_TEACHER_IDX_NAME]: (state, {payload: teacherIdxName}) => ({
      ...state,
      teacherIdxName : teacherIdxName,
    }),

    [GET_TEACHER_IDX_NAME_ERROR]: (state, {payload: error}) => ({
      ...state,
      error: error,
      teacherIdx: null,
    }),
    
    [REMOVE_ROW]: (state, {payload: teacherList}) => ({
      ...state,
      teacherList : teacherList
    }),

    [RESET_FIELD]: (state, action) => ({
      ...state,
      editTextInputName : null,
      editTextInputPhone : null,
      editTextInputEmail : null,
      insertTextInputName : null,
      insertTextInputPhone : null,
      insertTextInputEmail : null,
    })
  },
  initialState
);

export default teacher;
