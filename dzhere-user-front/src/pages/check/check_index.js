import * as React from 'react';
import { useEffect } from 'react';
import { View, Text, SafeAreaView, Alert, BackHandler } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { logout } from '../../modules/auth/auth';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import client from '../../lib/api/client';
import { apiLogout } from '../../lib/api/auth/auth';

const check_index = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const {userInfo, } = useSelector(({auth}) => ({
    userInfo: auth.userInfo,
  }))

  console.log('check_index 페이지에서 받은 토큰 결과 : \n', userInfo.token, typeof(userInfo.token));
  console.log('check_index 페이지에서 받은 헤더 정보 : \n', client.defaults.headers.common['Authorization']);

  // 뒤로가기 앱 종료
  const backAction = () => {
    if (!navigation.isFocused()) {
      return false;
    }
    Alert.alert('잠깐!', 'App을 정말로 종료 하시겠어요?', [
      {
        text: '아니오',
        onPress: () => null,
        style: 'cancel',
      },
      { text: '네', onPress: () => {
          
          BackHandler.exitApp()
        }
      },
    ]);
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

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

          <Text>토큰 정보 : {'\n'+String(userInfo.token)}</Text>
          
          <TouchableOpacity
            onPress={() => {
                apiLogout()
                .then(async (res) => {
                  if(res.result){
                    console.log('result : ',res.message);
                    dispatch(logout());
                    try{
                      await AsyncStorage.clear();
                      client.defaults.headers.common['Authorization'] = '';
                      navigation.reset({
                          index: 0,
                          routes: [{ name: "UserLoginPage"}]
                        })
                    }
                    catch (e) {
                      console.log("Storage is not working : ", e);
                    }
                  } else{
                    console.log(res.message);
                    dispatch(logout());
                    try{
                      await AsyncStorage.clear();
                      client.defaults.headers.common['Authorization'] = '';
                      navigation.reset({
                          index: 0,
                          routes: [{ name: "UserLoginPage"}]
                        })
                    }
                    catch (e) {
                      console.log("Storage is not working : ", e);
                    }
                  }
                })
                .catch((e) => {
                  console.log("apiLogout.catch - e:", e);
                });
            }}
          >
            <Text style={{
              fontSize: 25,
              textAlign: "center",
              marginBottom: 16,
            }}>로그아웃</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => client.get('api/user/test')}
          >
            <Text style={{
              fontSize: 25,
              textAlign: "center",
              marginBottom: 16,
            }}>테스트</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 18, textAlign: "center", color: "grey" }}>
          Custom React Navigate Drawer
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default check_index;