// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { Button, View, Text, SafeAreaView, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../../../App';
import JWT from 'expo-jwt';
import jwt_decode from "jwt-decode";
import { logout, restoreInfo } from '../../../modules/client/auth/auth';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import client from '../../../lib/api/client';
import axios from 'axios';

const check_index = ({ navigation, route }) => {
  // console.log(navigation);
  // console.log(route);
  // if (Platform.OS === "web") console.log(localStorage.getItem("user")); 
  // else if (Platform.OS === "android")
  //   console.log(asyncStorage.getItem("user")); 
  const dispatch = useDispatch();
  const {userInfo, } = useSelector(({auth}) => ({
    userInfo: auth.userInfo,
  }))


  console.log('check_index 페이지에서 정보 받은 결과 : ', userInfo.token, typeof(userInfo.token));



  // console.log('check_index 페이지에서 유저 토큰 받은 결과 : ', userToken);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            오늘의 출석
          </Text>

          <Text>{String(userInfo.token)}</Text>
          
          {/* <Text>{}</Text> */}
          <TouchableOpacity
            onPress={async () => {
              try {
                AsyncStorage.clear();
                // if(Platform.OS == 'web'){
                //   await localStorage.setItem('userToken', '');
                //   await localStorage.setItem('userInfo', '');
                // }
                // if(Platform.OS=='android'){
                //   AsyncStorage.clear();
                //   // await AsyncStorage.setItem('userToken', '');
                //   // await AsyncStorage.setItem('userInfo', '');
                // }
                dispatch(logout());
                console.log('로그아웃. Storage 초기화.');
                navigation.navigate("UserLoginPage");
                // navigation.reset({
                //   index: 0,
                //   routes: [
                //     {
                //       name: "UserLoginPage",
                //     },
                //   ],
                // });
              } catch (error) {
                console.log('로그아웃 에러 : ', error);
              }
              
            }}
          >
            <Text>로그아웃</Text>
          </TouchableOpacity>
          {/* <Button
            onPress={() => navigation.navigate('SecondPage')}
            title="Go to Second Page"
          />
          <Button
            onPress={() => navigation.navigate('ThirdPage')}
            title="Go to Third Page"
          /> */}
        </View>
        <Text style={{ fontSize: 18, textAlign: "center", color: "grey" }}>
          Custom React Navigate Drawer
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default check_index;