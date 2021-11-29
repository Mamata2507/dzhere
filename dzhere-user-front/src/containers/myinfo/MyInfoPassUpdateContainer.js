import { Contents } from '../../components/myinfo/MyInfoPassUpdate'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, Platform } from 'react-native';
import { getPw, updatePw } from '../../modules/myinfo/myInfo'
import { useNavigation } from '@react-navigation/native'
import { changeField } from '../../modules/myinfo/myInfo';

const MyInfoPassUpdateContainer = () => {

  const [error1, setError1] = useState(null);
  const [error2, setError2] = useState(null);
  const [error3, setError3] = useState(null);
  const [passwordTemp, setPasswordTemp] = useState('');

  const dispatch = useDispatch();

  const { phone, myInfoError } = useSelector(({ auth, myinfo }) => ({
    phone: auth.userInfo.userPhone,
    myInfoError: myinfo.myInfoError
  }));

  // TextInput 값 변경 이벤트 핸들러
  const onChangeText = e => {
    console.log('onChange : ', e);
    const { value, name } = e;
    if(name === 'currentPassword' || name === 'newPassword'){
      let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?)(!@$%^&*-]).{8,16}$/;
      console.log('password 입력 : ', value);
      dispatch(
        changeField({
          key: name,
          value: value,
        })
      );
      setPasswordTemp(value);

      if(value.length>0 && false === regex.test(value)){
        setError1('8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.');
        console.log('비밀번호 유효성 체크(error) : ', error1);
      }else{
          setError2(null);
      }
    }
    if(name === 'passwordConfirm'){
      console.log('passwordConfirm 입력 : ', value);
      dispatch(
          changeField({
              key: name,
              value: value,
          })
      );
      if(passwordTemp.length>0 && value.length>0 && passwordTemp !== value){
          setError2('비밀번호가 일치하지 않습니다.');
          console.log('비밀번호 확인 유효성 체크(error2) : ', error2);
      }
      else{
          setError2(null);
      }
    }
  }

  // 버튼 onPress 이벤트 핸들러
  const onPress = e => {
    e.preventDefault();
    // currentPassword, newPassword, passwordConfirm

    // 하나라도 비어 있다면
    if((currentPassword.length === 0 || newPassword === 0 || passwordConfirm === 0)){
      let arrayError = [];
      if (currentPassword.length === 0) arrayError.push('기존 비밀번호');
      else if (arrayError.includes('기존 비밀번호')){
        arrayError.splice(arrayError.indexOf('기존 비밀번호'), 1);
      }
      if (newPassword.length === 0) arrayError.push('새 비밀번호');
      else if (arrayError.includes('새 비밀번호')){
        arrayError.splice(arrayError.indexOf('새 비밀번호'), 1);
      }
      if (passwordConfirm.length === 0) arrayError.push('새 비밀번호');
      else if (arrayError.includes('비밀번호 확인')){
        arrayError.splice(arrayError.indexOf('비밀번호 확인'), 1);
      }
    }

    const strError = '필수항목 미입력\n: '+arrayError.toString();

    setError1(null);
    setError2(null);
    setError3(strError);
    console.log('미입력 유효성 체크(error3) : ', error3);
  }

  // 비밀번호 불일치
  if(newPassword.length > 0 && passwordConfirm.length > 0 && newPassword !== passwordConfirm){
    dispatch(changeField({ key: 'newPassword', value: '' }));
    dispatch(changeField({ key: 'passwordConfirm', value: '' }));
    
    // setError1(null);
    setError1(null);
    setError2(null);

    console.log('비밀번호가 일치하지 않습니다.');
    setError3('비밀번호가 일치하지 않습니다.');

    return;    
  }

  // 200번줄부터 시작
  // 1. 기존 비번 동일한가? 암호화, 복호화?
  // 2. 새로운 비번으로 업데이트
  
  // if(error2 === null && error3 === null && error4 === null){
  //   apiRegister({userPhone, password, userEmail})
  //       .then(async (res) => {
  //           if(res.result) {
  //               console.log("==================apiRegister.res.result==================", res.userInfo);
  //               dispatch(register(res.userInfo));
  //           }
  //           else{
  //               console.log('apiRegister.res.result is false, error is : ', res.error);
  //               dispatch(registerError(res.error));
  //           }
  //       })
  //       .catch((e) => {
  //           console.log("apiRegister.catch - e:", e);
  //       });
  // }
  

  
  return (
      <Contents

      />
  );
};

export default MyInfoPassUpdateContainer;