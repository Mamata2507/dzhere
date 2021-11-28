import { Contents } from '../../components/myinfo/MyInfo'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, Platform } from 'react-native';
import { setPhone } from '../../modules/myinfo/myInfo'

const MyInfoContainer = () => {

  const dispatch = useDispatch();

  const { phone } = useSelector(({ myinfo }) => ({
    phone: myinfo.phone
  }))

  AsyncStorage.setItem('u_phone', '01023454710');

  useEffect(() => {
    async function getStorage() {
        if (await AsyncStorage.getItem("u_phone")) {
        let u_phone = await AsyncStorage.getItem("u_phone");
        dispatch(setPhone(u_phone));
      }
    }
    getStorage();
  }, []);

  function onPress(){
    if (Platform.OS === 'web') {
      alert('로그아웃 구현 예정')
   } else {
       Alert.alert('로그아웃 구현 예정')
   }
  }
  
  return (
      <Contents
          phone={phone}
          onPress={onPress}
      />
  );
};

export default MyInfoContainer;