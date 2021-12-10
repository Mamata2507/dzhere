import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import CustomTextInput from './CustomTextInput';
import ErrorMessage from './ErrorMessage';
import image from '../../../assets/logo.png'
import client from '../../lib/api/client';

const AuthFormLogin = ({form, onChangeText, onPress, error, navigation, route}) => {
    // console.log("AuthFormLogin");

    return (
      <>
        <StatusBar style="light" />
        <View style={styles.container}>
          <Image source={image} style={styles.logo} />
          <Text style={styles.logoTitle}>DHere</Text>

          <View style={{ flexDirection: "row" }}>
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </View>

          <CustomTextInput
            name="userPhone"
            autoCompleteType="tel"
            value={form.userPhone}
            onChangeText={onChangeText}
            placeholder="휴대폰 번호"
            maxLength={11}
            keyboardType="numeric"
            style={styles.inputUserPhone}
          />

          <CustomTextInput
            name="password"
            autoCompleteType="password"
            value={form.password}
            onChangeText={onChangeText}
            placeholder={"패스워드"}
            maxLength={20}
            keyboardType="default"
            secureTextEntry={true}
            style={styles.inputPassword}
          />

          <Text
            style={styles.txtFindPassword}
            onPress={() => navigation.navigate("UserFindPasswordPage")}
            /* 구현 예정 */
          >
            비밀번호 찾기
          </Text>

          <TouchableOpacity style={styles.loginBtn} onPress={onPress}>
            <Text style={styles.text}>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signupBtn}
            onPress={() => navigation.navigate("UserRegisterPage")}
          >
            <Text style={styles.text}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </>
    );
};

export default AuthFormLogin;

const styles = StyleSheet.create({
  logo: {
    resizeMode: "center",
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 15,
  },
  logoTitle: {
    color: "black",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 57,
  },
  inputUserPhone: {
    width: 277,
    height: 44,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#e8e8e8",
    borderRadius: 40,
  },
  inputPassword: {
    width: 277,
    height: 44,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#e8e8e8",
    borderRadius: 40,
  },
  txtFindPassword: {
    marginBottom: 57,
    paddingRight: 10,
    textAlign: "right",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    // // flex: 1,
    // alignItems: "center",
    // // justifyContent: "center",
    // // top: Platform.OS === 'android' && 80,
  },
  loginBtn: {
    backgroundColor: "#FFC279",
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 43,
    padding: 15,
  },
  signupBtn: {
    backgroundColor: "#8DC1FF",
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 30,
    padding: 15,
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  safearea: { flex: 1, backgroundColor: "white" },
});