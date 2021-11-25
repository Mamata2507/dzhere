import React from 'react';
import AuthFormFindPassword from './AuthFormFindPassword';
import AuthFormLogin from './AuthFormLogin';
import AuthFormRegister from './AuthFormRegister';

// const textMap = {
//     login: '로그인',
//     register : '회원가입',
// }

const AuthForm = ({type, form, onChangeText, onPress, error, navigation, route, validErrors }) => {
    console.log("AuthForm");
    // const text = textMap[type];
    return (
      <>
        {type === "register" && (
          <AuthFormRegister
            form={form}
            onChangeText={onChangeText}
            onPress={onPress}
            error={error}
            navigation={navigation}
            route={route}
            validErrors={validErrors}
          />
        )}
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