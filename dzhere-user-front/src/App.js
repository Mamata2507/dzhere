import React from "react";
import AuthStack from "./navigations/AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { enableScreens } from 'react-native-screens';
// const prefix = Linking.createURL('/');

enableScreens();

// const config = {
//   screens: {
//     UserLoginPage: 'index',
//     UserSignUpPage: 'signups'
//   },
// };
// const config = {
//   UserLoginPage: {path :"login"},
//   UserSignUpPage: {path: "signup"},
//   ClientDrawer: {path: "" },
//   CheckPage: {path: "main"},
//   ListPage: {path: "list"},
//   MyPage: {path: "mypage"},
//   ExternalPage: {path: "external"},
// };

// const linking = {
//   prefixes: [prefix],
//   // config,
// };

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
