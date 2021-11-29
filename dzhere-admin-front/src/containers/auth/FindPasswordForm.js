import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth/auth';
import AuthForm from '../../components/auth/AuthForm';
import { Platform } from 'react-native';

const FindPasswordForm = ({ navigation, route }) => {
    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    const {form, userInfo, authError } = useSelector(({auth}) => ({
        form: auth.findPassword,
        userInfo: auth.userInfo,
        authError: auth.authError,
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