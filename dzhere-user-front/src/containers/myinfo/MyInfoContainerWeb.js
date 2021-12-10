import { MyInfoWeb } from '../../components/myinfo/MyInfoWeb'
import React from 'react';
import { useSelector } from 'react-redux';
import { apiLogout } from '../../lib/api/auth/auth'
import { useDispatch } from 'react-redux';
import { logout } from '../../modules/auth/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import client from '../../lib/api/client';
import { useNavigation } from '@react-navigation/native'


const MyInfoContainerWeb = () => {

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const phone = useSelector(({ auth }) => auth.userInfo.userPhone);

  return (
      <MyInfoWeb
          phone={phone}
      />
  );
};

export default MyInfoContainerWeb;