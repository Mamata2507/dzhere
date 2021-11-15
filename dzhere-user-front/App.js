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


import App from './src/App';
export default App;