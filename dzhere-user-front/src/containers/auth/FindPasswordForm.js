import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth/auth';
import AuthForm from '../../components/auth/AuthForm';
import { Platform } from 'react-native';

const FindPasswordForm = ({ navigation, route }) => {
    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    const {form, auth, authError, user } = useSelector(({auth, user}) => ({
        form: auth.findPassword,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user,
    }));

    // TextInput 값 변경 이벤트 핸들러
    const onChangeText = e => {
        console.log(e);
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
        const { userEmail, } = form;

        // 하나라도 비어 있다면
        if([userEmail].includes('')){
            console.log('양식을 모두 입력하세요.');
            setError('양식을 모두 입력하세요.');
            return;
        }

        dispatch(register({ userEmail, }));
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
            type='findPw'
            form={form}
            onChangeText={onChangeText}
            onPress={onPress}
            error={error}
            navigation={navigation}
            route = {route}
        />
    );
};

export default FindPasswordForm;