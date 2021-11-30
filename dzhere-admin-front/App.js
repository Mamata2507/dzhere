/*
폴더 구조
::  Page -> Component(UI) -> Container(디스패치) -> Modules(리듀서) 
:: -> Container(useSelector) -> Component

LoginPage(page) -> AuthTemplate(component) -> LoginForm(container) -> modules -> 
AuthForm(component) -> LoginPage(page)

1. Page(Loginpage) : Component 가 Container 를 감싸고 있는 구조 
예) AuthTemplate(Components), LoginForm(Container)

2. Component(AuthTemplate, AuthForm) : 기본 템플릿

3. Container(LoginForm) : dispatch, onSubmit, useSelector, useCallback 등 함수 처리, 
return 의 경우 Component 에 state 를 전달하는 방식으로 처리 (return AuthForm)
*/

import React from "react";
import Apps from "./src/App";
import { createStore, applyMiddleware } from "redux";
import rootReducer, {rootSaga} from "./src/modules/index";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from 'redux-logger'
import ReduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
// const logger = createLogger();
const store = createStore(
  rootReducer, 
  applyMiddleware( ReduxThunk, sagaMiddleware)  //logger   loge 미들웨어
);

// // saga실행
// sagaMiddleware.run(rootSaga);

const App = () => {
  console.log("root App");
  return (
    <Provider store={store}>
      <Apps />
    </Provider>
  );
};

export default App;
