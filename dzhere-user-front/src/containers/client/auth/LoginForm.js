import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login, loginError, restoreInfo, } from '../../../modules/client/auth/auth';
import AuthForm from '../../../components/client/auth/AuthForm';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiLogin } from '../../../lib/api/auth';
import client from '../../../lib/api/client';
import { BackHandler, Alert } from 'react-native';

const LoginForm = ({ navigation, route }) => {
    console.log("LoginForm");
    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    const { form, userInfo, authError, } = useSelector(({ auth }) => ({
      form: auth.login,
      userInfo: auth.userInfo,
      authError: auth.authError,
    }));

    // 컴포넌트 처음 렌더링 시, 변수 form의 값 초기화
    // 두 번째 매개변수 배열 : 무한루프 방지.
    useEffect(() => {
      console.log("login state 초기화");
      dispatch(initializeForm("login"));
    }, [dispatch]);

    // TextInput 값 변경 이벤트 핸들러
    const onChangeText = (e) => {
      console.log("onChangeText");
      console.log(e);
      const { value, name } = e;

      if(name === 'userPhone'){
        let regexpUserPhone = /^[0-9]{0,11}$/;
        if (regexpUserPhone.test(value)) {
          console.log("userPhone 입력 : ", value);
          dispatch(
            changeField({
              form: "login",
              key: name,
              value: value,
            })
          );
        } else console.log("userPhone - 숫자 아닌 값 입력 : ", value);
      }
      if(name === 'password')
        dispatch(
          changeField({
            form: "login",
            key: name,
            value: value,
          })
        );
    };

    // 로그인 버튼(onPress) 이벤트 핸들러
    const onPress = (e) => {
      console.log('어디지3');
      e.preventDefault();
      const { userPhone, password } = form;
      console.log("LoginForm | onPress | 아이디, 비밀번호 : ", {
        userPhone,
        password,
      });

      if (userPhone === "") {
        setError("휴대폰 번호를 입력해주세요.");
        return;
      } else if (userPhone.length < 11) {
        setError("휴대폰 번호가 올바르지 않습니다.");
        return;
      } else if (password === "") {
        setError("비밀번호를 입력해주세요.");
        return;
      } else {
        setError(null);
        apiLogin({ userPhone, password })
          .then(async (res) => {
            if (res.result) {
              console.log(
                "==================res.result==================",
                res.result.userInfo
              );
              dispatch(login(res.userInfo));
              try {
                await AsyncStorage.setItem(
                  "userInfo",
                  JSON.stringify(res.userInfo)
                );
              } catch (e) {
                console.log("Storage is not working : ", e);
              }
            } else {
              console.log(res.error);
              dispatch(loginError(res.error));
            }
          })
          .catch((e) => {
            console.log("apiLogin.catch - e:", e);
          });
      }
    };

    // 로그인 실패 / 성공 처리
    useEffect(() => {
      console.log('어디지2');
      // 로그인 시도에서 오류가 있는지  
      if (authError !== "") {
        console.log('어디지3');
        console.log("로그인 실패");
        console.log(authError);

        const authErrorDetail = String(authError).split("status code ")[1];
        const isNetworkError = String(authError).indexOf('Network Error');

        console.log("authErrorDetail : ", authErrorDetail);

        // 오류에 대한 구체적 유형
        if (authErrorDetail === "401"){
          console.log('로그인 실패 : 잘못된 비밀번호(401)');
          setError("로그인 실패 : 잘못된 비밀번호(401)");
          return;
        }
        else if (authErrorDetail === "402"){
          console.log('로그인 실패 : 존재하지 않는 아이디(402)');
          setError("로그인 실패 : 존재하지 않는 아이디(402)");
          return;
        }
          
        else if (authErrorDetail === "500"){
          console.log('로그인 실패 : 원인 불명(500)');
          setError("로그인 실패 : 원인 불명(500)");
          return;
        }
        else if (authErrorDetail === undefined && isNetworkError !== -1){
          console.log('네트워크 에러 : WIFI 연결을 확인해주세요.');
          setError("네트워크 에러 : WIFI 연결을 확인해주세요.");
          return;
        }
      }

      console.log('어디지4');
      // userInfo(유저 정보) state 값이 null이 아니면 로그인 처리 및 ClientDrawer-출석 페이지로 자동 이동
      if (String(userInfo).trim() !== "" && String(userInfo).trim() !== "null" && userInfo !== undefined && userInfo !== null) {
        console.log("로그인 성공");
        console.log("로그인 유저 정보 : ", userInfo, typeof(userInfo));

        dispatch(changeField({ form: 'login', key: 'userPhone', value: '' }));
        dispatch(changeField({ form: 'login', key: 'password', value: '' }));
        console.log('어디지2');
        client.defaults.headers.common['Authorization'] = 'Bearer ' + userInfo.token;

        navigation.navigate("ClientDrawer");
      }
      console.log('어디지5');
    }, [userInfo, authError, dispatch]);

    // 앱 실행마다 처음 한번 Storage에 저장된 userInfo(유저 정보)가 있는지 검사하고,
    // 있을 경우, state : userInfo  값을 storage : userInfo 값으로 초기화 해준다.
    useEffect(() => {
      console.log('어디지1');
      setError(null);

      const grepUserInfoAsync = async () => {
        try {
          let userInfo;

          userInfo = await AsyncStorage.getItem("userInfo");

          console.log("grepUserInfoAsync success");
          console.log("grepUserInfoAsync success-userInfo : ", JSON.parse(userInfo));

          userInfo = JSON.parse(userInfo);
          if (userInfo !== null && userInfo !== undefined && userInfo !== '' && userInfo !== 'null') {
            console.log("Restore 발생");
            console.log('Restore 헤더 정보 : ', client.defaults.headers.common['Authorization']);
            dispatch(restoreInfo(userInfo));
          }
        } catch (e) {
          console.log("grepUserInfoAsync fail : ", e);
        }
      };
      grepUserInfoAsync();
    }, []);

    // 뒤로가기 앱 종료
    const backAction = () => {
      Alert.alert('잠깐!', 'App을 정말로 종료 하시겠어요?', [
        {
          text: '아니오',
          onPress: () => null,
          style: 'cancel',
        },
        { text: '네', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };
    useEffect(() => {
      BackHandler.addEventListener('hardwareBackPress', backAction);
      return () => BackHandler.removeEventListener('hardwareBackPress', backAction);
    }, []);

    return (
      <AuthForm
        type="login"
        form={form}
        onChangeText={onChangeText}
        onPress={onPress}
        error={error}
        navigation={navigation}
        route={route}
      />
    );
};

export default LoginForm;