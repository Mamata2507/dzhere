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

import React from 'react';
import Apps from "./src/App"; 
import { applyMiddleware, createStore } from 'redux';
import rootReducer, { rootSaga } from './src/modules/client/index';
import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import { composeWithDevTools } from 'redux-devtools-extension';
import { tempSetUser, check } from './src/modules/client/auth/user';
import { Platform } from 'react-native';
import asyncStorage from './src/lib/api/asyncStorage';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
    );

function loadUser() {
    try {
        const user = (Platform.OS==='web') ? localStorage.getItem('user') : (Platform.OS==='android') ? asyncStorage.getItem('user') : false;
        // const user = asyncStorage.getItem('user');

        if (!user) return; // 로그인 상태가 아니라면 아무것도 안함

        store.dispatch(tempSetUser(JSON.parse(user)));
        store.dispatch(check());
    } catch (e) {
        console.log(e);
    }
}

sagaMiddleware.run(rootSaga);
loadUser();
  
const App = () => {
    console.log('root App');
    return (
        <Provider store={store}>
            <Apps/>
        </Provider>
    );
}
  
export default App;