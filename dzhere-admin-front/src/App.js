import React from "react";
import AuthStack from "./navigations/AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from 'react-native-screens';
// import 'bootstrap/dist/css/bootstrap.css';
// const prefix = Linking.createURL('/');

enableScreens();

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
  return (
    <NavigationContainer /*linking={linking}*/>
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
