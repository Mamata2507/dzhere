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

  function onPress(){
      apiLogout()
      .then(async (res) => {
        if (res.result) {
          console.log("result : ", res.message);
          dispatch(logout());
          try {
            await AsyncStorage.clear();
            client.defaults.headers.common["Authorization"] = "";
            navigation.reset({
              index: 0,
              routes: [{ name: "UserLoginPage" }],
            });
          } catch (e) {
            console.log("Storage is not working : ", e);
          }
        } else {
          console.log(res.message);
          dispatch(logout());
          try {
            await AsyncStorage.clear();
            client.defaults.headers.common["Authorization"] = "";
            navigation.reset({
              index: 0,
              routes: [{ name: "UserLoginPage" }],
            });
          } catch (e) {
            console.log("Storage is not working : ", e);
          }
        }
      })
      .catch((e) => {
        console.log("apiLogout.catch - e:", e);
      });
   } 
  return (
      <MyInfoWeb
          phone={phone}
          onPress={onPress}
      />
  );
};

export default MyInfoContainerWeb;