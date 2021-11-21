import React from "react";
import AuthStack from "./navigations/AuthStack";
import UserAttendPage from "./pages/client/check/check_index";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from "./components/common/splash";
import axios from "axios";
import { Alert } from "react-native";
import * as Linking from "expo-linking";
import {enableScreens} from 'react-native-screens';
import UserLoginPage from "./pages/client/auth/UserLoginPage";
import UserRegisterPage from "./pages/client/auth/UserRegisterPage";

// const prefix = Linking.createURL('/');

// enableScreens();

const App = () => {
  // const config = {
  //   screens: {
  //     UserLoginPage: 'login',
  //     UserRegisterPage: 'register',
  //   },
  // };

  // const linking = {
  //   prefixes: [prefix],
  //   config,
  // }
  console.log('src/App');
  return (
    <NavigationContainer /*linking={linking}*/>
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
