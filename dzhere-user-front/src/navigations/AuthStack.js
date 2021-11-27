/* 관리자, 사용자 버튼 부터 로그인 완료 전까지의 stack */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserLoginPage from "../pages/auth/UserLoginPage";
import UserRegisterPage from "../pages/auth/UserRegisterPage";
import UserFindPasswordPage from "../pages/auth/UserFindPasswordPage";
import ClientDrawer from "./ClientDrawer";
import { useSelector } from "react-redux";
import Splash from "../components/common/splash"

const Stack = createStackNavigator();

const AuthStack = () => {
  console.log("AuthStack");
  const { isSignout } = useSelector(({ auth }) => ({
    isSignout: auth.isSignout,
  }));
  return (
    <Stack.Navigator
      initialRouteName="UserLoginPage"
      screenOptions={{
        headerTransparent: false,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#F2F2F2",
        },
      }}
    >
      <Stack.Screen
        name="UserLoginPage"
        component={UserLoginPage}
        options={{
          headerTransparent: true,
          title: "로그인",
          animationTypeForReplace: isSignout ? "pop" : "push",
        }}
      />

      <Stack.Screen
        name="UserRegisterPage"
        component={UserRegisterPage}
        options={{
          title: "회원가입",
        }}
      />

      <Stack.Screen
        name="UserFindPasswordPage"
        component={UserFindPasswordPage}
        options={{
          title: "비밀번호 찾기",
        }}
      />

      <Stack.Screen
        name="ClientDrawer"
        component={ClientDrawer}
        options={{
          title: "오늘의 출석",
        }}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          title: "",
        }}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;
