import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login, loginError, restoreInfo, } from '../../../modules/client/auth/auth';
import AuthForm from '../../../components/client/auth/AuthForm';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiLogin } from '../../../lib/api/auth';
import { Platform } from 'react-native';

const LoginForm = ({ navigation, route }) => {
    console.log("LoginForm");
    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    const { form, userInfo, authError, isLoading } = useSelector(({ auth }) => ({
      form: auth.login,
      userInfo: auth.userInfo,
      authError: auth.authError,
      // isLoading: auth.isLoading,
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
      dispatch(
        changeField({
          form: "login",
          key: name,
          value: value,
        })
      );
    };

    // 버튼 onPress 이벤트 핸들러
    const onPress = (e) => {
      e.preventDefault();

      const { userPhone, password } = form;
      
      console.log("LoginForm | onPress | 아이디, 비밀번호 : ", {userPhone,password,});
      
      apiLogin({ userPhone, password })
        .then(async (res) => {
          if (res) {
            console.log("==================res.result", res.userInfo);
            dispatch(login(res.userInfo));
            try {
              await AsyncStorage.setItem("userInfo",JSON.stringify(res.userInfo));

              // if (Platform.OS == "android") {
              //   await AsyncStorage.setItem("userInfo",JSON.stringify(res.userInfo));
              // }
              // if (Platform.OS == "web") {
              //   await localStorage.setItem("userInfo",JSON.stringify(userInfo));
              // }
            } catch (error) {
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
      console.log("LoginForm | onPress | After dispatch(login)");
      console.log("userInfo : ", userInfo);
      console.log("userToken : ", userInfo.token);
      console.log("authError : ", authError);
    };

    useEffect(() => {
      // 로그인 혹은 회원 가입 시도에서 오류가 있는지  
      if (authError !== "") {
        console.log("로그인 실패");
        console.log(authError);

        const authErrorDetail = String(authError).split("status code ")[1];

        console.log("authErrorDetail : ", authErrorDetail);

        // 오류에 대한 구체적 유형
        if (authErrorDetail === "401")
          setError("로그인 실패 : 잘못된 비밀번호(401)");
        else if (authErrorDetail === "402")
          setError("로그인 실패 : 존재하지 않는 계정(402)");
        else if (authErrorDetail === "500")
          setError("로그인 실패 : 원인 불명(500)");
        return;
      }

      // userInfo(유저 정보) state 값이 null이 아니면 로그인 처리 및 ClientDrawer-출석 페이지로 자동 이동
      if (String(userInfo).trim() !== "" && String(userInfo).trim() !== "null") {
        console.log("로그인 성공");
        console.log("유저 정보 : ", userInfo, typeof userInfo);
        
        // navigation.reset({
        //     index: 0,
        //     routes: [
        //         {
        //             name: "ClientDrawer",
        //         }
        //     ]
        // })

        navigation.navigate("ClientDrawer");
      }
    }, [userInfo, authError]);

    // 앱 실행마다 처음 한번 Storage에 저장된 userInfo(유저 정보)가 있는지 검사하고,
    // 있을 경우, state : userInfo  값을 storage : userInfo 값으로 초기화 해준다.
    useEffect(() => {
      const grepTokenAsync = async () => {
        try {
          let userInfo;

          userInfo = await AsyncStorage.getItem("userInfo");
          
          // if (Platform.OS == "android") {
          //   userInfo = await AsyncStorage.getItem("userInfo");
          // }
          // if (Platform.OS == "web") {
          //   userInfo = await localStorage.getItem("userInfo");
          //   console.log();
          // }
          console.log("grepTokenAsync success");
          console.log("grepTokenAsync success-userInfo", JSON.parse(userInfo));

          userInfo = JSON.parse(userInfo);
          if (userInfo !== null) {
            console.log("restore 발생");
            dispatch(restoreInfo(userInfo));
          }
        } catch (e) {
          console.log("grepTokenAsync fail : ", e);
        }
      };
      grepTokenAsync();
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