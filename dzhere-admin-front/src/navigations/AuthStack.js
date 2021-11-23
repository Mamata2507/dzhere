/* 관리자, 사용자 버튼 부터 로그인 완료 전까지의 stack */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AdminLoginPage from "../pages/admin/auth/Auth";
import AdminSignUpPage from "../pages/admin/auth/Auth";
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
        name="AdminSignUpPage"
        component={AdminSignUpPage}
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
