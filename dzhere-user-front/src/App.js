import React from "react";
import AuthStack from "./navigations/AuthStack";
import { NavigationContainer } from "@react-navigation/native";

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
