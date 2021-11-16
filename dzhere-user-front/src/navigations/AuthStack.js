/* 관리자, 사용자 버튼 부터 로그인 완료 전까지의 stack */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserLoginPage from "../pages/client/auth/auth_index";
// import UserSignUpPage from "../pages/client/auth/auth_index";
import UserFindPassword from "../pages/client/auth/auth_findPassword";
import UserRegister from "../pages/client/auth/auth_register";
import ClientDrawer from "./ClientDrawer";

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      // initialRouteName="UserLoginPage"
      initialRouteName="UserRegister"
      screenOptions={{
        headerTransparent: true,
      }}
    >
      {/* <Stack.Screen
        name="SelectAuthPage"
        component={SelectAuthPage}
        options={{
          title: "", //Set Header Title
        }}
      /> */}
      <Stack.Screen
        name="UserLoginPage"
        component={UserLoginPage}
        options={{
          title: "", //Set Header Title
        }}
      />
      <Stack.Screen
        name="UserFindPassword"
        component={UserFindPassword}
        options={{
          title: "", //Set Header Title
        }}
      />
      <Stack.Screen
        name="UserRegister"
        component={UserRegister}
        options={{
          title: "", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;
