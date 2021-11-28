import { Contents } from '../../components/myinfo/MyInfoEmailUpdate'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, Platform } from 'react-native';
import { getEmail, updateEmail } from '../../modules/myinfo/myInfo'
import { useNavigation } from '@react-navigation/native'

const MyInfoEmailUpdateContainer = () => {

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const { email, loadingEmail, phone } = useSelector(({ myinfo, loading }) => ({
    email: myinfo.email,
    loadingEmail: loading.GET_EMAIL,
    phone: myinfo.phone,
  }));

  const [newEmail, onChangeNewEmail] = React.useState('');

  useEffect(() => {
    dispatch(getEmail(phone));
  }, []);
  
  function onPress(){
      if (Platform.OS === 'web') {
        if(newEmail === ''){
          alert('빈 항목이 있습니다.');
        } else {
          dispatch(updateEmail({phone, newEmail}));
          alert('이메일이 성공적으로 변경되었습니다.');
          onChangeNewEmail('');
          setTimeout(()=>{
            navigation.goBack()
          }, 800);
        }
    } else {
        if(newEmail === ''){
          Alert.alert('빈 항목이 있습니다.');
        } else {
          dispatch(updateEmail({phone, newEmail}));
          Alert.alert('이메일이 성공적으로 변경되었습니다.');
          onChangeNewEmail('');
          setTimeout(()=>{
            navigation.goBack()
          }, 800);
        }
    }
  }
  
  return (
      // Login -> 컨테이너의 자식 컴포넌트
      <Contents
        email={email}
        loadingEmail={loadingEmail}
        onPress={onPress}
        newEmail={newEmail}
        onChangeNewEmail={onChangeNewEmail}
      />
  );
};

export default MyInfoEmailUpdateContainer;