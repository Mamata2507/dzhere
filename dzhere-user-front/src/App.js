import React from "react";
import AuthStack from "./navigations/AuthStack";
import UserAttendPage from "./pages/client/check/check_index";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from "./components/common/splash";
import axios from "axios";

export const AuthContext = React.createContext();

const Stack = createStackNavigator()

const App = () => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Storage에서 토큰 가져옴, 다른 화면으로 네비게이트
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem("userToken");
        console.log('토큰이 있는가 userToken', userToken);
      } catch (e) {
        // 토큰 가져오기 실패 FIXME: alert해주기
      }

      // FIXME: 토큰 유효한지 확인해주기

      // 스크린 언마운트됨, 버려짐
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        console.log(data);
        // 여기서 아이디와 비밀번호 서버로 보내고 토큰 받아옴
        let userToken = null;

        try {
          // userToken = await "dummy-auth-token";
          userToken = await axios({
            method: "POST",
            url: "http://172.30.1.40:8080/api/user/login",
            headers: {
              "X-Requested-With": "XMLHttpRequest",
            },
            data: {
              u_phone: data.phone,
              u_pw: data.password,
            },
          }).then((res) => {
            return res.data.token;
          });
          console.log('axios 요청 후 토큰 초기화 : ', userToken);
        } catch (e) {
          // 실패 시 에러 처리
        }
        // 받아온 토큰 저장
        try {
          await AsyncStorage.setItem("userToken", userToken);
        } catch (e) {
          // 토큰 저장 오류 처리
        }

        dispatch({ type: "SIGN_IN", token: userToken });
      },
      signOut: () => {
        AsyncStorage.removeItem("userToken");
        dispatch({ type: "SIGN_OUT", token: null });
      },
      signUp: async (data) => {
        let userToken = "temp";
        // 서버에 회원가입 데이터 보내고 토큰 받아오기
        try {
          userToken = await "dummy-auth-token";
        } catch (e) {
          // 실패 시 에러 처리
        }
        // 받아온 토큰 저장
        try {
          await AsyncStorage.setItem("userToken", userToken);
        } catch (e) {
          // 토큰 저장 오류 처리
        }

        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      getToken: () => {
        return AsyncStorage.getItem("userToken");
      },
      
    }),
    []
  );
  
  return (
    <AuthContext.Provider value={authContext}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            {state.isLoading ? (
              // 토큰 확인 중 스플레시 화면
              <Stack.Screen name="Splash" component={Splash} />
            ) : state.userToken == null ? (
              // 토큰 없으면 로그인 플로우
              <Stack.Screen
                name="AuthStack"
                component={AuthStack}
                options={{
                  title: 'Sign in',
                  animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                }}
              />
            ) : (
              // 토큰 있음, main 화면으로
              <Stack.Screen
                name="UserAttendPage"
                component={UserAttendPage}
                initialParams={{
                  userToken: state.userToken
                }}/>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthContext.Provider>
  );
};

export default App;
