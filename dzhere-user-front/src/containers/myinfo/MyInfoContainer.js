import { Contents } from '../../components/myinfo/MyInfo'
import React from 'react';
import { useSelector } from 'react-redux';
import { Alert, Platform } from 'react-native';

const MyInfoContainer = () => {

  const phone = useSelector(({ auth }) => auth.userInfo.userPhone);

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