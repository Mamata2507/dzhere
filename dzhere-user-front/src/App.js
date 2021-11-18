import React from "react";
import AuthStack from "./navigations/AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { Sidebar } from "./components/common/SideBar";
import {enableScreens} from 'react-native-screens';
const prefix = Linking.createURL('/');

enableScreens();

const App = () => {
  const config = {
    screens: {
      UserLoginPage: 'index',
      UserSignUpPage: 'signups'
    },
  };
  // const config = {
  //   UserLoginPage: {path :"login"},
  //   UserSignUpPage: {path: "signup"},
  //   ClientDrawer: {path: "" },
  //   CheckPage: {path: "main"},
  //   ListPage: {path: "list"},
  //   MyPage: {path: "mypage"},
  //   ExternalPage: {path: "external"},
  // };
  const linking = {
    prefixes: [prefix],
    config,
  };
  return (
    <NavigationContainer linking={linking}>
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
