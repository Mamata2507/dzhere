import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login } from '../../../modules/client/auth/auth';
import AuthForm from '../../../components/client/auth/AuthForm';
import { check } from '../../../modules/client/auth/user';

import asyncStorage from '../../../lib/asyncStorage'

const LoginForm = ({ navigation, route }) => {
    console.log('LoginForm');
    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector(({auth, user}) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user,
    }));

    // TextInput 값 변경 이벤트 핸들러
    const onChangeText = e => {
        console.log('onChangeText');
        console.log(e);
        const {value, name} = e;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value: value,
            })
        );
    };

    // 버튼 onPress 이벤트 핸들러
    const onPress = e => {
        e.preventDefault();
        console.log('onPress 이벤트 e : ', e);
        const {userPhone, password} = form;
        console.log('아이디 비번 : ', {userPhone, password});
        dispatch(login({userPhone, password}));
    };

    // 컴포넌트 처음 렌더링 시, 변수 form의 값 초기화
    // 두 번째 매개변수 배열 : 무한루프 방지.
    useEffect(() => {
        dispatch(initializeForm('login'))
    }, [dispatch]); 

    useEffect(() => {
        if (authError) {
            console.log('로그인 실패');
            console.log(authError);
            setError('로그인 실패');
          return;
        }
        if (auth) {
            console.log('로그인 성공');
            dispatch(check());
        }
    }, [auth, authError, dispatch]);
    
    useEffect(() => {
        if (user) {
            // history.push('/check'); // 체크 페이지로 이동. 수정 필요.
            navigation.reset({
                index: 0,
                routes: [
                    {
                        name: "ClientDrawer",
                    }
                ]
            })
            try {
                if(Platform.OS==='web')
                    localStorage.setItem('user', JSON.stringify(user));
                if(Platform.OS==='android')
                    asyncStorage.setItem('user', JSON.stringify(user));
                
            } catch (e) {
                console.log('localStorage is not working');
            }
        }
    }, [navigation, user]);

    return (
        <AuthForm
            type='login'
            form={form}
            onChangeText={onChangeText}
            onPress={onPress}
            error={error}
            navigation={navigation}
            route = {route}
        />
    );
};

export default LoginForm;