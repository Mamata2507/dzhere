import React from "react";
import AuthFormFindPassword from "./AuthFormFindPassword";
import AuthFormLogin from "./AuthFormLogin";

const AuthForm = ({
  type,
  form,
  onChangeText,
  onPress,
  error,
  navigation,
  route,
  validErrors,
}) => {
  // console.log("AuthForm");
  return (
    <>
      {type === "login" && (
        <AuthFormLogin
          form={form}
          onChangeText={onChangeText}
          onPress={onPress}
          error={error}
          navigation={navigation}
          route={route}
        />
      )}
      {type === "findPw" && (
        <AuthFormFindPassword
          form={form}
          onChangeText={onChangeText}
          onPress={onPress}
          error={error}
          navigation={navigation}
          route={route}
        />
      )}
    </>
  );
};

export default AuthForm;
