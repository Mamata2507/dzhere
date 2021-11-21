import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../../modules/client/auth/auth';
import AuthForm from '../../../components/client/auth/AuthForm';
import { check } from '../../../modules/client/auth/user';
import asyncStorage from '../../../lib/asyncStorage';
import { Platform } from 'react-native';

const FindPasswordForm = ({ navigation, route }) => {
    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    const {form, auth, authError, user } = useSelector(({auth, user}) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user,
    }));

    // TextInput 값 변경 이벤트 핸들러
    const onChangeText = e => {
        const {value, name} = e;
        dispatch(
            changeField({
                form: 'findPassword',
                key: name,
                value: value,
            })
        );
    };

    // 버튼 onPress 이벤트 핸들러
    const onPress = e => {
        e.preventDefault();
        const { userPhone, authNum, password, passwordConfirm, userEmail, isChecked1, isChecked2, isChecked3 } = form;

        // 하나라도 비어 있다면
        if([userPhone, authNum, password, passwordConfirm].includes('') && [isChecked1, isChecked2, isChecked3].includes(false)){
            console.log('양식을 모두 입력하세요.');
            setError('양식을 모두 입력하세요.');
            return;
        }

        // 비밀번호 불일치
        if(password !== passwordConfirm){
            console.log('비밀번호가 일치하지 않습니다.');
            setError('비밀번호가 일치하지 않습니다.');
            dispatch(changeField({ form: 'register', key: 'password', value: '' }));
            dispatch(changeField({ form: 'register', key: 'passwordConfirm', value: '' }));
            return;
        }
        dispatch(register({ userPhone, authNum, password, passwordConfirm, userEmail, isChecked1, isChecked2, isChecked3 }));
    };

    // 컴포넌트 처음 렌더링 시, 변수 form의 값 초기화
    // 두 번째 매개변수 배열 : 무한루프 방지.
    useEffect(() => {
        dispatch(initializeForm('register'))
    }, [dispatch]); 

    // 회원가입 성공 / 실패 처리
    useEffect(() => {
        if(authError){
            // 계정명이 이미 존재할 때
            if (authError.response.status === 409) {
                console.log('이미 존재하는 계정명입니다.');
                setError('이미 존재하는 계정명입니다.');
                return;
            }
            // 기타 이유
            console.log('회원가입 실패');
            setError('회원가입 실패');
            return;
        }
        if(auth){
            console.log('회원가입 성공');
            console.log(auth);
            dispatch(check())
        }
    }, [auth, authError, dispatch]);

    // user 값이 잘 설정되었는지 확인
    useEffect(() => {
        if (user) {
            console.log('check API 성공');
            console.log(user);
            // history.push('/'); // 로그인 화면으로 이동. // 수정 필요.
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
            type='register'
            form={form}
            onChangeText={onChangeText}
            onPress={onPress}
            error={error}
            navigation={navigation}
            route = {route}
        />
    );
};

export default RegisterForm;