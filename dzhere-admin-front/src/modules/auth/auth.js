import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';

/*** 액션 타입 ***/
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const RESTORE_INFO = 'auth/RESTORE_INFO';
const LOGIN = 'auth/LOGIN';
const LOGIN_ERROR = 'auth/LOGIN_ERROR';
const REGISTER = 'auth/REGISTER';
const REGISTER_ERROR = 'auth/REGISTER_ERROR';
const LOGOUT = 'auth/LOGOUT';

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
// 로그인
export const login = createAction(LOGIN, userInfo => userInfo);
// 로그인 에러
export const loginError = createAction(LOGIN_ERROR, error => error);
// 로그아웃
export const logout = createAction(LOGOUT);
// 회원가입
export const register = createAction(REGISTER, userInfo => userInfo);
// 회원가입 에러
export const registerError = createAction(REGISTER_ERROR, error => error);
// 비밀번호 찾기


/*** initial state ***/
const initialState = {
  register: {
    userPhoneAgency: 'KT',
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
  userInfo: '',
  authError: '',
  // isLoading: true,
  isLogout: true,
};

/*** 리듀서 ***/
const auth = handleActions(
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

    [LOGIN]: (state, action) => ({
      ...state,
      isLogout: false,
      userInfo: action.payload,
      authError: '',
      // isLoading: false,
    }),
    [LOGIN_ERROR]: (state, action) => ({
      ...state,
      authError: action.payload,
    }),
    [REGISTER]: (state, action) => ({
      ...state,
      isLogout: true,
      userInfo: action.payload,
      authError: '',
      // isLoading: false,
    }),
    [REGISTER_ERROR]: (state, action) => ({
      ...state,
      authError: action.payload,
    }),
    [LOGOUT]: (state, action) => ({
      ...state,
      isLogout: true,
      userInfo: '',
      authError: '',
    }),
  },
  initialState
);

export default auth;
