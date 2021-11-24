import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../../modules/client/loading';

// 액션 타입 리턴 함수
export const createRequestActionTypes = type => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) { //type : type, request: API
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  
  return function*(action) {
    
    yield put(startLoading(type)); // 로딩 시작  true    
    try {
      // 함수 호출
      const response = yield call(request, action.payload);
      // (type==='attend/ATTEND_LIST_LOAD')&&console.log(response);
      yield put({
        type: SUCCESS,
        payload: response.data,
        meta: response,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
      
    }
    yield put(finishLoading(type)); // 로딩 끝   false
  };
}
