/* 관리자, 사용자 버튼 부터 로그인 완료 전까지의 stack */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AdminLoginPage from '../pages/auth/AdminLoginPage'
import AdminFindPasswordPage from "../pages/auth/AdminFindPasswordPage";
import AdminRegisterPage from "../pages/auth/AdminRegisterPage";
import AdminDrawer from "./AdminDrawer";

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AdminLoginPage"
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="AdminLoginPage"
        component={AdminLoginPage}
        options={{
          title: "", //Set Header Title
        }}
      />
      <Stack.Screen
        name="AdminFindPasswordPage"
        component={AdminFindPasswordPage}
        options={{
          title: "", //Set Header Title
        }}
      />
      <Stack.Screen
        name="AdminRegisterPage"
        component={AdminRegisterPage}
        options={{
          title: "", //Set Header Title
        }}
      />
      <Stack.Screen
        name="AdminDrawer"
        component={AdminDrawer}
        options={{
          title: "", //Set Header Title
        }}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;
