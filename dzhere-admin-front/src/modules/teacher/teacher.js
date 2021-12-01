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


/*** 액션 생성 ***/
//  TextInput 필드 값 변경
export const changeField = createAction(          
  CHANGE_FIELD,
  ({form, key, value}) => ({
    form,   // register, login  
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

export const getTeacherList = createAction(GET_TEACHER_LIST, teahcerList => teahcerList)

export const getTeacherListError = createAction(GET_TEACHER_LIST_ERROR, error => error)

/*** initial state ***/
const initialState = {
  agencyList : [],
  classList : [],
  teacherList : [],
  error : '',
};

/*** 리듀서 ***/
const teacher = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
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

  },
  initialState
);

export default teacher;
