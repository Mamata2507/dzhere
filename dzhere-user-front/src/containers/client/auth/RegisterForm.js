import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../../modules/client/auth/auth';
import AuthForm from '../../../components/client/auth/AuthForm';
import { apiRegister } from '../../../lib/api/auth';
import { Alert } from 'react-native';

const RegisterForm = ({ navigation, route }) => {
    // const [error1, setError1] = useState(null);
    const [error2, setError2] = useState(null);
    const [error3, setError3] = useState(null);
    const [error4, setError4] = useState(null);
    const [error5, setError5] = useState(null);
    const [passwordTemp, setPasswordTemp] = useState('');

    const dispatch = useDispatch();
    const {form, userInfo, authError} = useSelector(({auth}) => ({
        form: auth.register,
        userInfo: auth.userInfo,
        authError: auth.authError,
    }));

    // 컴포넌트 처음 렌더링 시, 변수 form의 값 초기화
    // 두 번째 매개변수 배열 : 무한루프 방지.
    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]); 

    // TextInput 값 변경 이벤트 핸들러
    const onChangeText = e => {
        console.log("register onchange : ", e);
        
        console.log("onChangeText");
        console.log(e);
        const { value, name } = e;
        if (name === "userPhone") {
            let regexpUserPhone = /^[0-9]{0,11}$/;
            if (regexpUserPhone.test(value)) {
                console.log('userPhone 입력 : ', value);
                dispatch(
                    changeField({
                        form: "register",
                        key: name,
                        value: value,
                    })
                );
            }
            else
                console.log('userPhone - 숫자 아닌 값 입력 : ', value);
        } 
        if(name === 'password'){
            let regexpPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?)(!@$%^&*-]).{8,16}$/;
            console.log('password 입력 : ', value);
            dispatch(
                changeField({
                    form: "register",
                    key: name,
                    value: value,
                })
            );
            setPasswordTemp(value);

            if(value.length>0 && false === regexpPassword.test(value)){
                setError2('8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.');
                console.log('비밀번호 유효성 체크(error2) : ', error2);
            }else{
                setError2(null);
            }
        }
        if(name==='passwordConfirm'){
            console.log('passwordConfirm 입력 : ', value);
            dispatch(
                changeField({
                    form: "register",
                    key: name,
                    value: value,
                })
            );
            if(passwordTemp.length>0 && value.length>0 && passwordTemp !== value){
                setError3('비밀번호가 일치하지 않습니다.');
                console.log('비밀번호 확인 유효성 체크(error3) : ', error3);
            }
            else{
                setError3(null);
            }
        }
        if(name === 'userEmail'){
            console.log('userEmail 입력 : ', value);
            let regexpUserEmail = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,3})$/i;;
            dispatch(
                changeField({
                    form: "register",
                    key: name,
                    value: value,
                })
            );
            if(value.length>0 && false === regexpUserEmail.test(value)){
                setError4('이메일을 정확히 입력해주세요.')
                console.log('이메일 유효성 체크(error4) : ', error4);
            }else{
                setError4(null);
            }
        }
        else {
          dispatch(
            changeField({
              form: "register",
              key: name,
              value: value,
            })
          );
        }
    };

    // 버튼 onPress 이벤트 핸들러
    const onPress = e => {
        e.preventDefault();
        const { userPhone, /*authNum, */password, passwordConfirm, userEmail, isChecked1, isChecked2, isChecked3 } = form;
        
        // // 하나라도 비어 있다면
        // if([userPhone, authNum, password, passwordConfirm].includes('') && [isChecked1, isChecked2, isChecked3].includes(false)){
        //     console.log('양식을 모두 입력하세요.');
        //     setError('양식을 모두 입력하세요.');
        //     return;
        // }

        // 하나라도 비어 있다면
        // if([userPhone, /*authNum, */password, passwordConfirm, userEmail].includes('') && [isChecked1, isChecked2, isChecked3].includes(false)){
        if((userPhone.length===0 || password.length===0 || passwordConfirm.length===0 || userEmail.length===0) && (isChecked1 === false || isChecked2 === false || isChecked3 === false)){
            console.log("이메일 길이", userEmail.length);
            let arrayError = [];
            if (userPhone.length === 0) arrayError.push("휴대폰");
            else {
              if (arrayError.includes("휴대폰"))
                arrayError.splice(arrayError.indexOf("휴대폰"), 1);
            }

            if (password.length === 0) arrayError.push("비밀번호");
            else {
              if (arrayError.includes("비밀번호"))
                arrayError.splice(arrayError.indexOf("비밀번호"), 1);
            }

            if (passwordConfirm.length === 0) arrayError.push("비밀번호확인");
            else {
              if (arrayError.includes("비밀번호확인"))
                arrayError.splice(arrayError.indexOf("비밀번호확인"), 1);
            }

            if (userEmail.length === 0) arrayError.push("이메일");
            else {
              if (arrayError.includes("이메일"))
                arrayError.splice(arrayError.indexOf("이메일"), 1);
            }

            if (
              isChecked1 === false ||
              isChecked2 === false ||
              isChecked3 === false
            )
              arrayError.push("약관동의");
            else {
              if (arrayError.includes("약관동의"))
                arrayError.splice(arrayError.indexOf("약관동의"), 1);
            }

            const strError = '필수항목 미입력\n: '+arrayError.toString();

            // setError1(null);
            setError2(null);
            setError3(null);
            setError4(null);
            setError5(strError);
            console.log('미입력 유효성 체크(error5) : ', error5);

            return;
        }

        // 휴대폰 번호가 올바르지 않음
        if(userPhone.length<11){
            console.log('휴대폰 번호가 올바르지 않습니다.');
            setError5('휴대폰 번호가 올바르지 않습니다.');

            return;
        }

        // 비밀번호 불일치
        if(password.length>0 && passwordConfirm.length>0 && password !== passwordConfirm){
            dispatch(changeField({ form: 'register', key: 'password', value: '' }));
            dispatch(changeField({ form: 'register', key: 'passwordConfirm', value: '' }));
            
            // setError1(null);
            setError2(null);
            setError3(null);
            setError4(null);

            console.log('비밀번호가 일치하지 않습니다.');
            setError5('비밀번호가 일치하지 않습니다.');

            return;
        }


        apiRegister({userPhone, password, userEmail})
            .then(async (res) => {
                if(res.result) {
                    console.log("==================apiRegister.res.result==================", res.userInfo);
                    dispatch(register(res.userInfo));
                }
                else{
                    console.log(res.error);
                    dispatch(registerError(res.error));
                }
            })
            .catch((e) => {
                console.log("apiRegister.catch - e:", e);
            });
    };

    // 회원가입 성공 / 실패 처리
    const registerSuccessAlert = () => {
        Alert.alert('알림', '정상적으로 회원가입 되었습니다.', [
          { text: '확인', onPress: () => navigation.navigate("UserLoginPage") },
        ]);
        return true;
    };
    useEffect(() => {
        if(authError !== ''){
            console.log('회원가입 실패');
            console.log(authError);

            const authErrorDetail = String(authError).split("status code ")[1];

            console.log("authErrorDetail : ", authErrorDetail);

            // 오류에 대한 구체적 유형
            if (authErrorDetail === '409') {
                console.log('가입 실패: 이미 가입한 회원(409)');
                setError5('가입 실패: 이미 가입한 회원(409)');
                return;
            }
            else if (authErrorDetail === '410'){
                console.log('가입 실패: 관리자가 등록하지 않은 사용자(410)');
                setError5('가입 실패: 관리자가 등록하지 않은 사용자(410)');
                return;
            }
            else if(authErrorDetail === '500'){
                // 기타 이유
                console.log('가입 실패: 기타(500)');
                setError5('가입 실패: 기타(500)');
                return;
            }
            else{
                console.log('가입 실패: 기타 : ', authErrorDetail);
                setError5('가입 실패: 기타(', authErrorDetail,')');
                return;
            }
        }
        if (String(userInfo).trim() !== "" && String(userInfo).trim() !== "null" && userInfo !== undefined && userInfo !== null) {
            console.log('회원가입 성공');
            console.log("회원가입 유저 정보 : ", userInfo, typeof userInfo);

            dispatch(initializeForm('register'));

            registerSuccessAlert();

        }
    }, [userInfo, authError]);

    return (
        <AuthForm
            type='register'
            form={form}
            onChangeText={onChangeText}
            onPress={onPress}
            validErrors={{
                // error1: error1,
                error2: error2,
                error3: error3,
                error4: error4,
                error5: error5,
            }}
            navigation={navigation}
            route = {route}
        />
    );
};

export default RegisterForm;