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
  const [notifyStatus, setNotifyState] = useState(false); // 알람 수신 상태
  const notificationListener = useRef();
  const responseListener = useRef();

  // 푸시 알람 기능
  function onNotify() {
    setNotifyState(!notifyStatus)
  }

  // 알람 수신 상태 변경할 때 마다 실행
  useEffect(() => {
    // 푸시 알람 ON
    if(notifyStatus === true){
      async function schedulePushNotification() {
        console.log('<<<<<<<< [ 푸시 알람 ON ] >>>>>>>>>>>');
        const ct = await getClassTime(phone); // 학생의 수업 시간 가져오기
        let ct_start_hour = ct.ct_start_hour; // 수업 시작 시간
        let ct_start_minute = ct.ct_start_minute; // 수업 시작 10분 전
        let ct_end_hour = ct.ct_end_hour; // 수업 시작 시간
        let ct_end_minute = ct.ct_end_minute; // 수업 시작 10분 전
        let day_temp = ct.ct_day; // 수업 요일
        let ct_day = day_temp.split('');
        for (let i = 0; i < ct_day.length; i++) {
          switch (ct_day[i]) {
            case '월':
              ct_day[i] = 2;
              break;
            case '화':
              ct_day[i] = 3;
              break;
            case '수':
              ct_day[i] = 4;
              break;
            case '목':
              ct_day[i] = 5;
              break;
            case '금':
              ct_day[i] = 6;
              break;
            default:
              break;
          }
        }

      // 요일의 길이만큼 트리거 생성
      for (let i = 0; i < ct_day.length; i++) {
        // 수업 시작 10분 전 알림
        await Notifications.scheduleNotificationAsync({
          content: {
            title: "[더조은here] ⏰출석체크를 해주세요",
            body: '수업 시작 10분 전입니다',
            data: { url: '../../pages/check/check_index' }, 
          },
          trigger: { 
            channelId: 'start_check',
            weekday: ct_day[i],
            hour: ct_start_hour,
            minute: ct_start_minute,
            repeats: true,
          },
        });
        // 수업 종료 10분 전 알림
        await Notifications.scheduleNotificationAsync({
          content: {
            title: "[더조은here] ⏰수업 종료 10분 전입니다",
            body: '퇴실체크를 잊지마세요!',
            data: { url: '../../pages/check/check_index' }, 
          },
          trigger: { 
            channelId: 'end_check',
            weekday: ct_day[i],
            hour: ct_end_hour,
            minute: ct_end_minute,
            repeats: true,
          },
        });
      }
    }
    schedulePushNotification();
  } 
    // 푸시 알람 OFF
    if(notifyStatus === false) {
      async function deleteNotificationChannel() {
        console.log('<<<<<<<< [ 푸시 알람 OFF ] >>>>>>>>>>>');
        await Notifications.deleteNotificationChannelAsync('start_check');
        await Notifications.deleteNotificationChannelAsync('end_check');
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

  return (
      <MyInfoAndroid
          phone={phone}
          onNotify={onNotify}         // 푸시알람
          notifyStatus={notifyStatus} // 푸시 알람 수신 상태
      />
  );
};

export default MyInfoContainerAndroid;