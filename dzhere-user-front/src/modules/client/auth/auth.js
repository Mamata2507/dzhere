import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';
import createRequestSaga, {createRequestActionTypes} from '../../../lib/api/createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import * as authAPI from '../../../lib/api/auth/auth';

/*** 액션 타입 ***/
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes('auth/REGISTER');
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');


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

// 회원가입
export const register = createAction(REGISTER, ({ userPhone, authNum, password, passwordConfirm, userEmail, isChecked1, isChecked2, isChecked3, }) => ({ 
  userPhone, 
  authNum, 
  password, 
  passwordConfirm, 
  userEmail, 
  isChecked1, 
  isChecked2, 
  isChecked3, 
}));

// 로그인
export const login = createAction(LOGIN, ({ userPhone, password }) => ({ 
  userPhone, 
  password 
}));

/*** 사가 생성 ***/
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga(){
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}

/*** initial state ***/
const initialState = {
  register: {
    userPhone: '',
    authNum: '',
    password: '',
    passwordConfirm: '',
    userEmail: '',
    isChecked1: false,
    isChecked2: false,
    isChecked3: false,
  },
  login: {
    userPhone: '',
    password: '',
  },
  findPassword: {
    userEmail: '',
  },
  auth: null,
  authError: null,
};

/*** 리듀서 ***/
const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState,
);

export default auth;
