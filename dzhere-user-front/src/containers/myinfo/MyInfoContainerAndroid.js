import { MyInfoAndroid } from '../../components/myinfo/MyInfoAndroid'
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Alert, Platform } from 'react-native';
import { apiLogout } from '../../lib/api/auth/auth'
import { useDispatch } from 'react-redux';
import { logout } from '../../modules/auth/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import client from '../../lib/api/client';
import { useNavigation } from '@react-navigation/native'
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { getClassTime } from '../../lib/api/myInfo/myInfo';


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const MyInfoContainerAndroid = () => {

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const phone = useSelector(({ auth }) => auth.userInfo.userPhone);

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const [notifyStatus, setNotifyState] = useState(false); // 사용자 알람 허용 상태

  function onNotify() {
    console.log('1. [onNotify]notifyStatus='+notifyStatus);
    setNotifyState(!notifyStatus)
    console.log('2. [onNotify]notifyStatus='+notifyStatus);
  }

  useEffect(() => {
    console.log('3. [useEffect]notifyStatus='+notifyStatus);
    if(notifyStatus === true){
      async function schedulePushNotification() {
        console.log('4. <<<<<<<< [ schedulePushNotification ] >>>>>>>>>>>');
        const classTime = await getClassTime(phone);
        console.log('classTime>>>>>>>'+classTime);
        await Notifications.scheduleNotificationAsync({
          content: {
            title: "[더조은here] ⏰출석체크를 해주세요",
            body: '수업 시작 10분 전입니다',
            data: { url: '../../pages/check/check_index' }, 
          },
          trigger: { 
            hour: 21,
            minute: 35,
            repeats: true,
            channelId: 'check',
          },
        });
      }
      schedulePushNotification();
    } else {
      async function deleteNotificationChannel() {
        console.log('<<<<<<<< [ deleteNotificationChannel ] >>>>>>>>>>>');
        await Notifications.deleteNotificationChannelAsync('check');
      }
      deleteNotificationChannel();
    }
  }, [notifyStatus]);

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);



  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    return token;
  }


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
      <MyInfoAndroid
          phone={phone}
          onPress={onPress}
          // schedulePushNotification={schedulePushNotification}
          onNotify={onNotify}
      />
  );
};

export default MyInfoContainerAndroid;