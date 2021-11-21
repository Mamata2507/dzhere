import { Contents } from '../../../components/client/myinfo/MyInfoEmailUpdate'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import { setPhone, getEmail, updateEmail } from '../../../modules/client/myinfo/myInfo'

const MyInfoEmailUpdateContainer = () => {

    const dispatch = useDispatch();

    const { email, loadingEmail, phone } = useSelector(({ myinfo, loading }) => ({
      email: myinfo.email,
      loadingEmail: loading.GET_EMAIL,
      phone: myinfo.phone,
    }));
    
    const [newEmail, onChangeNewEmail] = React.useState(null);
    
    AsyncStorage.setItem('u_phone', '01023454710');

    useEffect(() => {
      async function getStorage() {
        if (await AsyncStorage.getItem("u_phone")) {
          let u_phone = await AsyncStorage.getItem("u_phone");
          dispatch(setPhone(u_phone));
          dispatch(getEmail(u_phone));
        }
      }
      getStorage();
    }, []);
  
  function onPress(){
    dispatch(updateEmail({phone, newEmail}));
    Alert.alert('이메일 변경 완료');
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