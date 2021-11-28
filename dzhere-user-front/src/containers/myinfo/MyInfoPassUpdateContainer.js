import { Contents } from '../../components/myinfo/MyInfoPassUpdate'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, Platform } from 'react-native';
import { getPw, updatePw } from '../../modules/myinfo/myInfo'
import { useNavigation } from '@react-navigation/native'

const MyInfoPassUpdateContainer = () => {

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const { pw, loadingPw, phone } = useSelector(({ myinfo, loading }) => ({
    pw: myinfo.pw,
    loadingPw: loading.GET_PW,
    phone: myinfo.phone,
  }));

  // 기존 비밀번호 체크
  const [pwCk1, onChangePwCk1] = React.useState('');
  // 새로운 비밀번호
  const [newPw, onChangeNewPw] = React.useState('');
  // 비밀번호 확인
  const [pwCk2, onChangePwCk2] = React.useState('');

  useEffect(() => {
    dispatch(getPw(phone));
  }, []);
  console.log(pw);

  function onPress(){
    if (Platform.OS === 'web') {
      if(pwCk1 === '' || newPw === '' || pwCk2 === ''){
        alert('빈 항목이 있습니다.');
      } else if(!loadingPw && pw && pwCk1 !== pw.u_pw){
        alert('기존 비밀번호 정보가 틀립니다.');
      } else if(newPw !== pwCk2){
        alert('비밀번호 확인 정보가 틀립니다.');
      } else {
        dispatch(updatePw({phone, newPw}));
        alert('비밀번호가 성공적으로 변경되었습니다.');
        setTimeout(()=>{
          navigation.goBack()
        }, 800);
      }
    } else {
      if(pwCk1 === '' || newPw === '' || pwCk2 === ''){
        Alert.alert('빈 항목이 있습니다.');
      } else if(!loadingPw && pw && pwCk1 !== pw.u_pw){
        Alert.alert('기존 비밀번호 정보가 틀립니다.');
      } else if(newPw !== pwCk2){
        Alert.alert('비밀번호 확인 정보가 틀립니다.');
      } else {
        dispatch(updatePw({phone, newPw}));
        Alert.alert('비밀번호가 성공적으로 변경되었습니다.');
        setTimeout(()=>{
          navigation.goBack()
        }, 800);
      }
    }
  }
  
  return (
      // Login -> 컨테이너의 자식 컴포넌트
      <Contents
        pwCk1={pwCk1}
        onChangePwCk1={onChangePwCk1}
        newPw={newPw}
        onChangeNewPw={onChangeNewPw}
        pwCk2={pwCk2}
        onChangePwCk2={onChangePwCk2}
        onPress={onPress}
      />
  );
};

export default MyInfoPassUpdateContainer;