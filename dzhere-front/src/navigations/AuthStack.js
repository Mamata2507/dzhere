/* 관리자, 사용자 버튼 부터 로그인 완료 전까지의 stack */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SelectAuthPage from "../SelectAuthPage";
import UserLoginPage from "../pages/client/auth/auth_index";
import UserSignUpPage from "../pages/client/auth/auth_index";
import AdminLoginPage from "../pages/admin/auth/auth_index";
import ClientDrawer from "./ClientDrawer";

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SelectAuthPage"
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="SelectAuthPage"
        component={SelectAuthPage}
        options={{
          title: "", //Set Header Title
        }}
      />
      <Stack.Screen
        name="UserLoginPage"
        component={UserLoginPage}
        options={{
          title: "", //Set Header Title
        }}
      />
      <Stack.Screen
        name="UserSignUpPage"
        component={UserSignUpPage}
        options={{
          title: "", //Set Header Title
        }}
      />
      <Stack.Screen
        name="ClientDrawer"
        component={ClientDrawer}
        options={{
          title: "", //Set Header Title
        }}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AdminLoginPage"
        component={AdminLoginPage}
        options={{
          title: "", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;
