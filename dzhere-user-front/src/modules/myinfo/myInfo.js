import { createAction, handleActions } from "redux-actions";
import * as api from '../../lib/api/myInfo/myInfo'
import createRequestThunk from '../../lib/api/myInfo/createRequestThunk'
import produce from 'immer';

// 액션 타입 선언
// 한 요청당 세 개를 만들어야 한다.
const GET_EMAIL = 'myinfo/GET_EMAIL';
const GET_EMAIL_SUCCESS = 'myinfo/GET_EMAIL_SUCCESS';
const GET_EMAIL_FAILURE = 'myinfo/GET_EMAIL_FAILURE';

const UPDATE_EMAIL = 'myinfo/UPDATE_EMAIL';
const UPDATE_EMAIL_SUCCESS = 'myinfo/UPDATE_EMAIL_SUCCESS';
const UPDATE_EMAIL_FAILURE = 'myinfo/UPDATE_EMAIL_FAILURE';

const SET_PHONE = 'myinfo/SET_PHONE';

const GET_PW = 'myinfo/GET_PW';
const GET_PW_SUCCESS = 'myinfo/GET_PW_SUCCESS';
const GET_PW_FAILURE = 'myinfo/GET_PW_FAILURE';

const UPDATE_PW = 'myinfo/UPDATE_PW';
const UPDATE_PW_SUCCESS = 'myinfo/UPDATE_PW_SUCCESS';
const UPDATE_PW_FAILURE = 'myinfo/UPDATE_PW_FAILURE';

const CHANGE_FIELD = 'myinfo/CHANGE_FIELD';

// thunk 함수 생성
// thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치한다.

export const getEmail = createRequestThunk(GET_EMAIL, api.getEmail);
export const updateEmail = createRequestThunk(UPDATE_EMAIL, api.updateEmail);
export const setPhone = createAction(SET_PHONE, phone => phone);
export const getPw = createRequestThunk(GET_PW, api.getPw);
export const updatePw = createRequestThunk(UPDATE_PW, api.updatePw);

export const changeField = createAction(          
  CHANGE_FIELD,
  ({key, value}) => ({
    key,    // register 폼과 login 폼의 입력 해야 하는 각 필드들을 인식하기 위한 이름 값 
    value,  // 실제 바꾸려는 값
  }),
);

// 초기 상태를 선언한다
// 요청의 로딩 중 상태는 loading이라는 객체에서 관리한다.

const initialState = {
  email: null,
  phone: null,
  pw: null,
};

const myinfo = handleActions(
  {
    [GET_EMAIL_SUCCESS]: (state, action) => ({
      ...state,
      email: action.payload
    }),
    [GET_EMAIL_FAILURE]: (state, action) => ({
      ...state
    }), 
    [UPDATE_EMAIL_SUCCESS]: (state, action) => ({
      ...state,
      email: action.payload
    }),
    [UPDATE_EMAIL_FAILURE]: (state, action) => ({
      ...state
    }), 
    [SET_PHONE]: (state, { payload: phone }) => ({
      ...state,
      phone,
    }),
    [GET_PW_SUCCESS]: (state, action) => ({
      ...state,
      pw: action.payload
    }),
    [GET_PW_FAILURE]: (state, action) => ({
      ...state
    }), 
    [UPDATE_PW_SUCCESS]: (state, action) => ({
      ...state,
      pw: action.payload
    }),
    [UPDATE_PW_FAILURE]: (state, action) => ({
      ...state
    }), 
    [CHANGE_FIELD]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
      draft[key] = value;
    }),
  },
  
  initialState
);

export default myinfo;

